import { randomBytes } from 'node:crypto'
import bcrypt from 'bcryptjs'

// ── Types ─────────────────────────────────────────────────────────────────────
interface Session {
  token: string
  createdAt: number
  expiresAt: number
  ip: string
}

interface RateEntry {
  attempts: number
  lockedUntil: number | null
  lastAttempt: number
}

// ── Constants ─────────────────────────────────────────────────────────────────
const SESSION_TTL_MS = 8 * 60 * 60 * 1000      // 8 hours
const MAX_ATTEMPTS = 5                            // attempts before lockout
const LOCKOUT_MS = 15 * 60 * 1000               // 15 minute lockout
const CLEANUP_INTERVAL_MS = 60 * 60 * 1000      // cleanup every hour

// ── In-memory stores ──────────────────────────────────────────────────────────
const sessions = new Map<string, Session>()
const rateLimits = new Map<string, RateEntry>()

// ── Cleanup expired sessions & rate limits ────────────────────────────────────
setInterval(() => {
  const now = Date.now()
  for (const [token, session] of sessions) {
    if (session.expiresAt < now) sessions.delete(token)
  }
  for (const [ip, entry] of rateLimits) {
    // Clear rate entries that are old and not locked
    if (!entry.lockedUntil && now - entry.lastAttempt > LOCKOUT_MS * 2) {
      rateLimits.delete(ip)
    }
  }
}, CLEANUP_INTERVAL_MS)

// ── Rate Limiting ─────────────────────────────────────────────────────────────
export function checkRateLimit(ip: string): { allowed: boolean; remainingMs: number; attemptsLeft: number } {
  const now = Date.now()
  const entry = rateLimits.get(ip)

  if (!entry) {
    return { allowed: true, remainingMs: 0, attemptsLeft: MAX_ATTEMPTS }
  }

  // Check if still locked out
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return { allowed: false, remainingMs: entry.lockedUntil - now, attemptsLeft: 0 }
  }

  // Reset if lockout expired
  if (entry.lockedUntil && now >= entry.lockedUntil) {
    rateLimits.set(ip, { attempts: 0, lockedUntil: null, lastAttempt: now })
    return { allowed: true, remainingMs: 0, attemptsLeft: MAX_ATTEMPTS }
  }

  return { allowed: true, remainingMs: 0, attemptsLeft: MAX_ATTEMPTS - entry.attempts }
}

export function recordFailedAttempt(ip: string): { locked: boolean; attemptsLeft: number } {
  const now = Date.now()
  const entry = rateLimits.get(ip) ?? { attempts: 0, lockedUntil: null, lastAttempt: now }

  entry.attempts += 1
  entry.lastAttempt = now

  if (entry.attempts >= MAX_ATTEMPTS) {
    entry.lockedUntil = now + LOCKOUT_MS
    rateLimits.set(ip, entry)
    return { locked: true, attemptsLeft: 0 }
  }

  rateLimits.set(ip, entry)
  return { locked: false, attemptsLeft: MAX_ATTEMPTS - entry.attempts }
}

export function resetRateLimit(ip: string) {
  rateLimits.delete(ip)
}

// ── Password Validation ────────────────────────────────────────────────────────
export async function verifyPassword(plaintext: string, hash: string): Promise<boolean> {
  // Use bcrypt.compare for constant-time comparison (prevents timing attacks)
  return bcrypt.compare(plaintext, hash)
}

// ── Session Management ────────────────────────────────────────────────────────
export function createSession(ip: string): string {
  // Generate a cryptographically secure random token (48 bytes = 96 hex chars)
  const token = randomBytes(48).toString('hex')
  const now = Date.now()

  sessions.set(token, {
    token,
    createdAt: now,
    expiresAt: now + SESSION_TTL_MS,
    ip
  })

  return token
}

export function validateSession(token: string): boolean {
  const session = sessions.get(token)
  if (!session) return false
  if (session.expiresAt < Date.now()) {
    sessions.delete(token)
    return false
  }
  return true
}

export function destroySession(token: string) {
  sessions.delete(token)
}

export function getSessionCount(): number {
  return sessions.size
}

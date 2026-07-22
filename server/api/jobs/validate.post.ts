import {
  checkRateLimit,
  recordFailedAttempt,
  resetRateLimit,
  verifyPassword,
  createSession
} from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Get client IP (support proxies)
  const ip =
    getHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
    getHeader(event, 'x-real-ip') ||
    event.node.req.socket?.remoteAddress ||
    'unknown'

  // ── Rate Limit Check ────────────────────────────────────────────────────────
  const rateCheck = checkRateLimit(ip)
  if (!rateCheck.allowed) {
    const minutesLeft = Math.ceil(rateCheck.remainingMs / 60000)
    throw createError({
      statusCode: 429,
      statusMessage: `Too many failed attempts. Try again in ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}.`
    })
  }

  // ── Parse Body ──────────────────────────────────────────────────────────────
  const body = await readBody(event)
  if (!body?.password) {
    throw createError({ statusCode: 400, statusMessage: 'Password is required' })
  }

  // ── Verify Password with bcrypt ─────────────────────────────────────────────
  const passwordHash = config.hrPasswordHash as string
  const isValid = await verifyPassword(body.password, passwordHash)

  if (!isValid) {
    const result = recordFailedAttempt(ip)
    if (result.locked) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many failed attempts. Account locked for 15 minutes.'
      })
    }
    throw createError({
      statusCode: 401,
      statusMessage: `Invalid password. ${result.attemptsLeft} attempt${result.attemptsLeft !== 1 ? 's' : ''} remaining before lockout.`
    })
  }

  // ── Success: Create Session ─────────────────────────────────────────────────
  resetRateLimit(ip) // Clear failed attempts on success
  const token = createSession(ip)

  // Set HTTP-only secure cookie
  setCookie(event, 'hr_session', token, {
    httpOnly: true,           // Not accessible via JavaScript
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict',       // CSRF protection
    maxAge: 8 * 60 * 60,     // 8 hours in seconds
    path: '/'
  })

  return { ok: true, message: 'Authenticated successfully' }
})

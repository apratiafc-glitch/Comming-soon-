import { getDb, saveDb } from '../../utils/db'
import { validateSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  // ── Session Auth ────────────────────────────────────────────────────────────
  const token = getCookie(event, 'hr_session')
  if (!token || !validateSession(token)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Session expired or invalid. Please log in again.'
    })
  }

  // ── Get Job ID ──────────────────────────────────────────────────────────────
  const id = getRouterParam(event, 'id')
  if (!id || isNaN(Number(id))) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid job ID' })
  }

  // ── Soft Delete ─────────────────────────────────────────────────────────────
  const db = await getDb()
  db.run(`UPDATE jobs SET is_active = 0 WHERE id = ?`, [Number(id)])
  saveDb()

  return { success: true, message: 'Job removed successfully' }
})

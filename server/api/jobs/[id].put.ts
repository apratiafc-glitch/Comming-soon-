import { getDb, saveDb } from '../../utils/db'
import { validateSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  // ── Session Auth ──────────────────────────────────────────────
  const token = getCookie(event, 'hr_session')
  if (!token || !validateSession(token)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Session expired or invalid. Please log in again.'
    })
  }

  const id = getRouterParam(event, 'id')
  if (!id || isNaN(Number(id))) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid job ID' })
  }

  const body = await readBody(event)
  const { title, department, location, type, description, requirements, deadline } = body

  if (!title?.trim() || !department?.trim() || !description?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: title, department, description'
    })
  }

  const db = await getDb()

  // Check job exists and is active
  const existing = db.exec(`SELECT id FROM jobs WHERE id = ? AND is_active = 1`, [Number(id)])
  if (!existing.length || !existing[0]?.values?.length) {
    throw createError({ statusCode: 404, statusMessage: 'Job not found' })
  }

  db.run(
    `UPDATE jobs SET
      title = ?,
      department = ?,
      location = ?,
      type = ?,
      description = ?,
      requirements = ?,
      deadline = ?
     WHERE id = ? AND is_active = 1`,
    [
      title.trim(),
      department.trim(),
      location?.trim() || 'Phnom Penh, Cambodia',
      type || 'Full-time',
      description.trim(),
      requirements?.trim() || '',
      deadline || null,
      Number(id)
    ]
  )

  saveDb()
  return { success: true, message: 'Job updated successfully' }
})

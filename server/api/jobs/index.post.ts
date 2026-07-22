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

  // ── Validate Body ───────────────────────────────────────────────────────────
  const body = await readBody(event)
  const { title, department, location, type, description, requirements, deadline } = body

  if (!title?.trim() || !department?.trim() || !description?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: title, department, description'
    })
  }

  // ── Insert Job ──────────────────────────────────────────────────────────────
  const db = await getDb()

  db.run(
    `INSERT INTO jobs (title, department, location, type, description, requirements, deadline)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      title.trim(),
      department.trim(),
      (location?.trim()) || 'Phnom Penh, Cambodia',
      type || 'Full-time',
      description.trim(),
      requirements?.trim() || '',
      deadline || null
    ]
  )

  saveDb()

  const result = db.exec(`SELECT last_insert_rowid() as id`)
  const insertedId = result[0]?.values[0]?.[0]

  return { success: true, id: insertedId, message: 'Job posted successfully' }
})

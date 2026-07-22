import { getDb } from '../../utils/db'

export default defineEventHandler(async () => {
  const db = await getDb()

  const result = db.exec(`
    SELECT id, title, department, location, type, description, requirements, deadline, created_at
    FROM jobs
    WHERE is_active = 1
    ORDER BY created_at DESC
  `)

  if (!result.length || !result[0] || !result[0].values.length) {
    return []
  }

  const columns = result[0].columns ?? []
  const rows = result[0].values ?? []

  return rows.map((row: any[]) => {
    const obj: Record<string, any> = {}
    columns.forEach((col: string, i: number) => {
      obj[col] = row[i]
    })
    return obj
  })
})

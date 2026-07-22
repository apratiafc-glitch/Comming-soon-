import type { Database } from 'sql.js'
import initSqlJs from 'sql.js'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const DB_PATH = resolve('server/database/jobs.db')
const DB_DIR = resolve('server/database')

let _db: Database | null = null

export async function getDb(): Promise<Database> {
  if (_db) return _db

  const SQL = await initSqlJs()

  // Ensure directory exists
  if (!existsSync(DB_DIR)) {
    mkdirSync(DB_DIR, { recursive: true })
  }

  if (existsSync(DB_PATH)) {
    const fileBuffer = readFileSync(DB_PATH)
    _db = new SQL.Database(fileBuffer)
  } else {
    _db = new SQL.Database()
  }

  // Create jobs table if not exists
  _db.run(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      department TEXT NOT NULL,
      location TEXT NOT NULL DEFAULT 'Phnom Penh, Cambodia',
      type TEXT NOT NULL DEFAULT 'Full-time',
      description TEXT NOT NULL,
      requirements TEXT,
      deadline TEXT,
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `)

  persistDb(_db)
  return _db
}

export function persistDb(db: Database) {
  const data = db.export()
  const buffer = Buffer.from(data)
  writeFileSync(DB_PATH, buffer)
}

export function saveDb() {
  if (!_db) return
  persistDb(_db)
}

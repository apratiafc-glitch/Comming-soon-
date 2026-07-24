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

  // Seed default jobs if table is empty
  let count = 0
  try {
    const countRes = _db.exec("SELECT COUNT(*) FROM jobs")
    if (countRes && countRes[0] && countRes[0].values && countRes[0].values[0]) {
      count = Number(countRes[0].values[0][0])
    }
  } catch {}

  if (count === 0) {
    _db.run(`
      INSERT INTO jobs (id, title, department, location, type, description, requirements, deadline, is_active, created_at)
      VALUES 
      (1, 'Senior Logistics Executive', 'Supply Chain', 'Phnom Penh, Cambodia', 'Full-time', 
       'Plan, manage, and optimize logistics, warehouse operations, and transportation to ensure efficiency and customer satisfaction for Food FMCG.\n\nMonitor and coordinate the full order cycle, including stock levels, delivery schedules, and transport costs, as well as managing third-party logistics.\n\nResolve issues and ensure quality and compliance across all logistics and warehousing activities.\n\nManage import activities and brokers/agents related to importing raw materials and packaging of food products, including customs documentation and import compliance.\n\nManage export activities and shipping agents related to exporting Food FMCG to ASIA countries, USA, and European countries, ensuring on-time in-full delivery to buyers, achieving export cost targets, and maintaining export compliance.\n\nPerform additional tasks as assigned by management, ensuring alignment with company objectives.',
       '• Minimum 1 year experience in logistics import/export, working with customs clearance, dealing with customs officers, brokers, and shipping agents (Experience in Food manufacturing is highly preferred).\n• Ability to communicate both speaking and writing in English at intermediate level with overseas suppliers, agents, and buyers.\n• Proficient with Microsoft Outlook for email communication, Excel in calculation, Word for making documents, and PowerPoint for presentation.\n• Familiar with warehousing, inventory management (FEFO & Replenishment), order management, and transportation coordination.\n• Familiar with customs regulations, import/export documentation including Master List and Certificate of Origin application, and trade compliance.\n• Strong organizational skills and attention to detail to ensure accurate documentation and correct handling of import/export items in compliance with food safety standards.\n• Ability to manage multiple tasks simultaneously, handle tight deadlines, and resolve issues promptly under pressure involving dealing with customs officers.',
       '2026-09-30', 1, datetime('now')),
      (2, 'Order Management Executive', 'Supply Chain', 'Phnom Penh, Cambodia', 'Full-time',
       'Receive, verify, and process sales orders accurately so the right products, quantities, and delivery requirements are confirmed for fulfillment.\n\nConvert confirmed orders into an efficient daily/weekly delivery plan that enables the delivery team to deliver on-time with optimal route and truck utilization.\n\nManage orders sent to the logistics distributor and closely follow up to ensure products are delivered to customers on-time and in-full.\n\nMonitor order-to-delivery progress and resolve exceptions quickly (stock issues, delivery delays, customer changes) to protect service level and customer satisfaction.\n\nProvide clear, timely communication to Sales, delivery teams, and relevant customers on delivery commitments, changes, and issues to maintain trust and alignment.\n\nMaintain accurate order and delivery records and report performance results to support operational control and continuous improvement.\n\nCommunicate and solve problems faced by the delivery team.\n\nPerform additional tasks as assigned by management, ensuring alignment with company objectives.',
       '• Minimum 1 year experience in related field (order management, logistics, or supply chain).\n• Strong planning & organizing skills — ability to turn orders into executable delivery plans under time pressure.\n• Able to communicate and solve problems faced by the driver and delivery team.\n• Proficient in Microsoft Outlook for email communication, Excel, Word, and PowerPoint.\n• Familiar with warehousing, inventory management (FEFO & Replenishment), order management, and transportation coordination.\n• Able to manage multiple tasks simultaneously, handle tight deadlines, and resolve issues promptly under pressure.',
       '2026-09-30', 1, datetime('now'))
    `)
  }

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

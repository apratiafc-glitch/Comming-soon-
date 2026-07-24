import bcrypt from 'bcryptjs'

export interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements?: string
  deadline?: string
  is_active: number
  created_at: string
}

const STORAGE_KEY = 'aprati_jobs_database'
const SESSION_KEY = 'aprati_hr_session'
const HR_HASH = '$2b$12$MavYJlD8/SGSgVpeFtjeXObqroZaxzbXH7DGEr5EtoGCAKYcdJmcy'

const INITIAL_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Logistics Executive',
    department: 'Supply Chain',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Plan, manage, and optimize logistics, warehouse operations, and transportation to ensure efficiency and customer satisfaction for Food FMCG.\n\nMonitor and coordinate the full order cycle, including stock levels, delivery schedules, and transport costs, as well as managing third-party logistics.\n\nResolve issues and ensure quality and compliance across all logistics and warehousing activities.\n\nManage import activities and brokers/agents related to importing raw materials and packaging of food products, including customs documentation and import compliance.\n\nManage export activities and shipping agents related to exporting Food FMCG to ASIA countries, USA, and European countries, ensuring on-time in-full delivery to buyers, achieving export cost targets, and maintaining export compliance.\n\nPerform additional tasks as assigned by management, ensuring alignment with company objectives.',
    requirements: '• Minimum 1 year experience in logistics import/export, working with customs clearance, dealing with customs officers, brokers, and shipping agents (Experience in Food manufacturing is highly preferred).\n• Ability to communicate both speaking and writing in English at intermediate level with overseas suppliers, agents, and buyers.\n• Proficient with Microsoft Outlook for email communication, Excel in calculation, Word for making documents, and PowerPoint for presentation.\n• Familiar with warehousing, inventory management (FEFO & Replenishment), order management, and transportation coordination.\n• Familiar with customs regulations, import/export documentation including Master List and Certificate of Origin application, and trade compliance.\n• Strong organizational skills and attention to detail to ensure accurate documentation and correct handling of import/export items in compliance with food safety standards.\n• Ability to manage multiple tasks simultaneously, handle tight deadlines, and resolve issues promptly under pressure involving dealing with customs officers.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Order Management Executive',
    department: 'Supply Chain',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Receive, verify, and process sales orders accurately so the right products, quantities, and delivery requirements are confirmed for fulfillment.\n\nConvert confirmed orders into an efficient daily/weekly delivery plan that enables the delivery team to deliver on-time with optimal route and truck utilization.\n\nManage orders sent to the logistics distributor and closely follow up to ensure products are delivered to customers on-time and in-full.\n\nMonitor order-to-delivery progress and resolve exceptions quickly (stock issues, delivery delays, customer changes) to protect service level and customer satisfaction.\n\nProvide clear, timely communication to Sales, delivery teams, and relevant customers on delivery commitments, changes, and issues to maintain trust and alignment.\n\nMaintain accurate order and delivery records and report performance results to support operational control and continuous improvement.\n\nCommunicate and solve problems faced by the delivery team.\n\nPerform additional tasks as assigned by management, ensuring alignment with company objectives.',
    requirements: '• Minimum 1 year experience in related field (order management, logistics, or supply chain).\n• Strong planning & organizing skills — ability to turn orders into executable delivery plans under time pressure.\n• Able to communicate and solve problems faced by the driver and delivery team.\n• Proficient in Microsoft Outlook for email communication, Excel, Word, and PowerPoint.\n• Familiar with warehousing, inventory management (FEFO & Replenishment), order management, and transportation coordination.\n• Able to manage multiple tasks simultaneously, handle tight deadlines, and resolve issues promptly under pressure.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  }
]

export function getStoredJobs(): Job[] {
  if (typeof window === 'undefined') return INITIAL_JOBS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_JOBS))
      return INITIAL_JOBS
    }
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return INITIAL_JOBS
    
    // Exclude obsolete/removed job titles
    const filtered = parsed.filter(j => 
      j.is_active !== 0 && 
      j.title !== 'Sales Executive' && 
      j.title !== 'Warehouse & Logistics Officer' &&
      j.title !== 'testing'
    )

    if (filtered.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_JOBS))
      return INITIAL_JOBS
    }
    
    // If obsolete jobs were found in browser localStorage, purge them
    if (filtered.length !== parsed.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    }
    return filtered
  } catch {
    return INITIAL_JOBS
  }
}

export function saveStoredJobs(jobs: Job[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
  try { window.dispatchEvent(new Event('aprati_jobs_updated')) } catch {}
}

export function addStoredJob(jobData: Omit<Job, 'id' | 'is_active' | 'created_at'>): Job {
  const jobs = getStoredJobs()
  const newJob: Job = {
    ...jobData,
    id: Date.now(),
    is_active: 1,
    created_at: new Date().toISOString()
  }
  jobs.unshift(newJob)
  saveStoredJobs(jobs)
  return newJob
}

export function updateStoredJob(id: number, updatedFields: Partial<Job>): boolean {
  const jobs = getStoredJobs()
  const idx = jobs.findIndex(j => j.id === id)
  const existing = jobs[idx]
  if (!existing) return false
  jobs[idx] = {
    id: existing.id,
    title: updatedFields.title ?? existing.title,
    department: updatedFields.department ?? existing.department,
    location: updatedFields.location ?? existing.location,
    type: updatedFields.type ?? existing.type,
    description: updatedFields.description ?? existing.description,
    requirements: updatedFields.requirements ?? existing.requirements,
    deadline: updatedFields.deadline ?? existing.deadline,
    is_active: updatedFields.is_active ?? existing.is_active,
    created_at: existing.created_at
  }
  saveStoredJobs(jobs)
  return true
}

export function deleteStoredJob(id: number): boolean {
  const jobs = getStoredJobs()
  const filtered = jobs.filter(j => j.id !== id)
  saveStoredJobs(filtered)
  return true
}

export function checkStoredAuth(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(SESSION_KEY) === 'authenticated'
}

export function setStoredAuth(val: boolean) {
  if (typeof window === 'undefined') return
  if (val) {
    localStorage.setItem(SESSION_KEY, 'authenticated')
  } else {
    localStorage.removeItem(SESSION_KEY)
  }
}

export function verifyHrPasswordLocal(inputPass: string): boolean {
  if (!inputPass) return false
  if (inputPass === 'Aprati#HR2026!' || inputPass === 'aprati@hr2026') return true
  try {
    return bcrypt.compareSync(inputPass, HR_HASH)
  } catch {
    return false
  }
}

export function isStaticHost(): boolean {
  if (typeof window === 'undefined') return false
  return !window.location.hostname.includes('localhost') && window.location.hostname !== '127.0.0.1'
}

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
    title: 'Sales Executive',
    department: 'Sales & Marketing',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Develop key client relationships, negotiate commercial terms, and drive brand expansion across traditional and modern trade channels.',
    requirements: '• Minimum 2 years experience in FMCG sales\n• Fluent in Khmer; conversational English\n• Strong communication and negotiation skills\n• Valid driving license',
    deadline: '2026-08-31',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Warehouse & Logistics Officer',
    department: 'Supply Chain',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Oversee inventory management, coordinate daily warehouse operations, and ensure timely product dispatch to key distribution hubs.',
    requirements: '• Diploma or Degree in Logistics, Business, or related field\n• 1+ year experience in inventory management\n• Computer literate (Excel / Inventory Software)',
    deadline: '2026-08-15',
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
    return Array.isArray(parsed) ? parsed.filter(j => j.is_active !== 0) : INITIAL_JOBS
  } catch {
    return INITIAL_JOBS
  }
}

export function saveStoredJobs(jobs: Job[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
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

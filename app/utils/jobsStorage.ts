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
    title: 'Sales Order Executive',
    department: 'Supply Chain',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Delivery Plan Creation & Daily Dispatch Coordination – Convert confirmed orders into an efficient daily/weekly delivery plan that enables the delivery team to deliver on time with optimal route and truck utilization.\n\nDistributor Order Management (3PL / Logistics Distributor) – Manage orders sent to the logistics distributor and closely follow up to ensure products are delivered to customers on-time and in-full.\n\nOrder Fulfillment Performance (OTIF) & Exception Handling – Monitor order-to-delivery progress and resolve exceptions quickly (stock issues, delivery delays, customer changes) to protect service level and customer satisfaction.\n\nCustomer & Internal Communication – Provide clear, timely communication to Sales, delivery teams, and relevant customers on delivery commitments, changes, and issues to maintain trust and alignment.\n\nReporting, Documentation & Process Discipline – Maintain accurate order and delivery records and report performance results to support operational control and continuous improvement.',
    requirements: '• Planning & Organizing – turn orders into executable delivery plans.\n• Attention to Detail / Accuracy – order entry, SKU/qty/address correctness.\n• Communication & Customer Focus – coordinate clearly under time pressure.\n• Computer Skill: Microsoft Office, Outlook, Teams.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: 'HR Intern',
    department: 'Human Resources',
    location: 'Phnom Penh, Cambodia',
    type: 'Internship',
    description: 'Assist in recruitment and selection processes (posting jobs, screening CVs, scheduling interviews).\n\nSupport onboarding and offboarding processes.\n\nMaintain and update employee records and HR databases.\n\nAssist in preparing HR documents (letters, reports).\n\nSupport attendance tracking.\n\nAssist with NSSF-related documentation and filing.\n\nHelp organize training, staff engagement, and company events.\n\nSupport HR compliance with internal policies and labor regulations.\n\nPerform other HR administrative tasks as assigned.',
    requirements: '• University student or fresh graduate in Human Resources, Business Administration, or related field.\n• Basic understanding of HR functions and labor law is an advantage.\n• Good communication and interpersonal skills.\n• Proficient in MS Office (Word, Excel, PowerPoint).\n• Good organizational and time-management skills.\n• Willingness to learn and able to work in a team.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: 'Sales Admin Executive / Supervisor',
    department: 'Sales Operations',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Prepare Sales Reports daily, weekly, and monthly for management both DMS and Manual.\n\nDaily update SD PO by 4:30pm versus Revenue Plan.\n\nKey in sales orders within 8hr of working day accurately and follow up to ensure timely delivery coordination with logistics.\n\nTracking of delivery PO date till receiving stock and payment completed.\n\nPrepare and submit the Daily/Weekly/Monthly Report UNT sales out to SD and Inventory UNT.\n\nMaintain and update customer, distributor, and pricing records in the system.\n\nPrepare SD and Salesman Monthly, Quarterly and Yearly Target for Sign off and document.\n\nSupport sales team with SD contracts, Claim promotion FOC, and documentation.\n\nFollow up SD claim and incentive payment to be accurate and timely within two working days.\n\nProcess Sales team incentive payment and Update memo and renew or develop memo based on biz need every w4 of the month.\n\nMonitor inventory levels, Stock Aging and coordinate with supply chain for stock allocation by Tuesday before 9am.\n\nEnsure compliance with company policies on discounts, promotions, and credit limits.\n\nAssist in organizing sales meetings, training, and promotional activities monthly.\n\nManaging, and training sales staff on sales-related systems, databases, and associated processes.\n\nOversee a team of Sales Data Administration and Online Customer Service to ensure they perform according to their duties and responsibilities.\n\nConducting competitor research and maintaining a library of competitor information.\n\nPreparing reports related to customer inquiries, sales trends, customer complaints, delivery/service problems, reasons for product returns, etc.\n\nAnalyzing sales process reports (e.g., sales activities, opportunity pipeline, average time to close, characteristics of wins vs. losses, etc.) to identify areas for sales process improvement.\n\nManage Sales team effectiveness and update regularly to NSM.\n\nActing as liaison between cross departments.',
    requirements: '• Bachelor’s degree in Business Administration, Sales, Marketing, Accounting, or related field.\n• 1–2 years of experience in Sales Operations, Sales Support, or similar role; FMCG experience is a plus.\n• Proficient in Microsoft Excel (Pivot Table, VLOOKUP) and PowerPoint; familiarity with DMS or sales tracking systems preferred.\n• Strong attention to detail, accuracy, and time management to meet reporting deadlines.\n• Good analytical, communication, and coordination skills with cross-functional teams.\n• Reliable, proactive, and able to work independently with integrity and a team-oriented mindset.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    title: 'Area Sales Manager',
    department: 'Sales Leadership',
    location: 'Phnom Penh / Provinces, Cambodia',
    type: 'Full-time',
    description: 'Sales Planning and Strategy:\n• Develop and implement sales plans to achieve company goals within the assigned area.\n• Monitor market dynamics, competitor activities, and customer needs to identify new opportunities.\n• Prepare accurate sales forecasts and ensure efficient territory coverage.\n\nTeam Leadership and Development:\n• Lead, train, and guide the sales team to meet individual and team targets.\n• Monitor team performance and provide regular feedback and coaching.\n• Support professional development to enhance the team’s selling and negotiation skills.\n\nCustomer Relationship Management:\n• Build and maintain strong partnerships with key customers, distributors, and retailers.\n• Negotiate contracts, pricing, and promotional activities to maximize business growth.\n• Ensure excellent customer service and resolve any issues promptly.\n\nSales Execution and Operations:\n• Supervise daily sales activities and ensure the proper implementation of trade marketing programs.\n• Ensure product visibility, stock availability, and proper merchandising across outlets.\n• Collaborate with other departments to ensure smooth coordination and execution of sales plans.\n\nReporting and Analysis:\n• Review sales reports and analyze performance against targets.\n• Identify gaps or potential areas for improvement and recommend action plans.\n• Manage area budgets effectively and ensure compliance with company standards.',
    requirements: '• Bachelor’s degree in Business, Marketing, or a related discipline.\n• At least 3 to 5 years of experience in a sales leadership role, preferably in FMCG, retail, or distribution.\n• Proven ability to achieve and exceed sales goals.\n• Strong leadership, communication, and negotiation skills.\n• Proficient in Microsoft Office, especially Excel and PowerPoint.\n• Willingness to travel frequently and work under pressure.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    title: 'Modern Trade Sales Manager',
    department: 'Modern Trade',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Modern Trade Account Management:\n• Build and maintain strong relationships with key modern trade customers and buyers.\n• Plan and implement sales and promotional activities to achieve business objectives.\n• Negotiate shelf space, displays, and promotional support with store chains.\n• Monitor and improve in-store product visibility and availability.\n\nSales & Performance Management:\n• Achieve monthly and quarterly sales targets by store and by product category.\n• Monitor and analyze sales data, stock levels, and sell-out performance.\n• Identify sales growth opportunities and recommend actions for improvement.\n\nTeam Supervision:\n• Lead, coach, and monitor a team of sales reps or merchandisers.\n• Plan daily store visits and route plans for team members.\n• Conduct regular in-store training and performance evaluations.\n\nExecution & Merchandising:\n• Ensure excellent execution of planograms, displays, and promotions.\n• Coordinate with marketing and logistics to ensure timely delivery of POS materials and stocks.\n• Prevent out-of-stock situations and ensure stock rotation (FIFO).\n\nMarket Intelligence & Reporting:\n• Monitor competitor activities, promotions, and pricing within modern trade.\n• Share timely insights with internal sales and marketing teams.\n• Track KPIs such as active store, sales vs. target, availability, and coverage.',
    requirements: '• Bachelor’s degree in Business, Sales, Marketing, or a related field.\n• 2+ years of experience in sales coordination or account management, preferably in FMCG.\n• Proven experience managing modern trade channels such as supermarkets, hypermarkets, and key accounts.\n• Familiarity with modern trade and pharmacy sales channels.\n• Strong communication and negotiation skills.\n• Proficiency in MS Office (Excel, Word, PowerPoint).\n• Ability to analyze sales data and develop actionable insights.\n• Ability to work under pressure and meet tight deadlines.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 7,
    title: 'ផ្នែកលក់ខាងក្រៅ (Outdoor Sales Representative)',
    department: 'Field Sales',
    location: '25 រាជធានីខេត្ត, Cambodia',
    type: 'Full-time',
    description: '• ផ្សព្វផ្សាយ និងលក់ផលិតផលរបស់ Aprati Foods ទៅកាន់អ្នកលក់រាយ អ្នកលក់ដុំ អ្នកចែកចាយ និងអតិថិជនសក្តានុពលផ្សេងៗក្នុងតំបន់ដែលបានកំណត់\n• សម្រេចបានគោលដៅលក់ប្រចាំខែ និងត្រីមាសតាមការគ្រប់គ្រងបានកំណត់\n• បង្កើត និងថែរក្សាទំនាក់ទំនងល្អជាមួយអតិថិជនបច្ចុប្បន្ន និងថ្មី ដើម្បីធានាឱ្យមានការបញ្ជាទិញជាបន្តបន្ទាប់ និងភាពពេញចិត្តរបស់អតិថិជន\n• ធានាឱ្យមានស្តុកគ្រប់គ្រាន់នៅតាមបណ្តាដេប៉ូលក់\n• ផ្សវេងរកអតិថិជនថ្មីៗ និងប្រមូលព័ត៌មានទីផ្សារ\n• គ្រប់គ្រងការបញ្ជាទិញផលិតផល សម្របសម្រួលការដឹកជញ្ជូនទាន់ពេលវេលា និងធានាថាមានវិក្កយបត្រត្រឹមត្រូវ\n• រៀបចំរបាយការណ៍លក់ប្រចាំថ្ងៃ/សប្តាហ៍ និងផ្តល់ព័ត៌មានអំពីនិន្នាការទីផ្សារ និងមតិអតិថិជន\n• សហការជាមួយក្រុមលក់ក្នុងការអនុវត្តយុទ្ធនាការផ្សព្វផ្សាយ និងសកម្មភាពទីផ្សារ\n• ថែរក្សារូបភាព និងតម្លៃម៉ាកផលិតផលរបស់ Aprati Foods ប្រកបដោយឥរិយាបថវិជ្ជាជីវៈ និងសេវាកម្មអតិថិជនល្អ',
    requirements: '• អាចអាន និងសរសេរភាសាខ្មែរបាន\n• មានបទពិសោធន៍យ៉ាងហោចណាស់ 1–2 ឆ្នាំ ក្នុងផ្នែកលក់\n• ចេះទំនាក់ទំនង ការចរចា និងទំនាក់ទំនងល្អជាមួយអតិថិជន\n• មានទំនួលខុសត្រូវ សកម្ម និងផ្តោតលើលទ្ធផល\n• មានម៉ូតូផ្ទាល់ខ្លួន អាជ្ញាប័ណ្ណ និងអាចធ្វើដំណើរទៅតំបន់ដែលបានចាត់តាំង',
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

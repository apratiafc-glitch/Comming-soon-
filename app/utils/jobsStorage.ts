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
    title: 'Sales Order Management Executive',
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
  },
  {
    id: 8,
    title: 'Assistant Manager/Coordinator, Business Development',
    department: 'Business Development',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Act as the product owner for the assigned brand/product portfolio, taking end-to-end accountability for performance within a 1-week to 12-month work time span.\n\nBuild, maintain, and execute the brand/product portfolio calendar, ensuring all activities are planned, sequenced, and delivered on time.\n\nOwn and update the NPD (New Product Development) tracker, monitoring progress at each gate and flagging risks to timelines or deliverables.\n\nConduct regular market visits to gather first hand insight on consumer behavior, competitor activity, pricing, and execution standards at point of sale.\n\nWrite clear, strategic creative briefs that translate business objectives into actionable direction for internal teams and external agencies.\n\nBuild and maintain performance dashboards that track sales, share, distribution, and other relevant KPIs; surface insights and recommended actions.\n\nLead sprint preparation and planning, breaking down projects into deliverables, assigning owners, and aligning stakeholders on priorities.\n\nFollow up rigorously on all projects, ensuring timelines, quality, and cross-functional commitments are met without senior intervention.\n\nRun experiment projects assigned by the Business Unit Leader and/or Head of Department, applying a test-and-learn approach to validate hypotheses.\n\nDrive in-store visibility for the Confectionery and/or snack portfolio, ensuring planograms, POSM, and trade execution match the brand standards defined by the Business Unit.',
    requirements: '• Bachelor\'s degree in Marketing, Business Administration, Pharmacy, Life Sciences, or a related field.\n• 3–5 years of experience in Brand Management, Product Management, Trade Marketing, Consumer Health, Pharmaceutical, Healthcare, or FMCG industries.\n• Experience managing marketing campaigns, product launches, or cross-functional projects.\n• Strong project management and organizational skills with the ability to manage multiple priorities and timelines.\n• Good analytical skills with the ability to interpret sales, market, and consumer data and translate insights into action plans.\n• Proficient in Microsoft Excel, PowerPoint, and reporting tools.\n• Ability to develop marketing briefs, presentations, and performance reports.\n• Good understanding of consumer health, OTC products, pharmacy channels, or healthcare marketing is preferred.\n• Strong communication, stakeholder management, and influencing skills.\n• Proactive, detail-oriented, and results-driven, with the ability to work independently and follow through on commitments.\n• Experience coordinating with Sales, Trade Marketing, Regulatory Affairs, Medical Affairs, Supply Chain, and external agencies is an advantage.\n• Willingness to conduct regular market visits and travel when required.\n• Good command of written and spoken English and Khmer.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 9,
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'To own the day-to-day execution of the Consumer Health portfolio across a 1-week to 12-month time horizon, with the added responsibility of ensuring all activities meet OTC visibility standards and are supported by accurate, compliant scientific content.\n\nAct as the product owner for the assigned brand/product portfolio, taking end-to-end accountability for performance within a 1-week to 12-month work time span.\n\nBuild, maintain, and execute the brand/product portfolio calendar, ensuring all activities are planned, sequenced, and delivered on time.\n\nOwn and update the NPD (New Product Development) tracker, monitoring progress at each gate and flagging risks to timelines or deliverables.\n\nConduct regular market visits to gather first hand insight on consumer behavior, competitor activity, pricing, and execution standards at the point of sale.\n\nWrite clear, strategic creative briefs that translate business objectives into actionable direction for internal teams and external agencies.\n\nBuild and maintain performance dashboards that track sales, share, distribution, and other relevant KPIs; surface insights and recommended actions.\n\nLead sprint preparation and planning, breaking down projects into deliverables, assigning owners, and aligning stakeholders on priorities.\n\nFollow up rigorously on all projects, ensuring timelines, quality, and cross-functional commitments are met without senior intervention.\n\nRun experiment projects assigned by the BU Leader and/or Head of Department, applying a test-and-learn approach to validate hypotheses.\n\nDrive OTC visibility across pharmacy and modern trade channels, ensuring shelf presence, planograms, and POSM meet category and regulatory standards.\n\nManage scientific content for the assigned portfolio — sourcing, validating, updating, and approving claims, product information, and consumer-facing materials in line with medical and regulatory requirements.',
    requirements: '• Bachelor\'s degree in Marketing, Business Administration, Pharmacy, Life Sciences, or a related field.\n• 1–3 years of experience in Marketing, Brand Management, Trade Marketing, Consumer Health, Pharmaceutical, or FMCG industries.\n• Fresh graduates with strong academic performance and relevant internship experience are encouraged to apply.\n• Strong organizational and project coordination skills with the ability to manage multiple tasks and deadlines.\n• Good analytical skills with the ability to interpret sales and market data and provide actionable insights.\n• Proficient in Microsoft Excel, PowerPoint, and other Microsoft Office applications.\n• Good communication and interpersonal skills with the ability to work effectively across different teams.\n• Ability to prepare clear briefs, reports, and presentations.\n• Detail-oriented, proactive, and willing to learn.\n• Comfortable conducting market visits and gathering consumer and competitor insights.\n• Basic understanding of OTC products, pharmacy channels, or healthcare marketing is an advantage.\n• Good command of written and spoken English and Khmer.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 10,
    title: 'Graphic Design Intern',
    department: 'Creative & Design',
    location: 'Phnom Penh, Cambodia',
    type: 'Internship',
    description: 'Assist in designing marketing and communication materials (posters, flyers, banners, brochures, and presentations).\n\nCreate visual content for social media and digital platforms.\n\nEdit photos and basic videos when required.\n\nEnsure designs follow the company\'s branding guidelines.\n\nSupport event branding and other creative projects.\n\nOrganize and maintain design files and templates.\n\nPerform other tasks assigned by the supervisor.',
    requirements: '• Currently pursuing a Bachelor\'s degree or fresh graduate in Graphic Design, Multimedia, Visual Communication, or a related field.\n• Basic knowledge of Adobe Photoshop, Illustrator, Canva, or similar design software.\n• Basic video editing skills are an advantage.\n• Creative, detail-oriented, and willing to learn.\n• Able to manage time and meet deadlines.\n• Good communication and teamwork skills.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 11,
    title: 'Marketing and Event Intern',
    department: 'Marketing & Events',
    location: 'Phnom Penh, Cambodia',
    type: 'Internship',
    description: 'Assist in planning and coordinating marketing events, product launches, exhibitions, and promotional activities.\n\nSupport event preparation, including venue setup, materials, registrations, and logistics.\n\nCoordinate with internal departments and external vendors to ensure smooth event execution.\n\nAssist in preparing marketing documents, presentations, and reports.\n\nMaintain and organize marketing files, records, and promotional materials.\n\nProcess purchase requests, expense claims, and other departmental administrative tasks.\n\nMonitor inventory of marketing materials and office supplies.\n\nPerform other duties assigned by the supervisor.',
    requirements: '• Currently pursuing a Bachelor\'s degree in Marketing, Business Administration, Event Management, or a related field.\n• Good organizational and coordination skills.\n• Proficient in Microsoft Office (Word, Excel, and PowerPoint).\n• Good communication and interpersonal skills.\n• Detail-oriented, proactive, and willing to learn.\n• Able to work both independently and as part of a team.',
    deadline: '2026-09-30',
    is_active: 1,
    created_at: new Date().toISOString()
  },
  {
    id: 12,
    title: 'Business System Developer Executive',
    department: 'Information Technology',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-time',
    description: 'Business systems are developed and improved to support efficient, accurate, and scalable business operations across priority functions.\n\nSales and Distribution systems are stabilized and enhanced through improvement of DMS-related tools, workflows, reporting, and supporting applications.\n\nManual work is reduced through automation of recurring reports, validations, workflows, and data-processing activities.\n\nSystem integrations and data flows are built and maintained so that information moves accurately and reliably across business platforms.\n\nUser requirements are translated into practical system solutions that improve usability, process compliance, data quality, and decision-making.\n\nReliable dashboards, reports, and analytical tools are delivered to improve visibility of performance, process health, and operational opportunities.\n\nSystem issues are diagnosed and resolved at root cause level across application logic, data structures, integrations, and business process usage.\n\nTechnical documentation, user support, and knowledge assets are maintained so that systems remain usable, sustainable, and less dependent on tribal knowledge.\n\nOthers assigned by manager.',
    requirements: '• Intermediate level of Experience (minimum 2 years of job-related experience).\n• Relevant practical experience in software development, business application development, systems integration, automation, database management, reporting, or digital process improvement may substitute for formal education when the candidate demonstrates the ability to build, improve, troubleshoot, and support business systems effectively.\n• Problem Solving – must identify technical issues, data issues, sync failures, and usage problems, then investigate and resolve or escalate appropriately.\n• Analysis – must work with sales data, identify anomalies, prepare dashboards, produce reports, and compile useful analytical outputs such as distribution gaps and promotional execution reports.\n• Project Management – This role will likely handle multiple enhancements, system changes, automation tasks, and phased improvements across functions, so the ability to plan, coordinate, prioritize, and complete work is important.',
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
      j.title !== 'testing' &&
      j.title !== 'Sales Order Executive' &&
      j.title !== 'Modern Trade Sales Manager' &&
      j.title !== 'Modern Trade Manager'
    )

    // Ensure any new default jobs in INITIAL_JOBS are merged if missing
    const existingTitles = new Set(filtered.map(j => j.title))
    let hasNewDefaults = false
    for (const initJob of INITIAL_JOBS) {
      if (!existingTitles.has(initJob.title)) {
        filtered.push(initJob)
        hasNewDefaults = true
      }
    }

    if (hasNewDefaults || filtered.length !== parsed.length) {
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

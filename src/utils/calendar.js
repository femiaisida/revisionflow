// src/utils/calendar.js
import { format, addDays, startOfWeek, eachDayOfInterval,
         isSameDay, isToday, differenceInDays } from 'date-fns'

// ── ICS IMPORT — smart parser ─────────────────────────────────────────────────
// Parses RevisionFlow-style session titles to extract subject, paper, type
// e.g. "AQA Biology Paper 1 – Content Revision"
//      "OCR Computer Science Paper 2 – Exam Practice: 2024 Paper"
//      "⚠ EMERGENCY: AQA Maths Paper 1 – Final Revision"

const KNOWN_SUBJECTS = [
  'Mathematics','Further Mathematics','English Language','English Literature',
  'Biology','Chemistry','Physics','Combined Science','Geography','History',
  'Computer Science','German','French','Spanish','Business Studies','Business',
  'Religious Studies','Psychology','Sociology','Art & Design','Music','Drama','PE',
  'Maths','Further Maths','Comp Sci','Eng Lit','Eng Lang',
]

const SUBJECT_ALIASES = {
  'Maths': 'Mathematics',
  'Further Maths': 'Further Mathematics',
  'Comp Sci': 'Computer Science',
  'Eng Lit': 'English Literature',
  'Eng Lang': 'English Language',
  'Business': 'Business Studies',
}

const BOARD_PREFIXES = ['AQA','Edexcel','OCR','WJEC','CCEA','Cambridge']

function parseSessionTitle(title) {
  if (!title) return {}
  const result = {}

  // Emergency sessions
  if (title.includes('EMERGENCY') || title.includes('⚠')) {
    result.type = 'Emergency Revision'
    result.isEmergency = true
  }

  // Session type
  if (title.toLowerCase().includes('content revision')) result.type = 'Content Revision'
  else if (title.toLowerCase().includes('exam practice') || title.toLowerCase().includes('exam question')) result.type = 'Exam Practice'
  else if (title.toLowerCase().includes('final revision')) result.type = 'Emergency Revision'

  // Paper number — look for "Paper N" or "P1" etc
  const paperMatch = title.match(/Paper\s+(\d)/i) || title.match(/\bP(\d)\b/)
  if (paperMatch) result.paper = paperMatch[1]

  // Year (exam practice year e.g. "2024 Paper")
  const yearMatch = title.match(/\b(20\d\d)\b/)
  if (yearMatch) result.examYear = yearMatch[1]

  // Board
  for (const board of BOARD_PREFIXES) {
    if (title.includes(board)) { result.board = board; break }
  }

  // Subject — remove board prefix and known suffixes, then match
  let titleClean = title
    .replace(/^⚠\s*EMERGENCY:\s*/i,'')
    .replace(/\s*–\s*.+$/,'')  // remove everything after dash
    .replace(/^(AQA|Edexcel|OCR|WJEC|CCEA|Cambridge)\s*/i,'')
    .replace(/(Higher|Foundation|Level 2)/gi,'')
    .replace(/Paper\s*\d/gi,'')
    .trim()

  // Try direct match
  for (const subj of KNOWN_SUBJECTS) {
    if (titleClean.toLowerCase().includes(subj.toLowerCase())) {
      result.subject = SUBJECT_ALIASES[subj] || subj
      break
    }
  }

  // Fallback: use cleaned title as subject name
  if (!result.subject && titleClean.length > 2 && titleClean.length < 40) {
    result.subject = titleClean
  }

  return result
}

export function parseICS(icsText) {
  const events = []
  const lines  = icsText.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split('\n')
  let current  = null

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') { current = {} }
    else if (line === 'END:VEVENT' && current) { events.push(current); current = null }
    else if (current) {
      const colonIdx = line.indexOf(':')
      if (colonIdx === -1) continue
      const key = line.slice(0, colonIdx).split(';')[0]
      const val = line.slice(colonIdx+1)

      if (key === 'SUMMARY')     current.title       = val
      if (key === 'DTSTART')     current.start       = parseICSDate(val)
      if (key === 'DTEND')       current.end         = parseICSDate(val)
      if (key === 'DESCRIPTION') current.description = val.replace(/\\n/g,'\n')
      if (key === 'LOCATION')    current.location    = val
      if (key === 'UID')         current.uid         = val
    }
  }

  // Enrich parsed events with subject/type extracted from title
  return events.filter(e=>e.title&&e.start).map(e=>({
    ...e,
    ...parseSessionTitle(e.title),
  }))
}

function parseICSDate(str) {
  const clean = str.replace('Z','')
  if (clean.length === 8) {
    return new Date(
      parseInt(clean.slice(0,4)),
      parseInt(clean.slice(4,6))-1,
      parseInt(clean.slice(6,8))
    )
  }
  // Handle timezone offset (BST = UTC+1)
  if (str.endsWith('Z')) {
    return new Date(
      parseInt(clean.slice(0,4)),
      parseInt(clean.slice(4,6))-1,
      parseInt(clean.slice(6,8)),
      parseInt(clean.slice(9,11)||0)+1,  // +1 for BST
      parseInt(clean.slice(11,13)||0)
    )
  }
  return new Date(
    parseInt(clean.slice(0,4)),
    parseInt(clean.slice(4,6))-1,
    parseInt(clean.slice(6,8)),
    parseInt(clean.slice(9,11)||0),
    parseInt(clean.slice(11,13)||0)
  )
}

// ── ICS EXPORT ────────────────────────────────────────────────────────────────
export function generateICS(sessions) {
  const fmt = (d) => {
    const dt = d instanceof Date ? d : new Date(d)
    return format(dt, "yyyyMMdd'T'HHmmss")
  }
  const lines = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//RevisionFlow//EN',
    'CALSCALE:GREGORIAN','X-WR-CALNAME:RevisionFlow Schedule',
    'X-WR-TIMEZONE:Europe/London',
  ]
  for (const s of sessions) {
    const start = new Date(s.startTime||s.date)
    const end   = new Date(s.endTime||(start.getTime()+(s.duration||45)*60000))
    lines.push('BEGIN:VEVENT')
    lines.push(`UID:${s.id||Math.random().toString(36).slice(2)}@revisionflow`)
    lines.push(`DTSTART:${fmt(start)}`)
    lines.push(`DTEND:${fmt(end)}`)
    lines.push(`SUMMARY:${s.title||s.subject+' – '+(s.type||'Revision')}`)
    if (s.notes||s.description) lines.push(`DESCRIPTION:${(s.notes||s.description||'').replace(/\n/g,'\\n')}`)
    lines.push('END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.join('\r\n')
}

export function downloadICS(sessions, filename='revisionflow-calendar.ics') {
  const content = generateICS(sessions)
  const blob = new Blob([content],{type:'text/calendar'})
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

// ── CSV IMPORT ────────────────────────────────────────────────────────────────
export function parseCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/"/g,''))
  return lines.slice(1).map(line=>{
    const vals = parseCSVLine(line)
    const obj  = {}
    headers.forEach((h,i)=>{ obj[h]=(vals[i]||'').trim().replace(/"/g,'') })
    // Enrich CSV sessions too
    const titleField = obj.title||obj['session name']||obj.summary||''
    return { ...obj, ...parseSessionTitle(titleField), title: titleField }
  }).filter(r=>r.date||r.start||r.subject||r.title)
}

function parseCSVLine(line) {
  const result=[]; let current=''; let inQuotes=false
  for (const ch of line) {
    if (ch==='"') inQuotes=!inQuotes
    else if (ch===','&&!inQuotes){result.push(current);current=''}
    else current+=ch
  }
  result.push(current)
  return result
}

// ── CALENDAR HELPERS ──────────────────────────────────────────────────────────
export function getMonthDays(year, month) {
  const first    = new Date(year, month, 1)
  const last     = new Date(year, month+1, 0)
  const startPad = first.getDay()===0 ? 6 : first.getDay()-1
  const days     = []
  for (let i=startPad;i>0;i--) days.push({date:addDays(first,-i),otherMonth:true})
  for (let d=1;d<=last.getDate();d++) days.push({date:new Date(year,month,d),otherMonth:false})
  while (days.length%7!==0) days.push({date:addDays(last,days.length-last.getDate()-startPad+1),otherMonth:true})
  return days
}

export function getWeekDays(date) {
  const start = startOfWeek(date,{weekStartsOn:1})
  return eachDayOfInterval({start, end:addDays(start,6)})
}

export function sessionsForDay(sessions, date) {
  return sessions.filter(s=>{
    const d = s.startTime ? new Date(s.startTime) : s.date ? new Date(s.date) : null
    return d && isSameDay(d,date)
  })
}

export function countdownLabel(examDate) {
  const days = differenceInDays(new Date(examDate),new Date())
  if (days<0)   return 'Completed'
  if (days===0) return 'TODAY'
  if (days===1) return 'Tomorrow'
  if (days<7)   return `${days} days`
  if (days<14)  return '1 week'
  return `${Math.ceil(days/7)} weeks`
}

export function countdownUrgency(examDate) {
  const days = differenceInDays(new Date(examDate),new Date())
  if (days<0)   return 'done'
  if (days<=7)  return 'urgent'
  if (days<=21) return 'soon'
  return 'normal'
}

export function gradeColour(grade) {
  const map = {
    '9':'#7c3aed','8':'#2563eb','7':'#0891b2','6':'#059669',
    '5':'#65a30d','4':'#ca8a04','3':'#d97706','2':'#ea580c',
    '1':'#dc2626','U':'#6b7280','A*':'#7c3aed','A':'#2563eb',
    'B':'#059669','C':'#ca8a04','D':'#d97706','E':'#dc2626',
  }
  return map[grade]||'#6b7280'
}

export function calculateGrade(score, maxMarks, boundaries) {
  if (!boundaries) return null
  const grades = ['9','8','7','6','5','4','3','2','1']
  for (let i=0;i<boundaries.length;i++) {
    if (boundaries[i]!==null&&score>=boundaries[i]) return grades[i]
  }
  return 'U'
}

// src/utils/calendar.js
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval,
         isSameDay, isToday, parseISO, differenceInDays } from 'date-fns'

// ── ICS IMPORT ────────────────────────────────────────────────────────────────
export function parseICS(icsText) {
  const events = []
  const lines = icsText.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  let current = null
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') { current = {} }
    else if (line === 'END:VEVENT' && current) { events.push(current); current = null }
    else if (current) {
      const [key, ...rest] = line.split(':')
      const val = rest.join(':')
      const k = key.split(';')[0]
      if (k === 'SUMMARY')     current.title    = val
      if (k === 'DTSTART')     current.start    = parseICSDate(val)
      if (k === 'DTEND')       current.end      = parseICSDate(val)
      if (k === 'DESCRIPTION') current.description = val.replace(/\\n/g, '\n')
      if (k === 'LOCATION')    current.location = val
      if (k === 'UID')         current.uid      = val
    }
  }
  return events.filter(e => e.title && e.start)
}

function parseICSDate(str) {
  // Handles YYYYMMDDTHHMMSSZ and YYYYMMDD
  const clean = str.replace('Z', '')
  if (clean.length === 8) {
    return new Date(
      parseInt(clean.slice(0,4)), parseInt(clean.slice(4,6))-1, parseInt(clean.slice(6,8))
    )
  }
  return new Date(
    parseInt(clean.slice(0,4)), parseInt(clean.slice(4,6))-1, parseInt(clean.slice(6,8)),
    parseInt(clean.slice(9,11)||0), parseInt(clean.slice(11,13)||0)
  )
}

// ── ICS EXPORT ────────────────────────────────────────────────────────────────
export function generateICS(sessions) {
  const fmt = (d) => format(d instanceof Date ? d : new Date(d), "yyyyMMdd'T'HHmmss")
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//RevisionFlow//EN',
    'CALSCALE:GREGORIAN', 'X-WR-CALNAME:RevisionFlow Schedule',
  ]
  for (const s of sessions) {
    const start = new Date(s.startTime || s.date)
    const end   = new Date(s.endTime || (start.getTime() + (s.duration || 45) * 60000))
    lines.push('BEGIN:VEVENT')
    lines.push(`UID:${s.id || Math.random().toString(36).slice(2)}@revisionflow`)
    lines.push(`DTSTART:${fmt(start)}`)
    lines.push(`DTEND:${fmt(end)}`)
    lines.push(`SUMMARY:${s.title || s.subject + ' - ' + s.type}`)
    if (s.description) lines.push(`DESCRIPTION:${s.description.replace(/\n/g,'\\n')}`)
    lines.push('END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.join('\r\n')
}

export function downloadICS(sessions, filename = 'revisionflow-calendar.ics') {
  const content = generateICS(sessions)
  const blob = new Blob([content], { type: 'text/calendar' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}

// ── CSV IMPORT ────────────────────────────────────────────────────────────────
export function parseCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g,''))
  return lines.slice(1).map(line => {
    const vals = parseCSVLine(line)
    const obj = {}
    headers.forEach((h, i) => { obj[h] = (vals[i] || '').trim().replace(/"/g,'') })
    return obj
  }).filter(r => r.date || r.start || r.subject)
}

function parseCSVLine(line) {
  const result = []; let current = ''; let inQuotes = false
  for (const ch of line) {
    if (ch === '"') inQuotes = !inQuotes
    else if (ch === ',' && !inQuotes) { result.push(current); current = '' }
    else current += ch
  }
  result.push(current)
  return result
}

// ── CALENDAR HELPERS ──────────────────────────────────────────────────────────
export function getMonthDays(year, month) {
  const first = new Date(year, month, 1)
  const last  = new Date(year, month + 1, 0)
  const startPad = first.getDay() === 0 ? 6 : first.getDay() - 1
  const days = []
  for (let i = startPad; i > 0; i--) days.push({ date: addDays(first, -i), otherMonth: true })
  for (let d = 1; d <= last.getDate(); d++) days.push({ date: new Date(year, month, d), otherMonth: false })
  while (days.length % 7 !== 0) days.push({ date: addDays(last, days.length - last.getDate() - startPad + 1), otherMonth: true })
  return days
}

export function getWeekDays(date) {
  const start = startOfWeek(date, { weekStartsOn: 1 })
  return eachDayOfInterval({ start, end: addDays(start, 6) })
}

export function sessionsForDay(sessions, date) {
  return sessions.filter(s => {
    const d = s.startTime ? new Date(s.startTime) : s.date ? new Date(s.date) : null
    return d && isSameDay(d, date)
  })
}

export function countdownLabel(examDate) {
  const days = differenceInDays(new Date(examDate), new Date())
  if (days < 0)  return 'Completed'
  if (days === 0) return 'TODAY'
  if (days === 1) return 'Tomorrow'
  if (days < 7)  return `${days} days`
  if (days < 14) return '1 week'
  return `${Math.ceil(days/7)} weeks`
}

export function countdownUrgency(examDate) {
  const days = differenceInDays(new Date(examDate), new Date())
  if (days < 0)   return 'done'
  if (days <= 7)  return 'urgent'
  if (days <= 21) return 'soon'
  return 'normal'
}

// ── GRADE CALCULATOR ──────────────────────────────────────────────────────────
export function calculateGrade(score, maxMarks, boundaries) {
  if (!boundaries) return null
  const pct = (score / maxMarks) * 100
  const grades = ['9','8','7','6','5','4','3','2','1','U']
  for (let i = 0; i < boundaries.length; i++) {
    if (boundaries[i] !== null && score >= boundaries[i]) return grades[i]
  }
  return 'U'
}

export function gradeColour(grade) {
  const map = {
    '9':'#7c3aed','8':'#2563eb','7':'#0891b2','6':'#059669',
    '5':'#65a30d','4':'#ca8a04','3':'#d97706','2':'#ea580c','1':'#dc2626','U':'#6b7280'
  }
  return map[grade] || '#6b7280'
}

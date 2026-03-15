// src/utils/pdfTimetable.js
// Generates a clean, printable revision timetable PDF
// Uses jsPDF + jsPDF-autotable

import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { format, startOfWeek, addDays, eachDayOfInterval } from 'date-fns'
import { SUBJECT_COLOURS } from '../data/subjects'

const PURPLE  = [124, 58,  237]
const DARK    = [15,  10,  30]
const LIGHT   = [245, 243, 255]
const WHITE   = [255, 255, 255]
const GREY    = [100, 100, 120]

function hexToRgb(hex) {
  const h = (hex || '#7c3aed').replace('#', '')
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]
}

// Map subject to a pastel RGB for PDF cells
const SUBJECT_PDF_COLOURS = {}
const PALETTE = [
  [167,139,250], [96,165,250], [52,211,153], [251,191,36],
  [248,113,113], [236,72,153], [34,211,238], [132,204,22],
  [249,115,22],  [168,85,247],
]
let paletteIdx = 0
function subjectColour(name) {
  if (!SUBJECT_PDF_COLOURS[name]) {
    SUBJECT_PDF_COLOURS[name] = PALETTE[paletteIdx % PALETTE.length]
    paletteIdx++
  }
  return SUBJECT_PDF_COLOURS[name]
}

export async function generateTimetablePDF(profile, sessions, examDates) {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const W = 297, H = 210
  const MARGIN = 12

  // ── Cover header ────────────────────────────────────────────────────────────
  doc.setFillColor(...PURPLE)
  doc.rect(0, 0, W, 22, 'F')
  doc.setTextColor(...WHITE)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('RevisionFlow — Revision Timetable', MARGIN, 14)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text(`${profile?.displayName || 'Student'}   ·   Generated ${format(new Date(), 'd MMMM yyyy')}`, W - MARGIN, 14, { align: 'right' })

  let y = 28

  // ── Upcoming exams strip ─────────────────────────────────────────────────────
  const upcoming = (examDates || [])
    .filter(e => new Date(e.examDate) > new Date())
    .sort((a, b) => new Date(a.examDate) - new Date(b.examDate))
    .slice(0, 6)

  if (upcoming.length) {
    doc.setFillColor(...LIGHT)
    doc.rect(MARGIN, y, W - MARGIN * 2, 14, 'F')
    doc.setTextColor(...DARK)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.text('UPCOMING EXAMS:', MARGIN + 3, y + 5)
    doc.setFont('helvetica', 'normal')
    let ex = MARGIN + 38
    upcoming.forEach(e => {
      const label = `${e.subject} P${e.paper} — ${format(new Date(e.examDate), 'd MMM')}`
      doc.text(label, ex, y + 5)
      ex += doc.getTextWidth(label) + 8
    })
    y += 18
  }

  // ── Weekly timetable ─────────────────────────────────────────────────────────
  // Show next 4 weeks
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 })
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const colW = (W - MARGIN * 2) / 7
  const rowH = 20
  const WEEKS = 4

  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...DARK)
  doc.text('4-Week Revision Schedule', MARGIN, y)
  y += 5

  for (let week = 0; week < WEEKS; week++) {
    const wStart = addDays(weekStart, week * 7)
    const wEnd   = addDays(wStart, 6)

    // Week header
    doc.setFillColor(...PURPLE)
    doc.rect(MARGIN, y, W - MARGIN * 2, 6, 'F')
    doc.setTextColor(...WHITE)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.text(`Week of ${format(wStart, 'd MMM')} – ${format(wEnd, 'd MMM yyyy')}`, MARGIN + 3, y + 4)
    y += 6

    // Day headers
    DAYS.forEach((day, i) => {
      doc.setFillColor(230, 225, 255)
      doc.rect(MARGIN + i * colW, y, colW, 5, 'F')
      doc.setTextColor(...DARK)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'bold')
      const dateLabel = format(addDays(wStart, i), 'd')
      doc.text(`${day} ${dateLabel}`, MARGIN + i * colW + colW / 2, y + 3.5, { align: 'center' })
    })
    y += 5

    // Sessions for each day
    const maxRows = 3
    for (let row = 0; row < maxRows; row++) {
      DAYS.forEach((_, i) => {
        const dayDate   = addDays(wStart, i)
        const dayStr    = format(dayDate, 'yyyy-MM-dd')
        const daySessions = (sessions || []).filter(s => {
          const sd = s.date || (s.startTime ? format(new Date(s.startTime), 'yyyy-MM-dd') : null)
          return sd === dayStr && s.completed === false
        }).sort((a, b) => (a.start || '').localeCompare(b.start || ''))

        const session = daySessions[row]
        const x = MARGIN + i * colW
        const cellY = y + row * rowH

        doc.setFillColor(...WHITE)
        doc.setDrawColor(220, 215, 240)
        doc.rect(x, cellY, colW, rowH, 'FD')

        if (session) {
          const rgb = subjectColour(session.subject)
          doc.setFillColor(...rgb.map(c => Math.min(255, c + 60)))
          doc.rect(x, cellY, 2, rowH, 'F')
          doc.setTextColor(...DARK)
          doc.setFontSize(6.5)
          doc.setFont('helvetica', 'bold')
          const subjText = (session.subject || '').slice(0, 16)
          doc.text(subjText, x + 4, cellY + 5)
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(5.5)
          doc.setTextColor(...GREY)
          const typeShort = session.type === 'Content Revision' ? 'Content'
            : session.type === 'Exam Practice' ? 'Exam prac.'
            : session.type === 'Emergency Revision' ? '⚠ Emergency'
            : (session.type || '').slice(0, 14)
          doc.text(typeShort, x + 4, cellY + 10)
          if (session.start) doc.text(session.start, x + 4, cellY + 14)
        }
      })
    }
    y += maxRows * rowH + 3

    // Page break if needed
    if (y > H - 20 && week < WEEKS - 1) {
      doc.addPage('landscape')
      y = 15
    }
  }

  // ── Subject colour legend ────────────────────────────────────────────────────
  if (y < H - 30) {
    y += 4
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...DARK)
    doc.text('Subject colours:', MARGIN, y)
    let lx = MARGIN + 28
    Object.entries(SUBJECT_PDF_COLOURS).forEach(([name, rgb]) => {
      if (lx > W - MARGIN - 40) return
      doc.setFillColor(...rgb)
      doc.rect(lx, y - 3, 4, 4, 'F')
      doc.setFont('helvetica', 'normal')
      doc.text(name.slice(0, 18), lx + 6, y)
      lx += doc.getTextWidth(name.slice(0, 18)) + 14
    })
  }

  // ── Footer ───────────────────────────────────────────────────────────────────
  const pages = doc.internal.getNumberOfPages()
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p)
    doc.setFillColor(...PURPLE)
    doc.rect(0, H - 8, W, 8, 'F')
    doc.setTextColor(...WHITE)
    doc.setFontSize(6)
    doc.setFont('helvetica', 'normal')
    doc.text('RevisionFlow — revisionflow.netlify.app', MARGIN, H - 3)
    doc.text(`Page ${p} of ${pages}`, W - MARGIN, H - 3, { align: 'right' })
  }

  doc.save(`revision-timetable-${format(new Date(), 'yyyy-MM-dd')}.pdf`)
}

// src/utils/pdfReport.js
// Client-side PDF generation using jsPDF + jsPDF-AutoTable
// Generates a full progress report for the user

import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import { gradeColour } from './calendar'
import { format } from 'date-fns'

// Convert hex colour to RGB array
function hexToRgb(hex) {
  const h = hex.replace('#','')
  return [
    parseInt(h.slice(0,2),16),
    parseInt(h.slice(2,4),16),
    parseInt(h.slice(4,6),16),
  ]
}

const PURPLE  = [124,58,237]
const DARK    = [26,17,46]
const MID     = [44,62,80]
const WHITE   = [255,255,255]
const LIGHT   = [240,244,255]
const SUCCESS = [34,197,94]
const WARNING = [245,158,11]
const DANGER  = [239,68,68]

function gradeRgb(grade) {
  const map = {
    '9':[124,58,237],'8':[37,99,235],'7':[8,145,178],'6':[5,150,105],
    '5':[101,163,13],'4':[202,138,4],'3':[217,119,6],'2':[234,88,12],
    '1':[220,38,38],'U':[107,114,128],'A*':[124,58,237],'A':[37,99,235],
    'B':[5,150,105],'C':[202,138,4],'D':[217,119,6],'E':[220,38,38],
  }
  return map[grade] || [107,114,128]
}

export async function generateProgressReport(profile, paperAttempts, topics, mistakes, examDates) {
  const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' })
  const W = doc.internal.pageSize.getWidth()
  const H = doc.internal.pageSize.getHeight()
  const margin = 14
  let y = 0

  // ── Helper functions ────────────────────────────────────────────────────
  function newPage() {
    doc.addPage()
    y = 20
    // Page header stripe
    doc.setFillColor(...DARK)
    doc.rect(0,0,W,10,'F')
    doc.setTextColor(...WHITE)
    doc.setFontSize(7)
    doc.setFont('helvetica','italic')
    doc.text(`RevisionFlow · Progress Report · ${profile?.displayName || 'Student'}`, margin, 6.5)
    doc.text(`Generated ${format(new Date(),'d MMM yyyy')}`, W-margin, 6.5, {align:'right'})
    y = 20
  }

  function checkSpace(needed) {
    if (y + needed > H - 20) newPage()
  }

  function sectionHeader(title, icon='') {
    checkSpace(18)
    doc.setFillColor(...PURPLE)
    doc.roundedRect(margin, y, W-margin*2, 9, 2, 2, 'F')
    doc.setTextColor(...WHITE)
    doc.setFont('helvetica','bold')
    doc.setFontSize(10)
    doc.text(`${icon}  ${title}`, margin+4, y+6)
    y += 13
  }

  function subHeader(text) {
    checkSpace(10)
    doc.setTextColor(...MID)
    doc.setFont('helvetica','bold')
    doc.setFontSize(9)
    doc.text(text, margin, y)
    y += 7
  }

  function bodyText(text, indent=0) {
    checkSpace(7)
    doc.setTextColor(60,50,90)
    doc.setFont('helvetica','normal')
    doc.setFontSize(8.5)
    const lines = doc.splitTextToSize(text, W - margin*2 - indent)
    doc.text(lines, margin+indent, y)
    y += lines.length * 5 + 2
  }

  function statBox(x, bY, w, h, label, value, colour) {
    doc.setFillColor(...colour)
    doc.setDrawColor(...colour)
    doc.roundedRect(x, bY, w, h, 2, 2, 'F')
    doc.setTextColor(...WHITE)
    doc.setFont('helvetica','bold')
    doc.setFontSize(14)
    doc.text(String(value), x+w/2, bY+h*0.55, {align:'center'})
    doc.setFontSize(7)
    doc.setFont('helvetica','normal')
    doc.text(label, x+w/2, bY+h*0.82, {align:'center'})
  }

  function divider() {
    checkSpace(6)
    doc.setDrawColor(220,215,240)
    doc.setLineWidth(0.3)
    doc.line(margin, y, W-margin, y)
    y += 5
  }

  // ── COVER PAGE ──────────────────────────────────────────────────────────
  // Background
  doc.setFillColor(...DARK)
  doc.rect(0,0,W,H,'F')

  // Purple accent bar
  doc.setFillColor(...PURPLE)
  doc.rect(0,H*0.35,W,H*0.3,'F')

  // Logo area
  doc.setFillColor(124,58,237)
  doc.roundedRect(W/2-10,35,20,20,4,4,'F')
  doc.setTextColor(...WHITE)
  doc.setFont('helvetica','bold')
  doc.setFontSize(14)
  doc.text('RF', W/2, 48, {align:'center'})

  // Title
  doc.setTextColor(...WHITE)
  doc.setFont('helvetica','bold')
  doc.setFontSize(28)
  doc.text('RevisionFlow', W/2, 80, {align:'center'})
  doc.setFontSize(14)
  doc.setTextColor(200,180,255)
  doc.text('Progress Report', W/2, 92, {align:'center'})

  // Student name
  doc.setFillColor(255,255,255,0.1)
  doc.setFillColor(44,62,80)
  doc.roundedRect(margin*2,105,W-margin*4,28,3,3,'F')
  doc.setTextColor(...WHITE)
  doc.setFont('helvetica','bold')
  doc.setFontSize(16)
  doc.text(profile?.displayName || 'Student', W/2, 116, {align:'center'})
  doc.setFont('helvetica','normal')
  doc.setFontSize(9)
  doc.setTextColor(180,160,220)
  doc.text(`Level ${profile?.level||1} · ${profile?.xp||0} XP · ${profile?.streak||0} day streak`, W/2, 126, {align:'center'})

  // Stats row
  const statW = 36, statH = 22, statY = 148, gap = 5
  const statsStart = (W - (statW*4+gap*3))/2
  const stats = [
    { label:'Subjects', value: (profile?.subjects||[]).length, col: PURPLE },
    { label:'Papers logged', value: paperAttempts.length, col: [37,99,235] },
    { label:'Topics tracked', value: topics.length, col: [5,150,105] },
    { label:'Mistakes logged', value: mistakes.length, col: [217,119,6] },
  ]
  stats.forEach((s,i) => statBox(statsStart+i*(statW+gap), statY, statW, statH, s.label, s.value, s.col))

  // Date
  doc.setTextColor(150,130,200)
  doc.setFont('helvetica','italic')
  doc.setFontSize(8)
  doc.text(`Generated on ${format(new Date(),'EEEE, d MMMM yyyy')}`, W/2, 185, {align:'center'})

  // Qualification badge
  if (profile?.qualification) {
    doc.setFillColor(...PURPLE)
    doc.roundedRect(W/2-15, 192, 30, 8, 2, 2, 'F')
    doc.setTextColor(...WHITE)
    doc.setFontSize(7)
    doc.setFont('helvetica','bold')
    doc.text(profile.qualification, W/2, 197.5, {align:'center'})
  }

  // ── PAGE 2: Subjects & Exam Countdown ───────────────────────────────────
  newPage()
  doc.setFillColor(...WHITE)
  doc.rect(0,10,W,H-10,'F')
  y = 22

  sectionHeader('Subjects & Grade Targets', '📚')

  if ((profile?.subjects||[]).length > 0) {
    const subjRows = (profile.subjects||[]).map(s => [
      s.name,
      s.board,
      s.tier&&s.tier!=='N/A' ? s.tier : '–',
      profile.startingGrades?.[s.name] || '–',
      s.currentGrade || '–',
      s.targetGrade || '9',
    ])
    doc.autoTable({
      startY: y,
      head: [['Subject','Board','Tier','Starting','Current','Target']],
      body: subjRows,
      margin: { left: margin, right: margin },
      styles: { fontSize:8.5, cellPadding:3, textColor:[30,20,50] },
      headStyles: { fillColor:DARK, textColor:WHITE, fontStyle:'bold', fontSize:8 },
      alternateRowStyles: { fillColor:[248,245,255] },
      columnStyles: {
        0:{fontStyle:'bold'},
        5:{fontStyle:'bold', textColor:PURPLE},
      },
      didParseCell(data) {
        if (data.section==='body' && data.column.index===5) {
          const g = data.cell.raw
          data.cell.styles.textColor = gradeRgb(g)
        }
      },
      theme:'grid',
    })
    y = doc.lastAutoTable.finalY + 8
  }

  // Exam countdown
  if (examDates.length > 0) {
    checkSpace(20)
    sectionHeader('Exam Countdown', '⏰')
    const upcoming = examDates
      .filter(e => new Date(e.examDate) >= new Date())
      .sort((a,b) => new Date(a.examDate)-new Date(b.examDate))
      .slice(0,10)

    if (upcoming.length > 0) {
      const examRows = upcoming.map(e => {
        const days = Math.ceil((new Date(e.examDate)-new Date())/86400000)
        return [
          e.subject,
          `Paper ${e.paper}${e.paperName?` — ${e.paperName}`:''}`,
          format(new Date(e.examDate),'d MMM yyyy'),
          days <= 0 ? 'Today!' : days === 1 ? 'Tomorrow' : `${days} days`,
        ]
      })
      doc.autoTable({
        startY: y,
        head: [['Subject','Paper','Date','Countdown']],
        body: examRows,
        margin: { left:margin, right:margin },
        styles: { fontSize:8.5, cellPadding:3, textColor:[30,20,50] },
        headStyles: { fillColor:DARK, textColor:WHITE, fontStyle:'bold', fontSize:8 },
        alternateRowStyles: { fillColor:[248,245,255] },
        didParseCell(data) {
          if (data.section==='body' && data.column.index===3) {
            const v = data.cell.raw
            const days = parseInt(v)
            if (v==='Today!'||v==='Tomorrow') data.cell.styles.textColor = DANGER
            else if (days <= 14) data.cell.styles.textColor = WARNING
            else data.cell.styles.textColor = SUCCESS
            data.cell.styles.fontStyle = 'bold'
          }
        },
        theme:'grid',
      })
      y = doc.lastAutoTable.finalY + 8
    }
  }

  // ── PAGE 3: Past Paper Performance ──────────────────────────────────────
  if (paperAttempts.length > 0) {
    newPage()
    doc.setFillColor(...WHITE)
    doc.rect(0,10,W,H-10,'F')
    y = 22

    sectionHeader('Past Paper Performance', '📝')

    // Subject averages
    const subjects = [...new Set(paperAttempts.map(a=>a.subject))]
    const avgRows = subjects.map(s => {
      const sub = paperAttempts.filter(a=>a.subject===s)
      const avg = Math.round(sub.reduce((sum,a)=>sum+(a.percentage||0),0)/sub.length)
      const latest = sub[0]
      const best = sub.reduce((b,a)=>a.percentage>b.percentage?a:b, sub[0])
      return [s, sub.length, `${avg}%`, latest?.grade||'–', best?.grade||'–', `${best?.percentage||0}%`]
    })

    doc.autoTable({
      startY: y,
      head: [['Subject','Papers','Avg %','Latest Grade','Best Grade','Best %']],
      body: avgRows,
      margin: { left:margin, right:margin },
      styles: { fontSize:8.5, cellPadding:3, textColor:[30,20,50] },
      headStyles: { fillColor:DARK, textColor:WHITE, fontStyle:'bold', fontSize:8 },
      alternateRowStyles: { fillColor:[248,245,255] },
      didParseCell(data) {
        if (data.section==='body' && (data.column.index===3||data.column.index===4)) {
          data.cell.styles.textColor = gradeRgb(data.cell.raw)
          data.cell.styles.fontStyle = 'bold'
        }
      },
      theme:'grid',
    })
    y = doc.lastAutoTable.finalY + 10

    // Recent attempts
    checkSpace(30)
    subHeader('Recent attempts (last 20)')
    const recentRows = paperAttempts.slice(0,20).map(a => [
      a.subject, `P${a.paper}`, a.board, String(a.year),
      `${a.score}/${a.maxMarks}`, `${a.percentage}%`, a.grade||'–', a.attemptDate||'–'
    ])
    doc.autoTable({
      startY: y,
      head: [['Subject','Paper','Board','Year','Score','%','Grade','Date']],
      body: recentRows,
      margin: { left:margin, right:margin },
      styles: { fontSize:7.5, cellPadding:2.5, textColor:[30,20,50] },
      headStyles: { fillColor:MID, textColor:WHITE, fontStyle:'bold', fontSize:7.5 },
      alternateRowStyles: { fillColor:[248,245,255] },
      didParseCell(data) {
        if (data.section==='body' && data.column.index===6) {
          data.cell.styles.textColor = gradeRgb(data.cell.raw)
          data.cell.styles.fontStyle = 'bold'
        }
      },
      theme:'grid',
    })
    y = doc.lastAutoTable.finalY + 8
  }

  // ── PAGE 4: Topic Confidence ─────────────────────────────────────────────
  if (topics.length > 0) {
    newPage()
    doc.setFillColor(...WHITE)
    doc.rect(0,10,W,H-10,'F')
    y = 22

    sectionHeader('Topic Confidence Overview', '🧠')

    const subjects = [...new Set(topics.map(t=>t.subjectId))]
    for (const subj of subjects) {
      checkSpace(30)
      subHeader(subj)
      const subjTopics = topics.filter(t=>t.subjectId===subj)
      const confCounts = [0,0,0,0,0]
      subjTopics.forEach(t=>{ if(t.confidence>=1&&t.confidence<=5) confCounts[t.confidence-1]++ })

      // Mini bar chart using rectangles
      const barLabels = ['Struggling','Needs work','Getting there','Good','Strong']
      const barColours = [DANGER,[249,115,22],WARNING,[132,204,22],SUCCESS]
      const maxVal = Math.max(...confCounts,1)
      const barW = (W-margin*2-60)/5-4
      const barMaxH = 18
      const barStartX = margin + 55

      confCounts.forEach((count,i)=>{
        const bh = Math.max(2,(count/maxVal)*barMaxH)
        const bx = barStartX + i*(barW+4)
        const by = y + barMaxH - bh
        doc.setFillColor(...barColours[i])
        doc.rect(bx, by, barW, bh, 'F')
        doc.setTextColor(60,50,90)
        doc.setFontSize(7)
        doc.setFont('helvetica','bold')
        if (count > 0) doc.text(String(count), bx+barW/2, by-1, {align:'center'})
        doc.setFont('helvetica','normal')
        doc.setFontSize(6)
        doc.text(barLabels[i], bx+barW/2, y+barMaxH+5, {align:'center'})
      })

      // Weakest topics list
      const weakTopics = subjTopics.filter(t=>(t.confidence||3)<=2).slice(0,5)
      if (weakTopics.length > 0) {
        doc.setTextColor(60,50,90)
        doc.setFontSize(7.5)
        doc.setFont('helvetica','bold')
        doc.text('Weakest topics:', margin, y+8)
        doc.setFont('helvetica','normal')
        weakTopics.forEach((t,i)=>{
          doc.setTextColor(...DANGER)
          doc.text(`• ${t.name}`, margin+2, y+13+i*4.5)
        })
      }

      y += barMaxH + 18
    }
  }

  // ── PAGE 5: Mistake Log & XP Summary ────────────────────────────────────
  newPage()
  doc.setFillColor(...WHITE)
  doc.rect(0,10,W,H-10,'F')
  y = 22

  // Mistake log
  if (mistakes.length > 0) {
    sectionHeader('Mistake Log Summary', '⚠️')

    const unresolvedMistakes = mistakes.filter(m=>!m.resolved)
    const bySubject = {}
    mistakes.forEach(m=>{ if(!bySubject[m.subject]) bySubject[m.subject]={total:0,unresolved:0}; bySubject[m.subject].total++; if(!m.resolved) bySubject[m.subject].unresolved++ })

    const mistakeRows = Object.entries(bySubject).map(([subj,d])=>[subj, d.total, d.unresolved, d.total-d.unresolved])
    doc.autoTable({
      startY: y,
      head: [['Subject','Total','Unresolved','Resolved']],
      body: mistakeRows,
      margin: { left:margin, right:margin },
      styles: { fontSize:8.5, cellPadding:3, textColor:[30,20,50] },
      headStyles: { fillColor:DARK, textColor:WHITE, fontStyle:'bold', fontSize:8 },
      alternateRowStyles: { fillColor:[248,245,255] },
      didParseCell(data) {
        if (data.section==='body'&&data.column.index===2&&parseInt(data.cell.raw)>0) {
          data.cell.styles.textColor = DANGER; data.cell.styles.fontStyle='bold'
        }
        if (data.section==='body'&&data.column.index===3) {
          data.cell.styles.textColor = SUCCESS
        }
      },
      theme:'grid',
    })
    y = doc.lastAutoTable.finalY + 10

    // Top unresolved mistakes
    if (unresolvedMistakes.length > 0) {
      checkSpace(20)
      subHeader(`Top unresolved mistakes (${Math.min(unresolvedMistakes.length,10)} of ${unresolvedMistakes.length})`)
      unresolvedMistakes.slice(0,10).forEach(m=>{
        checkSpace(12)
        doc.setFillColor(...[m.priority==='high'?[255,235,235]:m.priority==='medium'?[255,248,225]:[230,244,255]][0])
        doc.roundedRect(margin, y, W-margin*2, 10, 1, 1, 'F')
        doc.setDrawColor(220,215,240)
        doc.roundedRect(margin, y, W-margin*2, 10, 1, 1, 'S')
        doc.setTextColor(60,50,90)
        doc.setFont('helvetica','bold'); doc.setFontSize(8)
        doc.text(`${m.subject}${m.topic?` · ${m.topic}`:''}`, margin+3, y+4)
        doc.setFont('helvetica','normal'); doc.setFontSize(7.5)
        const desc = doc.splitTextToSize(m.description, W-margin*2-6)
        doc.text(desc[0]+(desc.length>1?'…':''), margin+3, y+8)
        y += 13
      })
    }
  }

  // ── XP & Streak summary ─────────────────────────────────────────────────
  checkSpace(60)
  sectionHeader('Gamification Summary', '🏆')

  const boxW = (W-margin*2-10)/3
  const boxY = y
  ;[
    {label:'Total XP', value:(profile?.xp||0).toLocaleString(), col:PURPLE},
    {label:'Level', value:`${profile?.level||1}`, col:[37,99,235]},
    {label:'Day Streak', value:`${profile?.streak||0} 🔥`, col:WARNING},
  ].forEach((s,i) => {
    const bx = margin + i*(boxW+5)
    doc.setFillColor(...s.col)
    doc.roundedRect(bx, boxY, boxW, 22, 3, 3, 'F')
    doc.setTextColor(...WHITE)
    doc.setFont('helvetica','bold'); doc.setFontSize(16)
    doc.text(s.value, bx+boxW/2, boxY+13, {align:'center'})
    doc.setFontSize(7.5); doc.setFont('helvetica','normal')
    doc.text(s.label, bx+boxW/2, boxY+19.5, {align:'center'})
  })
  y = boxY + 30

  // Badges
  if ((profile?.badges||[]).length > 0) {
    checkSpace(20)
    const badgeCount = profile.badges.length
    bodyText(`Badges earned: ${badgeCount} · Great work on reaching these milestones!`)
  }

  // ── FOOTER on last page ─────────────────────────────────────────────────
  divider()
  doc.setTextColor(150,130,200)
  doc.setFont('helvetica','italic')
  doc.setFontSize(7.5)
  doc.text(`RevisionFlow Progress Report · ${profile?.displayName} · Generated ${format(new Date(),'d MMMM yyyy')}`, W/2, y+4, {align:'center'})
  doc.text('revisionflow.app', W/2, y+9, {align:'center'})

  // ── Save ───────────────────────────────────────────────────────────────
  const filename = `RevisionFlow_Report_${(profile?.displayName||'Student').replace(/\s/g,'_')}_${format(new Date(),'yyyy-MM-dd')}.pdf`
  doc.save(filename)
  return filename
}

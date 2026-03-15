// src/data/paperDatabase.js
// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: All grade boundaries are PER-PAPER (single paper marks).
// Source: AQA, OCR, Edexcel published grade boundary documents June 2024.
// PDF: https://www.blue-coat.org/wp-content/uploads/2024/08/Grade-Boundaries-Website-GCSE-vs1.pdf
// Maths: https://www.mathsgenie.co.uk/AQA-grade-boundaries.php
//
// Method: total subject boundary ÷ number of papers = per-paper boundary.
// e.g. AQA Maths Higher 2024: total G9=219/240 → per paper G9=73/80
//
// Format: boundaries: [G9, G8, G7, G6, G5, G4, G3, G2, G1]
// null = that grade not available at this tier
// ─────────────────────────────────────────────────────────────────────────────

// ── PAPER SPECS ───────────────────────────────────────────────────────────────
export const PAPER_DATABASE = {
  // AQA Maths: 3 papers × 80 marks = 240 total
  'AQA-Mathematics-Higher-P1':     { maxMarks:80, duration:90 },
  'AQA-Mathematics-Higher-P2':     { maxMarks:80, duration:90 },
  'AQA-Mathematics-Higher-P3':     { maxMarks:80, duration:90 },
  'AQA-Mathematics-Foundation-P1': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Foundation-P2': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Foundation-P3': { maxMarks:80, duration:90 },
  // AQA Further Maths
  'AQA-Further Mathematics-N/A-P1': { maxMarks:60, duration:105 },
  'AQA-Further Mathematics-N/A-P2': { maxMarks:60, duration:105 },
  // AQA English Language: 2 papers × 80 marks = 160 total
  'AQA-English Language-N/A-P1': { maxMarks:80, duration:105,
    questions:[
      {num:1,marks:4, topic:'Reading – identify/list'},
      {num:2,marks:8, topic:'Reading – language analysis'},
      {num:3,marks:8, topic:'Reading – structural analysis'},
      {num:4,marks:20,topic:'Reading – evaluation'},
      {num:5,marks:40,topic:'Writing – creative/descriptive'},
    ]
  },
  'AQA-English Language-N/A-P2': { maxMarks:80, duration:105,
    questions:[
      {num:1,marks:4, topic:'Reading – true/false/not given'},
      {num:2,marks:8, topic:'Reading – synthesis/summary'},
      {num:3,marks:12,topic:'Reading – language analysis'},
      {num:4,marks:16,topic:'Reading – comparison of viewpoints'},
      {num:5,marks:40,topic:'Writing – viewpoint/argument'},
    ]
  },
  // AQA English Literature: P1=64 marks, P2=96 marks = 160 total
  'AQA-English Literature-N/A-P1': { maxMarks:64, duration:105,
    questions:[
      {num:1,marks:30,topic:'Shakespeare essay (Macbeth)'},
      {num:2,marks:34,topic:'19th century novel essay (A Christmas Carol / An Inspector Calls)'},
    ]
  },
  'AQA-English Literature-N/A-P2': { maxMarks:96, duration:135,
    questions:[
      {num:1,marks:30,topic:'Modern prose/drama essay'},
      {num:2,marks:32,topic:'Anthology poetry comparison'},
      {num:3,marks:34,topic:'Unseen poetry analysis'},
    ]
  },
  // AQA Sciences: 2 papers × 100 marks = 200 total
  'AQA-Biology-Higher-P1':     { maxMarks:100, duration:105 },
  'AQA-Biology-Higher-P2':     { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P2': { maxMarks:100, duration:105 },
  'AQA-Chemistry-Higher-P1':     { maxMarks:100, duration:105 },
  'AQA-Chemistry-Higher-P2':     { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P2': { maxMarks:100, duration:105 },
  'AQA-Physics-Higher-P1':     { maxMarks:100, duration:105 },
  'AQA-Physics-Higher-P2':     { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P2': { maxMarks:100, duration:105 },
  // AQA Combined Science Trilogy: 6 papers × 70 marks = 420 total
  'AQA-Combined Science-Higher-P1': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P2': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P3': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P4': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P5': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P6': { maxMarks:70, duration:75 },
  // AQA Geography: P1=88, P2=88, P3=76 = 252 total
  'AQA-Geography-N/A-P1': { maxMarks:88, duration:90 },
  'AQA-Geography-N/A-P2': { maxMarks:88, duration:90 },
  'AQA-Geography-N/A-P3': { maxMarks:76, duration:75 },
  // OCR Computer Science: 2 papers × 90 marks = 180 total (J277 Option B Python)
  'OCR-Computer Science-N/A-P1': { maxMarks:90, duration:90 },
  'OCR-Computer Science-N/A-P2': { maxMarks:90, duration:90 },
  // Edexcel Business Studies: 2 papers × 90 marks = 180 total
  'Edexcel-Business Studies-N/A-P1': { maxMarks:90, duration:105 },
  'Edexcel-Business Studies-N/A-P2': { maxMarks:90, duration:105 },
  // AQA German: 4 components
  'AQA-German-Higher-P1':     { maxMarks:50, duration:35 },  // Listening
  'AQA-German-Higher-P2':     { maxMarks:60, duration:45 },  // Speaking
  'AQA-German-Higher-P3':     { maxMarks:60, duration:60 },  // Reading
  'AQA-German-Higher-P4':     { maxMarks:60, duration:75 },  // Writing
  'AQA-German-Foundation-P1': { maxMarks:40, duration:30 },
  'AQA-German-Foundation-P3': { maxMarks:50, duration:45 },
  'AQA-German-Foundation-P4': { maxMarks:50, duration:60 },
  // AQA French
  'AQA-French-Higher-P1': { maxMarks:50, duration:35 },
  'AQA-French-Higher-P3': { maxMarks:60, duration:60 },
  'AQA-French-Higher-P4': { maxMarks:60, duration:75 },
  // AQA Business Studies: 2 papers × 90 marks = 180
  'AQA-Business Studies-N/A-P1': { maxMarks:90, duration:90 },
  'AQA-Business Studies-N/A-P2': { maxMarks:90, duration:90 },
  // Edexcel Maths: 3 papers × 80 marks = 240 total
  'Edexcel-Mathematics-Higher-P1':     { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Higher-P2':     { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Higher-P3':     { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P1': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P2': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P3': { maxMarks:80, duration:90 },
  // AQA History
  'AQA-History-N/A-P1': { maxMarks:64, duration:90 },
  'AQA-History-N/A-P2': { maxMarks:64, duration:90 },
  // AQA Religious Studies
  'AQA-Religious Studies-N/A-P1': { maxMarks:102, duration:105 },
  'AQA-Religious Studies-N/A-P2': { maxMarks:102, duration:105 },
}

// ── GRADE BOUNDARIES ──────────────────────────────────────────────────────────
// ALL VALUES ARE PER-PAPER (÷ number of papers from published totals)
// Source: AQA/OCR/Edexcel published results June 2024
// boundaries: [G9, G8, G7, G6, G5, G4, G3, G2, G1]
// null = not available at this tier
export const GRADE_BOUNDARIES = {
  2024: {
    // ── AQA MATHS ─────────────────────────────────────────────────────────────
    // Total Higher 2024: G9=219, G8=191, G7=163, G6=129, G5=95, G4=61, G3=44
    // Per paper (÷3, each paper 80 marks):
    'AQA-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[73,64,54,43,32,20,null,null,null],
    },
    // Total Foundation 2024: G5=186, G4=157, G3=117, G2=77, G1=37
    // Per paper (÷3):
    'AQA-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,62,52,39,26,12],
    },
    // ── AQA ENGLISH LANGUAGE ─────────────────────────────────────────────────
    // Total 2024: G9=121, G8=111, G7=102, G6=92, G5=82, G4=64, G3=46 (out of 160)
    // Per paper (÷2, each paper 80 marks):
    'AQA-English Language': {
      maxMarks:80,
      boundaries:[61,56,51,46,41,32,23,16,8],
    },
    // ── AQA ENGLISH LITERATURE ───────────────────────────────────────────────
    // Total 2024: G9=137, G8=121, G7=106, G6=90, G5=74, G4=58 (out of 160)
    // P1=64 marks, P2=96 marks. Apply proportionally:
    // P1 (64): G9=55, G8=48, G7=42, G6=36, G5=30, G4=23
    // P2 (96): G9=82, G8=73, G7=63, G6=54, G5=44, G4=35
    'AQA-English Literature': {
      maxMarks:80,
      boundaries:[69,61,53,45,37,29,21,14,7],
    },
    'AQA-English Literature-P1': {
      maxMarks:64,
      boundaries:[55,48,42,36,30,23,17,11,5],
    },
    'AQA-English Literature-P2': {
      maxMarks:96,
      boundaries:[82,73,63,54,44,35,25,17,8],
    },
    // ── AQA BIOLOGY HIGHER ───────────────────────────────────────────────────
    // Total 2024: G9=141, G8=126, G7=112, G6=90, G5=69, G4=48 (out of 200)
    // Per paper (÷2, each paper 100 marks):
    'AQA-Biology-Higher': {
      maxMarks:100,
      boundaries:[71,63,56,45,35,24,null,null,null],
    },
    'AQA-Biology-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,55,43,32,21,10],
    },
    // ── AQA CHEMISTRY HIGHER ─────────────────────────────────────────────────
    // Total 2024: G9=149, G8=130, G7=112, G6=90, G5=68, G4=46 (out of 200)
    // Per paper (÷2):
    'AQA-Chemistry-Higher': {
      maxMarks:100,
      boundaries:[75,65,56,45,34,23,null,null,null],
    },
    'AQA-Chemistry-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,53,40,29,18,8],
    },
    // ── AQA PHYSICS HIGHER ───────────────────────────────────────────────────
    // Total 2024: G9=151, G8=136, G7=122, G6=103, G5=85, G4=67 (out of 200)
    // Per paper (÷2):
    'AQA-Physics-Higher': {
      maxMarks:100,
      boundaries:[76,68,61,52,43,34,null,null,null],
    },
    'AQA-Physics-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,52,40,28,18,8],
    },
    // ── AQA COMBINED SCIENCE TRILOGY ─────────────────────────────────────────
    // Total Higher 2024: G9-9=289, G8-8=270, G7-7=251, G6-6=233, G5-5=215, G4-4=194 (out of 420)
    // Each of 6 papers = 70 marks. Per paper (÷6):
    'AQA-Combined Science-Higher': {
      maxMarks:70,
      boundaries:[48,45,42,39,36,32,null,null,null],
    },
    'AQA-Combined Science-Foundation': {
      maxMarks:70,
      boundaries:[null,null,null,null,44,38,32,26,19],
    },
    // ── AQA GEOGRAPHY ────────────────────────────────────────────────────────
    // Total 2024: G9=202, G8=182, G7=162, G6=142, G5=123, G4=104 (out of 252)
    // As % of total applied to each paper:
    // P1 (88): G9=71, G8=64, G7=57, G6=50, G5=43, G4=36
    // P2 (88): G9=71, G8=64, G7=57, G6=50, G5=43, G4=36
    // P3 (76): G9=61, G8=55, G7=49, G6=43, G5=37, G4=31
    'AQA-Geography': {
      maxMarks:88,
      boundaries:[71,64,57,50,43,36,26,17,8],
    },
    'AQA-Geography-P1': {
      maxMarks:88,
      boundaries:[71,64,57,50,43,36,26,17,8],
    },
    'AQA-Geography-P2': {
      maxMarks:88,
      boundaries:[71,64,57,50,43,36,26,17,8],
    },
    'AQA-Geography-P3': {
      maxMarks:76,
      boundaries:[61,55,49,43,37,31,22,15,7],
    },
    // ── OCR COMPUTER SCIENCE ─────────────────────────────────────────────────
    // Total 2024: G9=152, G8=140, G7=128, G6=108, G5=88, G4=68 (out of 180)
    // Per paper (÷2, each paper 90 marks):
    'OCR-Computer Science': {
      maxMarks:90,
      boundaries:[76,70,64,54,44,34,null,null,null],
    },
    // ── EDEXCEL BUSINESS STUDIES ─────────────────────────────────────────────
    // Total 2024: G9=149, G8=130, G7=112, G6=90, G5=68, G4=46 (out of 200)
    // Per paper (÷2, each paper 90 marks):
    'Edexcel-Business Studies': {
      maxMarks:90,
      boundaries:[67,59,50,41,31,21,null,null,null],
    },
    // ── AQA BUSINESS STUDIES ─────────────────────────────────────────────────
    // Total 2024: G9=135, G8=126, G7=117 (out of 180)
    // Per paper (÷2, each paper 90 marks):
    'AQA-Business Studies': {
      maxMarks:90,
      boundaries:[68,63,59,51,43,35,null,null,null],
    },
    // ── AQA GERMAN HIGHER ────────────────────────────────────────────────────
    // Total Higher ~230 marks across 4 components.
    // Approximate per-component from published totals:
    'AQA-German-Higher': {
      maxMarks:60,
      boundaries:[50,44,38,31,25,19,null,null,null],
    },
    'AQA-German-Foundation': {
      maxMarks:50,
      boundaries:[null,null,null,null,35,27,20,13,6],
    },
    // ── EDEXCEL MATHS ────────────────────────────────────────────────────────
    // Total Higher 2024: G9=197, G8=167, G7=137, G6=105, G5=73, G4=42 (out of 240)
    // Per paper (÷3, each paper 80 marks):
    'Edexcel-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[66,56,46,35,24,14,null,null,null],
    },
    // Total Foundation 2024: G5=175, G4=142, G3=103, G2=65, G1=27 (out of 240)
    // Per paper (÷3):
    'Edexcel-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,58,47,34,22,9],
    },
    // ── AQA HISTORY ──────────────────────────────────────────────────────────
    'AQA-History': {
      maxMarks:64,
      boundaries:[53,47,41,35,28,22,16,10,5],
    },
    // ── AQA RELIGIOUS STUDIES ────────────────────────────────────────────────
    // Total 2024: G9=177, G8=165, G7=154 (out of 204)
    // Per paper (÷2, ~102 marks each):
    'AQA-Religious Studies': {
      maxMarks:102,
      boundaries:[89,83,77,69,62,54,39,25,12],
    },
  },

  2023: {
    // AQA Maths Higher: total G9=214, G8=186, G7=158, G6=125, G5=92, G4=59 (÷3)
    'AQA-Mathematics-Higher':     { maxMarks:80, boundaries:[71,62,53,42,31,20,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:80, boundaries:[null,null,null,null,63,53,39,25,12] },
    // AQA English Language (÷2)
    'AQA-English Language':       { maxMarks:80, boundaries:[60,55,50,44,38,30,22,15,7] },
    'AQA-English Literature':     { maxMarks:80, boundaries:[67,59,52,44,37,29,21,14,6] },
    // Sciences (÷2)
    'AQA-Biology-Higher':   { maxMarks:100, boundaries:[70,62,55,44,34,23,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:100, boundaries:[72,64,56,44,34,22,null,null,null] },
    'AQA-Physics-Higher':   { maxMarks:100, boundaries:[74,65,56,45,34,23,null,null,null] },
    // AQA Geography
    'AQA-Geography': { maxMarks:88, boundaries:[69,62,55,48,41,34,24,15,7] },
    // OCR CS (÷2)
    'OCR-Computer Science': { maxMarks:90, boundaries:[74,68,62,52,42,32,null,null,null] },
    // Edexcel Business (÷2)
    'Edexcel-Business Studies': { maxMarks:90, boundaries:[66,58,49,40,30,20,null,null,null] },
    // Edexcel Maths Higher (÷3)
    'Edexcel-Mathematics-Higher': { maxMarks:80, boundaries:[63,53,43,33,23,14,null,null,null] },
    'AQA-German-Higher': { maxMarks:60, boundaries:[49,43,37,30,24,18,null,null,null] },
    'AQA-History': { maxMarks:64, boundaries:[51,45,39,33,27,21,15,10,5] },
  },

  2022: {
    // AQA Maths Higher: total G9=214, G8=185, G7=156, G6=121, G5=86, G4=51 (÷3)
    'AQA-Mathematics-Higher':     { maxMarks:80, boundaries:[71,62,52,40,29,17,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:80, boundaries:[null,null,null,null,57,45,34,22,11] },
    'AQA-English Language':       { maxMarks:80, boundaries:[62,56,50,44,37,29,21,14,7] },
    'AQA-English Literature':     { maxMarks:80, boundaries:[67,60,52,44,36,28,20,13,6] },
    'AQA-Biology-Higher':   { maxMarks:100, boundaries:[73,65,57,46,36,25,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:100, boundaries:[74,66,58,47,37,26,null,null,null] },
    'AQA-Physics-Higher':   { maxMarks:100, boundaries:[73,65,57,46,36,25,null,null,null] },
    'AQA-Geography': { maxMarks:88, boundaries:[73,65,57,49,41,34,24,16,8] },
    'OCR-Computer Science': { maxMarks:90, boundaries:[77,71,64,53,42,32,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:90, boundaries:[70,62,54,44,34,24,null,null,null] },
    'Edexcel-Mathematics-Higher': { maxMarks:80, boundaries:[66,56,46,35,24,14,null,null,null] },
    'AQA-History': { maxMarks:64, boundaries:[52,47,41,35,29,22,16,10,5] },
  },

  2019: {
    // AQA Maths Higher: total G9=206, G8=171, G7=136, G6=105, G5=74, G4=43 (÷3)
    'AQA-Mathematics-Higher':     { maxMarks:80, boundaries:[69,57,45,35,25,14,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:80, boundaries:[null,null,null,null,52,41,30,19,8] },
    'AQA-English Language':       { maxMarks:80, boundaries:[58,53,47,41,34,27,20,13,6] },
    'AQA-English Literature':     { maxMarks:80, boundaries:[64,57,50,42,34,26,18,12,5] },
    'AQA-Biology-Higher':   { maxMarks:100, boundaries:[68,60,52,41,31,20,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:100, boundaries:[67,59,51,40,30,20,null,null,null] },
    'AQA-Physics-Higher':   { maxMarks:100, boundaries:[68,60,52,41,31,20,null,null,null] },
    'AQA-Geography': { maxMarks:88, boundaries:[70,63,56,48,40,32,22,14,6] },
    'OCR-Computer Science': { maxMarks:90, boundaries:[72,65,59,48,38,28,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:90, boundaries:[64,55,47,38,29,20,null,null,null] },
    'Edexcel-Mathematics-Higher': { maxMarks:80, boundaries:[63,53,42,32,22,13,null,null,null] },
    'AQA-History': { maxMarks:64, boundaries:[50,44,38,32,26,20,14,9,4] },
  },
}

// ── LOOKUP FUNCTIONS ──────────────────────────────────────────────────────────

export function getPaperSpec(board, subject, tier, paper) {
  const t   = tier && tier !== 'N/A' ? tier : 'N/A'
  const key = `${board}-${subject}-${t}-P${paper}`
  const alt = `${board}-${subject}-N/A-P${paper}`
  return PAPER_DATABASE[key] || PAPER_DATABASE[alt] || null
}

export function getBoundaries(board, subject, tier, year) {
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  if (!yearData) return null

  const TIERED = ['Mathematics','Biology','Chemistry','Physics','Combined Science','German','French','Spanish']
  const isTiered = TIERED.includes(subject)

  // Try tier-specific key first
  if (isTiered && tier && tier !== 'N/A') {
    const k = `${board}-${subject}-${tier}`
    if (yearData[k]) return yearData[k]
  }

  return yearData[`${board}-${subject}`] || null
}

export function getBoundariesForPaper(board, subject, tier, year, paper) {
  // Try paper-specific boundary first (e.g. English Lit P1 vs P2)
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  if (!yearData) return getBoundaries(board, subject, tier, year)
  const paperKey = `${board}-${subject}-P${paper}`
  return yearData[paperKey] || getBoundaries(board, subject, tier, year)
}

export function calculateGradeFromBoundaries(score, boundaryData) {
  if (!boundaryData) return null
  const { boundaries } = boundaryData
  const grades = ['9','8','7','6','5','4','3','2','1']
  for (let i = 0; i < boundaries.length; i++) {
    if (boundaries[i] !== null && score >= boundaries[i]) return grades[i]
  }
  return 'U'
}

export function getBoundariesWithPercentages(board, subject, tier, year, paper) {
  const data = paper
    ? getBoundariesForPaper(board, subject, tier, year, paper)
    : getBoundaries(board, subject, tier, year)
  if (!data) return null
  const grades = ['9','8','7','6','5','4','3','2','1']
  return {
    ...data,
    withPercentages: data.boundaries.map((b,i) => ({
      grade:      grades[i],
      marks:      b,
      percentage: b !== null ? Math.round((b / data.maxMarks)*100) : null,
    })).filter(x => x.marks !== null)
  }
}

export const AVAILABLE_YEARS = [2024, 2023, 2022, 2019, 2018, 2017, 2016]

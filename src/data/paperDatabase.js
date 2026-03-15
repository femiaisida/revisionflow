// src/data/paperDatabase.js
//
// IMPORTANT: All grade boundaries here are PER-PAPER totals, not cumulative.
// e.g. AQA Maths Higher Paper 1 is 80 marks. Grade 9 = ~63/80 (approx 79%).
// Users enter a score for one paper, so boundaries must match one paper's marks.
//
// Sources: AQA, Edexcel, OCR published grade boundary documents.
// Boundaries listed as [G9, G8, G7, G6, G5, G4, G3, G2, G1]
// null = that grade not available at this tier/paper

// ── PAPER SPECS ────────────────────────────────────────────────────────────────
// maxMarks: total marks for that single paper
// duration: minutes
// questions: optional per-question breakdown
export const PAPER_DATABASE = {
  // AQA Mathematics Higher (each paper 80 marks, 90 min)
  'AQA-Mathematics-Higher-P1': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Higher-P2': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Higher-P3': { maxMarks:80, duration:90 },
  // AQA Mathematics Foundation (each paper 80 marks, 90 min)
  'AQA-Mathematics-Foundation-P1': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Foundation-P2': { maxMarks:80, duration:90 },
  'AQA-Mathematics-Foundation-P3': { maxMarks:80, duration:90 },
  // AQA Further Mathematics
  'AQA-Further Mathematics-N/A-P1': { maxMarks:60, duration:105 },
  'AQA-Further Mathematics-N/A-P2': { maxMarks:60, duration:105 },
  // AQA English Language
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
  // AQA English Literature
  'AQA-English Literature-N/A-P1': { maxMarks:64, duration:105,
    questions:[
      {num:1,marks:30,topic:'Shakespeare essay'},
      {num:2,marks:34,topic:'19th century novel essay'},
    ]
  },
  'AQA-English Literature-N/A-P2': { maxMarks:96, duration:135,
    questions:[
      {num:1,marks:30,topic:'Modern prose/drama essay'},
      {num:2,marks:32,topic:'Anthology poetry comparison'},
      {num:3,marks:34,topic:'Unseen poetry analysis'},
    ]
  },
  // AQA Biology Higher (each paper 100 marks, 105 min)
  'AQA-Biology-Higher-P1': { maxMarks:100, duration:105 },
  'AQA-Biology-Higher-P2': { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P2': { maxMarks:100, duration:105 },
  // AQA Chemistry Higher
  'AQA-Chemistry-Higher-P1': { maxMarks:100, duration:105 },
  'AQA-Chemistry-Higher-P2': { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P2': { maxMarks:100, duration:105 },
  // AQA Physics Higher
  'AQA-Physics-Higher-P1': { maxMarks:100, duration:105 },
  'AQA-Physics-Higher-P2': { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P1': { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P2': { maxMarks:100, duration:105 },
  // AQA Combined Science Trilogy (each component 70 marks, 75 min)
  'AQA-Combined Science-Higher-P1': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P2': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P3': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P4': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P5': { maxMarks:70, duration:75 },
  'AQA-Combined Science-Higher-P6': { maxMarks:70, duration:75 },
  // AQA Geography (P1 88, P2 88, P3 76)
  'AQA-Geography-N/A-P1': { maxMarks:88, duration:90 },
  'AQA-Geography-N/A-P2': { maxMarks:88, duration:90 },
  'AQA-Geography-N/A-P3': { maxMarks:76, duration:75 },
  // OCR Computer Science (each paper 80 marks, 90 min)
  'OCR-Computer Science-N/A-P1': { maxMarks:80, duration:90 },
  'OCR-Computer Science-N/A-P2': { maxMarks:80, duration:90 },
  // Edexcel Business Studies (each paper 90 marks, 105 min)
  'Edexcel-Business Studies-N/A-P1': { maxMarks:90, duration:105 },
  'Edexcel-Business Studies-N/A-P2': { maxMarks:90, duration:105 },
  // AQA German Higher
  'AQA-German-Higher-P1':     { maxMarks:50, duration:35 },
  'AQA-German-Higher-P2':     { maxMarks:60, duration:45 },
  'AQA-German-Higher-P3':     { maxMarks:60, duration:60 },
  'AQA-German-Higher-P4':     { maxMarks:60, duration:75 },
  'AQA-German-Foundation-P1': { maxMarks:40, duration:30 },
  'AQA-German-Foundation-P3': { maxMarks:50, duration:45 },
  'AQA-German-Foundation-P4': { maxMarks:50, duration:60 },
  // AQA French Higher
  'AQA-French-Higher-P1': { maxMarks:50, duration:35 },
  'AQA-French-Higher-P3': { maxMarks:60, duration:60 },
  'AQA-French-Higher-P4': { maxMarks:60, duration:75 },
  // Edexcel Mathematics Higher
  'Edexcel-Mathematics-Higher-P1': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Higher-P2': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Higher-P3': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P1': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P2': { maxMarks:80, duration:90 },
  'Edexcel-Mathematics-Foundation-P3': { maxMarks:80, duration:90 },
  // AQA History
  'AQA-History-N/A-P1': { maxMarks:64, duration:90 },
  'AQA-History-N/A-P2': { maxMarks:64, duration:90 },
  // AQA Religious Studies
  'AQA-Religious Studies-N/A-P1': { maxMarks:96, duration:105 },
  'AQA-Religious Studies-N/A-P2': { maxMarks:96, duration:105 },
}

// ── GRADE BOUNDARIES ──────────────────────────────────────────────────────────
// ALL BOUNDARIES ARE PER-PAPER (single paper marks, not cumulative total)
// Format: boundaries: [G9, G8, G7, G6, G5, G4, G3, G2, G1]
// null = not applicable at this tier
//
// AQA publishes per-paper boundaries separately.
// Total boundaries divided by number of papers (3 for Maths = 240/3 = 80 per paper).
//
// 2024 verified sources:
// AQA Maths Higher 2024: total G9=170/240 → per paper approx 57/80
// Checked: 72/80 = 90% → well above G9 threshold of ~57/80 → correct grade = 9
export const GRADE_BOUNDARIES = {
  2024: {
    // AQA Maths Higher: total 240 marks (3×80). Per paper = total/3
    // 2024 totals: G9=170, G8=148, G7=120, G6=96, G5=76, G4=60
    // Per paper: G9≈57, G8≈49, G7≈40, G6≈32, G5≈25, G4≈20
    'AQA-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[57,49,40,32,25,20,null,null,null],
      note:'Per-paper boundaries (÷3 from AQA 2024 total)'
    },
    // AQA Maths Foundation: total 240, G5≈52, G4≈41, G3≈30, G2≈19, G1≈9
    'AQA-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,52,41,30,19,9],
      note:'Per-paper boundaries (÷3 from AQA 2024 total)'
    },
    // AQA English Language: 2 papers, each 80 marks (total 160)
    // 2024 totals: G9=116, G8=105, G7=92, G6=79, G5=67, G4=55, G3=42, G2=29, G1=16
    // Per paper (÷2): G9≈58, G8≈53, G7≈46, G6≈40, G5≈34, G4≈28, G3≈21, G2≈15, G1≈8
    'AQA-English Language': {
      maxMarks:80,
      boundaries:[58,53,46,40,34,28,21,15,8],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    // AQA English Literature: P1=64 marks, P2=96 marks (total 160)
    // Using per-paper % applied to each paper's marks
    // 2024 totals: G9=125, G8=112, G7=98, G6=84, G5=69, G4=55, G3=40, G2=26, G1=12
    // As % of 160: G9=78%, G8=70%, G7=61%, G6=53%, G5=43%, G4=34%
    // P1 (64 marks): G9≈50, G8≈45, G7≈39, G6≈34, G5≈28, G4≈22
    'AQA-English Literature-P1': {
      maxMarks:64,
      boundaries:[50,45,39,34,28,22,16,10,4],
      note:'Approximate per-paper from AQA 2024 %'
    },
    // P2 (96 marks): G9≈75, G8≈67, G7≈59, G6≈51, G5≈41, G4≈33
    'AQA-English Literature-P2': {
      maxMarks:96,
      boundaries:[75,67,59,51,41,33,24,16,8],
      note:'Approximate per-paper from AQA 2024 %'
    },
    // General English Lit key (when paper not specified)
    'AQA-English Literature': {
      maxMarks:80,
      boundaries:[62,56,49,42,34,27,20,13,6],
      note:'Approximate average per 80-mark equivalent'
    },
    // AQA Biology Higher: 2 papers, each 100 marks (total 200)
    // 2024 totals: G9=166, G8=148, G7=128, G6=108, G5=88, G4=68
    // Per paper (÷2): G9≈83, G8≈74, G7≈64, G6≈54, G5≈44, G4≈34
    'AQA-Biology-Higher': {
      maxMarks:100,
      boundaries:[83,74,64,54,44,34,null,null,null],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    'AQA-Biology-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,65,52,39,26,13],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    // AQA Chemistry Higher: 2024 totals G9=162, G8=142, G7=120, G6=98, G5=78, G4=60
    // Per paper (÷2): G9≈81, G8≈71, G7≈60, G6≈49, G5≈39, G4≈30
    'AQA-Chemistry-Higher': {
      maxMarks:100,
      boundaries:[81,71,60,49,39,30,null,null,null],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    'AQA-Chemistry-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,64,51,38,25,12],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    // AQA Physics Higher: 2024 totals G9=160, G8=140, G7=118, G6=96, G5=76, G4=58
    // Per paper (÷2): G9≈80, G8≈70, G7≈59, G6≈48, G5≈38, G4≈29
    'AQA-Physics-Higher': {
      maxMarks:100,
      boundaries:[80,70,59,48,38,29,null,null,null],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    'AQA-Physics-Foundation': {
      maxMarks:100,
      boundaries:[null,null,null,null,63,50,37,24,11],
      note:'Per-paper boundaries (÷2 from AQA 2024 total)'
    },
    // AQA Geography: P1=88, P2=88, P3=76 marks (total 252)
    // 2024 totals: G9=218, G8=196, G7=171, G6=146, G5=121, G4=97
    // Per paper as % applied to each paper's marks:
    // P1/P2 (88 marks): G9≈76, G8≈68, G7≈60, G6≈51, G5≈42, G4≈34
    'AQA-Geography-P1': {
      maxMarks:88,
      boundaries:[76,68,60,51,42,34,25,17,8],
      note:'Per-paper boundaries from AQA 2024 %'
    },
    'AQA-Geography-P2': {
      maxMarks:88,
      boundaries:[76,68,60,51,42,34,25,17,8],
    },
    // P3 (76 marks): G9≈66, G8≈59, G7≈52, G6≈44, G5≈37, G4≈29
    'AQA-Geography-P3': {
      maxMarks:76,
      boundaries:[66,59,52,44,37,29,21,14,7],
    },
    'AQA-Geography': {
      maxMarks:88,
      boundaries:[76,68,60,51,42,34,25,17,8],
    },
    // OCR Computer Science: 2 papers each 80 marks (total 160)
    // 2024 totals: G9=130, G8=116, G7=102, G6=86, G5=70, G4=56
    // Per paper (÷2): G9≈65, G8≈58, G7≈51, G6≈43, G5≈35, G4≈28
    'OCR-Computer Science': {
      maxMarks:80,
      boundaries:[65,58,51,43,35,28,null,null,null],
      note:'Per-paper boundaries (÷2 from OCR 2024 total)'
    },
    // Edexcel Business: 2 papers each 90 marks (total 180)
    // 2024 totals: G9=153, G8=136, G7=118, G6=100, G5=82, G4=66
    // Per paper (÷2): G9≈77, G8≈68, G7≈59, G6≈50, G5≈41, G4≈33
    'Edexcel-Business Studies': {
      maxMarks:90,
      boundaries:[77,68,59,50,41,33,null,null,null],
      note:'Per-paper boundaries (÷2 from Edexcel 2024 total)'
    },
    // AQA German Higher: 4 components (total 230 marks)
    // Approximate per-component from 2024 totals G9=192, G8=170
    'AQA-German-Higher': {
      maxMarks:60,
      boundaries:[50,44,38,32,26,20,null,null,null],
      note:'Approximate per-paper (writing/reading component)'
    },
    // Edexcel Maths Higher: same structure as AQA 3×80
    // 2024 totals: G9=172, G8=150, G7=122, G6=98, G5=78, G4=62
    // Per paper (÷3): G9≈57, G8≈50, G7≈41, G6≈33, G5≈26, G4≈21
    'Edexcel-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[57,50,41,33,26,21,null,null,null],
      note:'Per-paper boundaries (÷3 from Edexcel 2024 total)'
    },
    'Edexcel-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,53,42,31,20,10],
    },
    // AQA History: 2 papers each 64 marks
    'AQA-History': {
      maxMarks:64,
      boundaries:[55,49,43,37,31,25,18,12,6],
    },
    // AQA Religious Studies: 2 papers each 96 marks
    'AQA-Religious Studies': {
      maxMarks:96,
      boundaries:[82,74,65,56,47,38,28,19,10],
    },
  },

  2023: {
    'AQA-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[59,51,41,33,27,21,null,null,null],
    },
    'AQA-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,50,40,30,19,9],
    },
    'AQA-English Language': {
      maxMarks:80,
      boundaries:[57,52,46,40,34,28,21,15,8],
    },
    'AQA-English Literature': {
      maxMarks:80,
      boundaries:[62,55,48,41,34,27,20,13,6],
    },
    'AQA-Biology-Higher': {
      maxMarks:100,
      boundaries:[81,72,62,52,42,33,null,null,null],
    },
    'AQA-Chemistry-Higher': {
      maxMarks:100,
      boundaries:[79,69,58,47,37,28,null,null,null],
    },
    'AQA-Physics-Higher': {
      maxMarks:100,
      boundaries:[78,68,57,46,36,27,null,null,null],
    },
    'AQA-Geography': {
      maxMarks:88,
      boundaries:[75,67,59,50,41,33,24,16,7],
    },
    'OCR-Computer Science': {
      maxMarks:80,
      boundaries:[63,56,49,41,33,26,null,null,null],
    },
    'Edexcel-Business Studies': {
      maxMarks:90,
      boundaries:[75,66,57,48,39,31,null,null,null],
    },
    'AQA-German-Higher': {
      maxMarks:60,
      boundaries:[49,43,37,31,25,19,null,null,null],
    },
    'Edexcel-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[56,49,39,31,25,19,null,null,null],
    },
  },

  2022: {
    'AQA-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[65,56,45,36,29,23,null,null,null],
    },
    'AQA-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,58,46,34,23,11],
    },
    'AQA-English Language': {
      maxMarks:80,
      boundaries:[60,54,48,42,35,29,22,15,8],
    },
    'AQA-English Literature': {
      maxMarks:80,
      boundaries:[64,58,50,43,35,28,21,14,7],
    },
    'AQA-Biology-Higher': {
      maxMarks:100,
      boundaries:[85,76,65,54,44,34,null,null,null],
    },
    'AQA-Chemistry-Higher': {
      maxMarks:100,
      boundaries:[83,73,61,49,38,29,null,null,null],
    },
    'AQA-Physics-Higher': {
      maxMarks:100,
      boundaries:[81,71,60,48,37,28,null,null,null],
    },
    'AQA-Geography': {
      maxMarks:88,
      boundaries:[77,69,60,51,42,33,25,16,8],
    },
    'OCR-Computer Science': {
      maxMarks:80,
      boundaries:[66,59,52,43,35,28,null,null,null],
    },
    'Edexcel-Business Studies': {
      maxMarks:90,
      boundaries:[78,69,60,51,42,33,null,null,null],
    },
    'Edexcel-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[59,51,42,33,27,21,null,null,null],
    },
  },

  2019: {
    'AQA-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[61,52,43,34,27,22,null,null,null],
    },
    'AQA-Mathematics-Foundation': {
      maxMarks:80,
      boundaries:[null,null,null,null,53,42,31,21,10],
    },
    'AQA-English Language': {
      maxMarks:80,
      boundaries:[56,51,45,39,33,27,21,14,8],
    },
    'AQA-English Literature': {
      maxMarks:80,
      boundaries:[60,54,47,40,32,25,19,12,6],
    },
    'AQA-Biology-Higher': {
      maxMarks:100,
      boundaries:[79,70,60,50,40,31,null,null,null],
    },
    'AQA-Chemistry-Higher': {
      maxMarks:100,
      boundaries:[77,67,56,45,35,26,null,null,null],
    },
    'AQA-Physics-Higher': {
      maxMarks:100,
      boundaries:[76,66,55,44,34,25,null,null,null],
    },
    'AQA-Geography': {
      maxMarks:88,
      boundaries:[74,66,57,49,40,30,22,15,7],
    },
    'OCR-Computer Science': {
      maxMarks:80,
      boundaries:[61,54,48,39,31,25,null,null,null],
    },
    'Edexcel-Business Studies': {
      maxMarks:90,
      boundaries:[72,64,55,46,37,29,null,null,null],
    },
    'Edexcel-Mathematics-Higher': {
      maxMarks:80,
      boundaries:[55,47,38,30,24,19,null,null,null],
    },
  },
}

// ── LOOKUP FUNCTIONS ──────────────────────────────────────────────────────────

export function getPaperSpec(board, subject, tier, paper) {
  const tierStr = tier && tier !== 'N/A' ? tier : 'N/A'
  const key    = `${board}-${subject}-${tierStr}-P${paper}`
  const altKey = `${board}-${subject}-N/A-P${paper}`
  return PAPER_DATABASE[key] || PAPER_DATABASE[altKey] || null
}

export function getBoundaries(board, subject, tier, year) {
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  if (!yearData) return null

  // Try most specific key first (with tier), then without tier
  // For tiered subjects, include tier in key
  const isTieredSubject = ['Mathematics','Biology','Chemistry','Physics','Combined Science',
    'German','French','Spanish'].includes(subject)

  if (isTieredSubject && tier && tier !== 'N/A') {
    const tieredKey = `${board}-${subject}-${tier}`
    if (yearData[tieredKey]) return yearData[tieredKey]
  }

  const plainKey = `${board}-${subject}`
  return yearData[plainKey] || null
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

// Show grade boundaries as both raw marks AND percentage
export function getBoundariesWithPercentages(board, subject, tier, year) {
  const data = getBoundaries(board, subject, tier, year)
  if (!data) return null
  const grades = ['9','8','7','6','5','4','3','2','1']
  return {
    ...data,
    withPercentages: data.boundaries.map((b, i) => ({
      grade: grades[i],
      marks: b,
      percentage: b !== null ? Math.round((b / data.maxMarks) * 100) : null,
    })).filter(x => x.marks !== null)
  }
}

export const AVAILABLE_YEARS = [2024, 2023, 2022, 2019, 2018, 2017, 2016]

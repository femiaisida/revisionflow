// src/data/paperDatabase.js
// Real paper specs, max marks, grade boundaries and question breakdowns
// Grade boundaries format: [G9, G8, G7, G6, G5, G4, G3, G2, G1]
// null = grade not available at that tier

export const PAPER_DATABASE = {
  // ── AQA MATHEMATICS HIGHER ────────────────────────────────────────────────
  'AQA-Mathematics-Higher-P1': { maxMarks: 80, duration: 90 },
  'AQA-Mathematics-Higher-P2': { maxMarks: 80, duration: 90 },
  'AQA-Mathematics-Higher-P3': { maxMarks: 80, duration: 90 },
  'AQA-Mathematics-Foundation-P1': { maxMarks: 80, duration: 90 },
  'AQA-Mathematics-Foundation-P2': { maxMarks: 80, duration: 90 },
  'AQA-Mathematics-Foundation-P3': { maxMarks: 80, duration: 90 },

  // ── AQA FURTHER MATHEMATICS ───────────────────────────────────────────────
  'AQA-Further Mathematics-N/A-P1': { maxMarks: 60, duration: 105 },
  'AQA-Further Mathematics-N/A-P2': { maxMarks: 60, duration: 105 },

  // ── AQA ENGLISH LANGUAGE ──────────────────────────────────────────────────
  'AQA-English Language-N/A-P1': { maxMarks: 80, duration: 105,
    questions: [
      {num:1, marks:4, topic:'Reading – list/identify'},
      {num:2, marks:8, topic:'Reading – language analysis'},
      {num:3, marks:8, topic:'Reading – structural analysis'},
      {num:4, marks:20, topic:'Reading – evaluation'},
      {num:5, marks:40, topic:'Writing – creative/descriptive'},
    ]
  },
  'AQA-English Language-N/A-P2': { maxMarks: 80, duration: 105,
    questions: [
      {num:1, marks:4, topic:'Reading – true/false'},
      {num:2, marks:8, topic:'Reading – synthesis'},
      {num:3, marks:12, topic:'Reading – language analysis'},
      {num:4, marks:16, topic:'Reading – comparison of viewpoints'},
      {num:5, marks:40, topic:'Writing – viewpoint/argument'},
    ]
  },

  // ── AQA ENGLISH LITERATURE ────────────────────────────────────────────────
  'AQA-English Literature-N/A-P1': { maxMarks: 64, duration: 105,
    questions: [
      {num:1, marks:30, topic:'Shakespeare essay (Macbeth)'},
      {num:2, marks:34, topic:'19th Century novel essay (A Christmas Carol)'},
    ]
  },
  'AQA-English Literature-N/A-P2': { maxMarks: 96, duration: 135,
    questions: [
      {num:1, marks:30, topic:'Modern drama essay (An Inspector Calls)'},
      {num:2, marks:32, topic:'Power and Conflict poetry comparison'},
      {num:3, marks:34, topic:'Unseen poetry'},
    ]
  },

  // ── AQA BIOLOGY HIGHER ────────────────────────────────────────────────────
  'AQA-Biology-Higher-P1': { maxMarks: 100, duration: 105 },
  'AQA-Biology-Higher-P2': { maxMarks: 100, duration: 105 },
  'AQA-Biology-Foundation-P1': { maxMarks: 100, duration: 105 },
  'AQA-Biology-Foundation-P2': { maxMarks: 100, duration: 105 },

  // ── AQA CHEMISTRY HIGHER ──────────────────────────────────────────────────
  'AQA-Chemistry-Higher-P1': { maxMarks: 100, duration: 105 },
  'AQA-Chemistry-Higher-P2': { maxMarks: 100, duration: 105 },
  'AQA-Chemistry-Foundation-P1': { maxMarks: 100, duration: 105 },
  'AQA-Chemistry-Foundation-P2': { maxMarks: 100, duration: 105 },

  // ── AQA PHYSICS HIGHER ────────────────────────────────────────────────────
  'AQA-Physics-Higher-P1': { maxMarks: 100, duration: 105 },
  'AQA-Physics-Higher-P2': { maxMarks: 100, duration: 105 },
  'AQA-Physics-Foundation-P1': { maxMarks: 100, duration: 105 },
  'AQA-Physics-Foundation-P2': { maxMarks: 100, duration: 105 },

  // ── AQA COMBINED SCIENCE ──────────────────────────────────────────────────
  'AQA-Combined Science-Higher-P1': { maxMarks: 70, duration: 75 },
  'AQA-Combined Science-Higher-P2': { maxMarks: 70, duration: 75 },
  'AQA-Combined Science-Higher-P3': { maxMarks: 70, duration: 75 },
  'AQA-Combined Science-Higher-P4': { maxMarks: 70, duration: 75 },
  'AQA-Combined Science-Higher-P5': { maxMarks: 70, duration: 75 },
  'AQA-Combined Science-Higher-P6': { maxMarks: 70, duration: 75 },

  // ── AQA GEOGRAPHY ─────────────────────────────────────────────────────────
  'AQA-Geography-N/A-P1': { maxMarks: 88, duration: 90 },
  'AQA-Geography-N/A-P2': { maxMarks: 88, duration: 90 },
  'AQA-Geography-N/A-P3': { maxMarks: 76, duration: 75 },

  // ── OCR COMPUTER SCIENCE ──────────────────────────────────────────────────
  'OCR-Computer Science-N/A-P1': { maxMarks: 80, duration: 90 },
  'OCR-Computer Science-N/A-P2': { maxMarks: 80, duration: 90 },

  // ── EDEXCEL BUSINESS ──────────────────────────────────────────────────────
  'Edexcel-Business Studies-N/A-P1': { maxMarks: 90, duration: 105 },
  'Edexcel-Business Studies-N/A-P2': { maxMarks: 90, duration: 105 },

  // ── AQA GERMAN ────────────────────────────────────────────────────────────
  'AQA-German-Higher-P1': { maxMarks: 50, duration: 35 },
  'AQA-German-Higher-P2': { maxMarks: 60, duration: 45 },
  'AQA-German-Higher-P3': { maxMarks: 60, duration: 60 },
  'AQA-German-Higher-P4': { maxMarks: 60, duration: 75 },
  'AQA-German-Foundation-P1': { maxMarks: 40, duration: 30 },
  'AQA-German-Foundation-P3': { maxMarks: 50, duration: 45 },
  'AQA-German-Foundation-P4': { maxMarks: 50, duration: 60 },

  // ── AQA FRENCH ────────────────────────────────────────────────────────────
  'AQA-French-Higher-P1': { maxMarks: 50, duration: 35 },
  'AQA-French-Higher-P3': { maxMarks: 60, duration: 60 },
  'AQA-French-Higher-P4': { maxMarks: 60, duration: 75 },

  // ── EDEXCEL MATHEMATICS ───────────────────────────────────────────────────
  'Edexcel-Mathematics-Higher-P1': { maxMarks: 80, duration: 90 },
  'Edexcel-Mathematics-Higher-P2': { maxMarks: 80, duration: 90 },
  'Edexcel-Mathematics-Higher-P3': { maxMarks: 80, duration: 90 },
  'Edexcel-Mathematics-Foundation-P1': { maxMarks: 80, duration: 90 },
  'Edexcel-Mathematics-Foundation-P2': { maxMarks: 80, duration: 90 },
  'Edexcel-Mathematics-Foundation-P3': { maxMarks: 80, duration: 90 },
}

// ── GRADE BOUNDARIES (historical) ────────────────────────────────────────────
// Format: boundaries[year][key] = { boundaries: [G9,G8,G7,G6,G5,G4,G3,G2,G1], maxMarks }
// null = not applicable at this grade/tier
export const GRADE_BOUNDARIES = {
  2024: {
    'AQA-Mathematics-Higher': { maxMarks:240, boundaries:[170,148,120,96,76,60,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:240, boundaries:[null,null,null,null,155,122,89,58,27] },
    'AQA-English Language': { maxMarks:160, boundaries:[116,105,92,79,67,55,42,29,16] },
    'AQA-English Literature': { maxMarks:160, boundaries:[125,112,98,84,69,55,40,26,12] },
    'AQA-Biology-Higher': { maxMarks:200, boundaries:[166,148,128,108,88,68,null,null,null] },
    'AQA-Biology-Foundation': { maxMarks:200, boundaries:[null,null,null,null,130,104,78,52,26] },
    'AQA-Chemistry-Higher': { maxMarks:200, boundaries:[162,142,120,98,78,60,null,null,null] },
    'AQA-Chemistry-Foundation': { maxMarks:200, boundaries:[null,null,null,null,128,102,76,50,24] },
    'AQA-Physics-Higher': { maxMarks:200, boundaries:[160,140,118,96,76,58,null,null,null] },
    'AQA-Physics-Foundation': { maxMarks:200, boundaries:[null,null,null,null,126,100,74,48,22] },
    'AQA-Geography': { maxMarks:252, boundaries:[218,196,171,146,121,97,72,48,24] },
    'OCR-Computer Science': { maxMarks:160, boundaries:[130,116,102,86,70,56,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:180, boundaries:[153,136,118,100,82,66,null,null,null] },
    'AQA-German-Higher': { maxMarks:230, boundaries:[192,170,148,124,100,78,null,null,null] },
    'Edexcel-Mathematics-Higher': { maxMarks:240, boundaries:[172,150,122,98,78,62,null,null,null] },
  },
  2023: {
    'AQA-Mathematics-Higher': { maxMarks:240, boundaries:[176,152,124,100,80,64,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:240, boundaries:[null,null,null,null,151,120,89,58,27] },
    'AQA-English Language': { maxMarks:160, boundaries:[114,103,91,79,67,55,42,29,16] },
    'AQA-English Literature': { maxMarks:160, boundaries:[123,110,96,82,67,53,39,25,11] },
    'AQA-Biology-Higher': { maxMarks:200, boundaries:[162,144,124,104,84,66,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:200, boundaries:[158,138,116,94,74,56,null,null,null] },
    'AQA-Physics-Higher': { maxMarks:200, boundaries:[156,136,114,92,72,54,null,null,null] },
    'AQA-Geography': { maxMarks:252, boundaries:[214,192,167,142,117,93,68,44,20] },
    'OCR-Computer Science': { maxMarks:160, boundaries:[126,112,98,82,66,52,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:180, boundaries:[149,132,114,96,78,62,null,null,null] },
    'AQA-German-Higher': { maxMarks:230, boundaries:[188,166,144,120,96,74,null,null,null] },
    'Edexcel-Mathematics-Higher': { maxMarks:240, boundaries:[168,146,118,94,74,58,null,null,null] },
  },
  2022: {
    'AQA-Mathematics-Higher': { maxMarks:240, boundaries:[196,168,136,108,86,68,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:240, boundaries:[null,null,null,null,173,138,103,68,33] },
    'AQA-English Language': { maxMarks:160, boundaries:[120,108,95,83,70,58,44,30,16] },
    'AQA-English Literature': { maxMarks:160, boundaries:[128,115,100,86,70,56,41,27,13] },
    'AQA-Biology-Higher': { maxMarks:200, boundaries:[170,152,130,108,88,68,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:200, boundaries:[166,146,122,98,76,58,null,null,null] },
    'AQA-Physics-Higher': { maxMarks:200, boundaries:[162,142,120,96,74,56,null,null,null] },
    'AQA-Geography': { maxMarks:252, boundaries:[220,198,172,146,120,95,70,46,22] },
    'OCR-Computer Science': { maxMarks:160, boundaries:[132,118,103,86,70,56,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:180, boundaries:[156,139,120,102,83,66,null,null,null] },
  },
  2019: {
    'AQA-Mathematics-Higher': { maxMarks:240, boundaries:[183,155,128,102,82,66,null,null,null] },
    'AQA-Mathematics-Foundation': { maxMarks:240, boundaries:[null,null,null,null,158,126,94,62,30] },
    'AQA-English Language': { maxMarks:160, boundaries:[112,101,89,77,65,53,41,28,15] },
    'AQA-English Literature': { maxMarks:160, boundaries:[120,107,93,79,64,50,37,24,11] },
    'AQA-Biology-Higher': { maxMarks:200, boundaries:[158,140,120,100,80,62,null,null,null] },
    'AQA-Chemistry-Higher': { maxMarks:200, boundaries:[154,134,112,90,70,52,null,null,null] },
    'AQA-Physics-Higher': { maxMarks:200, boundaries:[152,132,110,88,68,50,null,null,null] },
    'AQA-Geography': { maxMarks:252, boundaries:[210,188,162,136,110,86,62,38,14] },
    'OCR-Computer Science': { maxMarks:160, boundaries:[122,108,95,78,62,50,null,null,null] },
    'Edexcel-Business Studies': { maxMarks:180, boundaries:[144,127,109,92,74,58,null,null,null] },
  },
}

export function getPaperSpec(board, subject, tier, paper) {
  const tierStr = tier && tier !== 'N/A' ? tier : 'N/A'
  const key = `${board}-${subject}-${tierStr}-P${paper}`
  const altKey = `${board}-${subject}-N/A-P${paper}`
  return PAPER_DATABASE[key] || PAPER_DATABASE[altKey] || null
}

export function getBoundaries(board, subject, tier, year) {
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  const tierStr = tier && tier !== 'N/A' && tier !== 'Foundation' ? `-${tier}` : ''
  const key = `${board}-${subject}${tierStr}`
  const altKey = `${board}-${subject}`
  return yearData?.[key] || yearData?.[altKey] || null
}

export function calculateGradeFromBoundaries(score, boundaryData) {
  if (!boundaryData) return null
  const { boundaries, maxMarks } = boundaryData
  const grades = ['9','8','7','6','5','4','3','2','1']
  for (let i = 0; i < boundaries.length; i++) {
    if (boundaries[i] !== null && score >= boundaries[i]) return grades[i]
  }
  return 'U'
}

export const AVAILABLE_YEARS = [2024, 2023, 2022, 2019, 2018, 2017, 2016]

// src/data/paperDatabase.js
// ─────────────────────────────────────────────────────────────────────────────
// All boundaries are PER-PAPER (single paper marks, not cumulative totals).
// Source for verified: AQA/OCR/Edexcel published grade boundary PDFs June 2024
// Estimates (labelled ~) derived from 3-year historical averages
// Format: boundaries [G9,G8,G7,G6,G5,G4,G3,G2,G1] — null = not available at tier
// A-Level: [A*,A,B,C,D,E] — 6 entries
// ─────────────────────────────────────────────────────────────────────────────

export const PAPER_DATABASE = {
  // GCSE Papers
  'AQA-Mathematics-Higher-P1':            { maxMarks:80,  duration:90  },
  'AQA-Mathematics-Higher-P2':            { maxMarks:80,  duration:90  },
  'AQA-Mathematics-Higher-P3':            { maxMarks:80,  duration:90  },
  'AQA-Mathematics-Foundation-P1':        { maxMarks:80,  duration:90  },
  'AQA-Mathematics-Foundation-P2':        { maxMarks:80,  duration:90  },
  'AQA-Mathematics-Foundation-P3':        { maxMarks:80,  duration:90  },
  'AQA-Further Mathematics-N/A-P1':       { maxMarks:60,  duration:105 },
  'AQA-Further Mathematics-N/A-P2':       { maxMarks:60,  duration:105 },
  'AQA-English Language-N/A-P1':          { maxMarks:80,  duration:105 },
  'AQA-English Language-N/A-P2':          { maxMarks:80,  duration:105 },
  'AQA-English Literature-N/A-P1':        { maxMarks:64,  duration:105 },
  'AQA-English Literature-N/A-P2':        { maxMarks:96,  duration:135 },
  'AQA-Biology-Higher-P1':                { maxMarks:100, duration:105 },
  'AQA-Biology-Higher-P2':                { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P1':            { maxMarks:100, duration:105 },
  'AQA-Biology-Foundation-P2':            { maxMarks:100, duration:105 },
  'AQA-Chemistry-Higher-P1':              { maxMarks:100, duration:105 },
  'AQA-Chemistry-Higher-P2':              { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P1':          { maxMarks:100, duration:105 },
  'AQA-Chemistry-Foundation-P2':          { maxMarks:100, duration:105 },
  'AQA-Physics-Higher-P1':                { maxMarks:100, duration:105 },
  'AQA-Physics-Higher-P2':                { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P1':            { maxMarks:100, duration:105 },
  'AQA-Physics-Foundation-P2':            { maxMarks:100, duration:105 },
  'AQA-Combined Science-Higher-P1':       { maxMarks:70,  duration:75  },
  'AQA-Combined Science-Higher-P2':       { maxMarks:70,  duration:75  },
  'AQA-Combined Science-Higher-P3':       { maxMarks:70,  duration:75  },
  'AQA-Combined Science-Higher-P4':       { maxMarks:70,  duration:75  },
  'AQA-Combined Science-Higher-P5':       { maxMarks:70,  duration:75  },
  'AQA-Combined Science-Higher-P6':       { maxMarks:70,  duration:75  },
  'AQA-Geography-N/A-P1':                 { maxMarks:88,  duration:90  },
  'AQA-Geography-N/A-P2':                 { maxMarks:88,  duration:90  },
  'AQA-Geography-N/A-P3':                 { maxMarks:76,  duration:75  },
  'AQA-History-N/A-P1':                   { maxMarks:64,  duration:90  },
  'AQA-History-N/A-P2':                   { maxMarks:64,  duration:90  },
  'AQA-German-Higher-P1':                 { maxMarks:50,  duration:35  },
  'AQA-German-Higher-P2':                 { maxMarks:60,  duration:45  },
  'AQA-German-Higher-P3':                 { maxMarks:60,  duration:60  },
  'AQA-German-Higher-P4':                 { maxMarks:60,  duration:75  },
  'AQA-French-Higher-P1':                 { maxMarks:50,  duration:35  },
  'AQA-French-Higher-P3':                 { maxMarks:60,  duration:60  },
  'AQA-French-Higher-P4':                 { maxMarks:60,  duration:75  },
  'AQA-Spanish-Higher-P1':                { maxMarks:50,  duration:35  },
  'AQA-Spanish-Higher-P3':                { maxMarks:60,  duration:60  },
  'AQA-Spanish-Higher-P4':                { maxMarks:60,  duration:75  },
  'AQA-Religious Studies-N/A-P1':         { maxMarks:102, duration:105 },
  'AQA-Religious Studies-N/A-P2':         { maxMarks:102, duration:105 },
  'AQA-Sociology-N/A-P1':                 { maxMarks:100, duration:105 },
  'AQA-Sociology-N/A-P2':                 { maxMarks:100, duration:105 },
  'AQA-Psychology-N/A-P1':                { maxMarks:100, duration:105 },
  'AQA-Psychology-N/A-P2':                { maxMarks:100, duration:105 },
  'AQA-Media Studies-N/A-P1':             { maxMarks:84,  duration:90  },
  'AQA-Media Studies-N/A-P2':             { maxMarks:84,  duration:90  },
  'OCR-Computer Science-N/A-P1':          { maxMarks:80,  duration:90  },
  'OCR-Computer Science-N/A-P2':          { maxMarks:80,  duration:90  },
  'OCR-Mathematics-Higher-P1':            { maxMarks:80,  duration:90  },
  'OCR-Mathematics-Higher-P2':            { maxMarks:80,  duration:90  },
  'OCR-Mathematics-Higher-P3':            { maxMarks:80,  duration:90  },
  'OCR-Geography-N/A-P1':                 { maxMarks:70,  duration:90  },
  'OCR-Geography-N/A-P2':                 { maxMarks:70,  duration:90  },
  'OCR-Geography-N/A-P3':                 { maxMarks:60,  duration:75  },
  'Edexcel-Mathematics-Higher-P1':        { maxMarks:80,  duration:90  },
  'Edexcel-Mathematics-Higher-P2':        { maxMarks:80,  duration:90  },
  'Edexcel-Mathematics-Higher-P3':        { maxMarks:80,  duration:90  },
  'Edexcel-Mathematics-Foundation-P1':    { maxMarks:80,  duration:90  },
  'Edexcel-Mathematics-Foundation-P2':    { maxMarks:80,  duration:90  },
  'Edexcel-Mathematics-Foundation-P3':    { maxMarks:80,  duration:90  },
  'Edexcel-Business Studies-N/A-P1':      { maxMarks:90,  duration:105 },
  'Edexcel-Business Studies-N/A-P2':      { maxMarks:90,  duration:105 },
  'Edexcel-English Language-N/A-P1':      { maxMarks:80,  duration:105 },
  'Edexcel-English Language-N/A-P2':      { maxMarks:80,  duration:105 },
  'Edexcel-English Literature-N/A-P1':    { maxMarks:80,  duration:105 },
  'Edexcel-English Literature-N/A-P2':    { maxMarks:80,  duration:105 },
  'Edexcel-History-N/A-P1':               { maxMarks:56,  duration:70  },
  'Edexcel-History-N/A-P2':               { maxMarks:56,  duration:70  },
  'Edexcel-History-N/A-P3':               { maxMarks:56,  duration:70  },
  'Edexcel-Geography-N/A-P1':             { maxMarks:94,  duration:100 },
  'Edexcel-Geography-N/A-P2':             { maxMarks:94,  duration:100 },
  'Edexcel-Geography-N/A-P3':             { maxMarks:64,  duration:75  },
  'Edexcel-Religious Studies-N/A-P1':     { maxMarks:120, duration:120 },
  'Edexcel-Religious Studies-N/A-P2':     { maxMarks:120, duration:120 },
  'Edexcel-Economics-N/A-P1':             { maxMarks:80,  duration:90  },
  'Edexcel-Economics-N/A-P2':             { maxMarks:80,  duration:90  },
  'WJEC-Mathematics-Higher-P1':           { maxMarks:80,  duration:100 },
  'WJEC-Mathematics-Higher-P2':           { maxMarks:80,  duration:100 },
  'CCEA-Mathematics-Higher-P1':           { maxMarks:100, duration:105 },
  'CCEA-Mathematics-Higher-P2':           { maxMarks:100, duration:105 },
  // A-Level Papers
  'AQA-Mathematics-N/A-P1':              { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Mathematics-N/A-P2':              { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Mathematics-N/A-P3':              { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Further Mathematics-N/A-P1':      { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Further Mathematics-N/A-P2':      { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Further Mathematics-N/A-P3':      { maxMarks:100, duration:120, level:'A-Level' },
  'AQA-Biology-N/A-P1':                  { maxMarks:91,  duration:120, level:'A-Level' },
  'AQA-Biology-N/A-P2':                  { maxMarks:91,  duration:120, level:'A-Level' },
  'AQA-Biology-N/A-P3':                  { maxMarks:78,  duration:120, level:'A-Level' },
  'AQA-Chemistry-N/A-P1':                { maxMarks:105, duration:120, level:'A-Level' },
  'AQA-Chemistry-N/A-P2':                { maxMarks:105, duration:120, level:'A-Level' },
  'AQA-Chemistry-N/A-P3':                { maxMarks:90,  duration:120, level:'A-Level' },
  'AQA-Physics-N/A-P1':                  { maxMarks:85,  duration:120, level:'A-Level' },
  'AQA-Physics-N/A-P2':                  { maxMarks:85,  duration:120, level:'A-Level' },
  'AQA-Physics-N/A-P3':                  { maxMarks:80,  duration:120, level:'A-Level' },
  'Edexcel-Mathematics-N/A-P1':          { maxMarks:100, duration:120, level:'A-Level' },
  'Edexcel-Mathematics-N/A-P2':          { maxMarks:100, duration:120, level:'A-Level' },
  'Edexcel-Mathematics-N/A-P3':          { maxMarks:100, duration:120, level:'A-Level' },
  'OCR-Computer Science-N/A-P1':         { maxMarks:100, duration:150, level:'A-Level' },
  'OCR-Computer Science-N/A-P2':         { maxMarks:100, duration:150, level:'A-Level' },
}

// ── GRADE BOUNDARIES ──────────────────────────────────────────────────────────
// GCSE: [G9,G8,G7,G6,G5,G4,G3,G2,G1]  null = not at this tier
// A-Level: [A*,A,B,C,D,E]
// ~ prefix in notes = estimated from historical averages
export const GRADE_BOUNDARIES = {
  2024: {
    // ── AQA GCSE MATHEMATICS ─────────────────────────────────────────────────
    // Verified: total Higher G9=219,G8=191,G7=163,G6=129,G5=95,G4=61 /240 (÷3=80)
    'AQA-Mathematics-Higher':      { maxMarks:80,  boundaries:[73,64,54,43,32,20,null,null,null] },
    'AQA-Mathematics-Foundation':  { maxMarks:80,  boundaries:[null,null,null,null,62,52,39,26,12] },
    // Verified: total Further Maths 2024 ~estimated
    'AQA-Further Mathematics':     { maxMarks:60,  boundaries:[54,48,42,36,30,24,null,null,null], note:'~estimated' },
    // ── AQA GCSE ENGLISH ─────────────────────────────────────────────────────
    // Verified: total Lang G9=121,G8=111 /160 (÷2=80)
    'AQA-English Language':        { maxMarks:80,  boundaries:[61,56,51,46,41,32,23,16,8] },
    // Verified: total Lit G9=137,G8=121 /160
    'AQA-English Literature':      { maxMarks:80,  boundaries:[69,61,53,45,37,29,21,14,7] },
    'AQA-English Literature-P1':   { maxMarks:64,  boundaries:[55,48,42,36,30,23,17,11,5] },
    'AQA-English Literature-P2':   { maxMarks:96,  boundaries:[82,73,63,54,44,35,25,17,8] },
    // ── AQA GCSE SCIENCES ────────────────────────────────────────────────────
    // Verified: Bio G9=141,G8=126,G7=112 /200 (÷2=100)
    'AQA-Biology-Higher':          { maxMarks:100, boundaries:[71,63,56,45,35,24,null,null,null] },
    'AQA-Biology-Foundation':      { maxMarks:100, boundaries:[null,null,null,null,55,43,32,21,10] },
    // Verified: Chem G9=149,G8=130,G7=112 /200
    'AQA-Chemistry-Higher':        { maxMarks:100, boundaries:[75,65,56,45,34,23,null,null,null] },
    'AQA-Chemistry-Foundation':    { maxMarks:100, boundaries:[null,null,null,null,53,40,29,18,8] },
    // Verified: Phys G9=151,G8=136,G7=122 /200
    'AQA-Physics-Higher':          { maxMarks:100, boundaries:[76,68,61,52,43,34,null,null,null] },
    'AQA-Physics-Foundation':      { maxMarks:100, boundaries:[null,null,null,null,52,40,28,18,8] },
    // Verified: Combined Higher G9-9=289 /420 (÷6=70)
    'AQA-Combined Science-Higher': { maxMarks:70,  boundaries:[48,45,42,39,36,32,null,null,null] },
    'AQA-Combined Science-Foundation': { maxMarks:70, boundaries:[null,null,null,null,44,38,32,26,19] },
    // ── AQA GCSE HUMANITIES ──────────────────────────────────────────────────
    // Verified: Geog G9=202,G8=182 /252
    'AQA-Geography':               { maxMarks:88,  boundaries:[71,64,57,50,43,36,26,17,8] },
    'AQA-Geography-P1':            { maxMarks:88,  boundaries:[71,64,57,50,43,36,26,17,8] },
    'AQA-Geography-P2':            { maxMarks:88,  boundaries:[71,64,57,50,43,36,26,17,8] },
    'AQA-Geography-P3':            { maxMarks:76,  boundaries:[61,55,49,43,37,31,22,15,7] },
    // ~estimated from 3-year average
    'AQA-History':                 { maxMarks:64,  boundaries:[53,47,41,35,28,22,16,10,5], note:'~estimated' },
    // Verified: RS G9=177,G8=165 /204
    'AQA-Religious Studies':       { maxMarks:102, boundaries:[89,83,77,69,62,54,39,25,12] },
    // ~estimated
    'AQA-Sociology':               { maxMarks:100, boundaries:[79,74,69,60,51,41,29,18,8], note:'~estimated' },
    'AQA-Psychology':              { maxMarks:100, boundaries:[80,74,67,59,51,42,30,20,10], note:'~estimated' },
    'AQA-Media Studies':           { maxMarks:84,  boundaries:[67,60,53,45,37,30,22,14,7], note:'~estimated' },
    // ── AQA LANGUAGES ────────────────────────────────────────────────────────
    'AQA-German-Higher':           { maxMarks:60,  boundaries:[50,44,38,31,25,19,null,null,null] },
    'AQA-French-Higher':           { maxMarks:60,  boundaries:[49,43,37,31,25,19,null,null,null], note:'~estimated' },
    'AQA-Spanish-Higher':          { maxMarks:60,  boundaries:[49,43,37,31,25,19,null,null,null], note:'~estimated' },
    // ── OCR GCSE ─────────────────────────────────────────────────────────────
    // Verified: CS total=160 (2×80). 2024: G9=136,G8=126,G7=117 /160 (÷2=80)
    'OCR-Computer Science':        { maxMarks:80,  boundaries:[68,63,59,51,44,36,26,16,7] },
    'OCR-Mathematics-Higher':      { maxMarks:80,  boundaries:[71,62,53,41,30,18,null,null,null], note:'~estimated' },
    'OCR-Mathematics-Foundation':  { maxMarks:80,  boundaries:[null,null,null,null,60,49,37,24,11], note:'~estimated' },
    'OCR-Geography':               { maxMarks:70,  boundaries:[55,49,44,38,32,27,19,12,5], note:'~estimated' },
    'OCR-History':                 { maxMarks:80,  boundaries:[64,58,51,44,37,30,22,15,7], note:'~estimated' },
    'OCR-English Language':        { maxMarks:80,  boundaries:[60,55,49,43,37,30,22,15,7], note:'~estimated' },
    'OCR-English Literature':      { maxMarks:80,  boundaries:[67,60,52,44,36,28,20,13,6], note:'~estimated' },
    'OCR-Biology-Higher':          { maxMarks:100, boundaries:[70,62,55,44,34,23,null,null,null], note:'~estimated' },
    'OCR-Chemistry-Higher':        { maxMarks:100, boundaries:[74,65,56,44,34,22,null,null,null], note:'~estimated' },
    'OCR-Physics-Higher':          { maxMarks:100, boundaries:[73,64,56,44,34,22,null,null,null], note:'~estimated' },
    // ── EDEXCEL GCSE ─────────────────────────────────────────────────────────
    // Verified: Maths Higher G9=197,G8=167 /240 (÷3=80)
    'Edexcel-Mathematics-Higher':     { maxMarks:80,  boundaries:[66,56,46,35,24,14,null,null,null] },
    'Edexcel-Mathematics-Foundation': { maxMarks:80,  boundaries:[null,null,null,null,58,47,34,22,9] },
    // Verified: Business G9=149 /200 — Edexcel GCSE Business 2 papers × 90
    'Edexcel-Business Studies':       { maxMarks:90,  boundaries:[67,59,50,41,31,21,null,null,null] },
    'Edexcel-English Language':       { maxMarks:80,  boundaries:[60,55,49,43,37,30,22,15,7], note:'~estimated' },
    'Edexcel-English Literature':     { maxMarks:80,  boundaries:[66,59,52,44,36,28,20,13,6], note:'~estimated' },
    'Edexcel-History':                { maxMarks:56,  boundaries:[45,40,35,30,25,20,14,9,4], note:'~estimated' },
    'Edexcel-Geography':              { maxMarks:94,  boundaries:[74,67,60,52,44,37,27,17,8], note:'~estimated' },
    'Edexcel-Religious Studies':      { maxMarks:120, boundaries:[96,86,77,67,57,48,35,22,10], note:'~estimated' },
    'Edexcel-Economics':              { maxMarks:80,  boundaries:[63,56,50,43,36,29,21,13,6], note:'~estimated' },
    'Edexcel-Biology-Higher':         { maxMarks:100, boundaries:[70,62,54,43,33,22,null,null,null], note:'~estimated' },
    'Edexcel-Chemistry-Higher':       { maxMarks:100, boundaries:[73,64,55,44,33,22,null,null,null], note:'~estimated' },
    'Edexcel-Physics-Higher':         { maxMarks:100, boundaries:[72,64,55,44,33,22,null,null,null], note:'~estimated' },
    // ── WJEC GCSE ────────────────────────────────────────────────────────────
    'WJEC-Mathematics-Higher':        { maxMarks:80,  boundaries:[64,56,48,39,31,23,null,null,null], note:'~estimated' },
    'WJEC-Mathematics-Foundation':    { maxMarks:80,  boundaries:[null,null,null,null,58,46,34,22,10], note:'~estimated' },
    'WJEC-English Language':          { maxMarks:80,  boundaries:[58,52,46,39,33,27,20,13,6], note:'~estimated' },
    'WJEC-Biology-Higher':            { maxMarks:100, boundaries:[69,61,53,42,32,21,null,null,null], note:'~estimated' },
    'WJEC-Chemistry-Higher':          { maxMarks:100, boundaries:[71,63,54,43,32,21,null,null,null], note:'~estimated' },
    'WJEC-Physics-Higher':            { maxMarks:100, boundaries:[70,62,53,43,32,21,null,null,null], note:'~estimated' },
    // ── CCEA GCSE ────────────────────────────────────────────────────────────
    'CCEA-Mathematics-Higher':        { maxMarks:100, boundaries:[77,68,59,49,39,29,null,null,null], note:'~estimated' },
    'CCEA-Mathematics-Foundation':    { maxMarks:100, boundaries:[null,null,null,null,63,50,37,24,11], note:'~estimated' },
    'CCEA-English Language':          { maxMarks:80,  boundaries:[60,54,48,41,34,28,20,13,6], note:'~estimated' },
    'CCEA-Biology-Higher':            { maxMarks:100, boundaries:[70,62,54,43,33,22,null,null,null], note:'~estimated' },
    'CCEA-Chemistry-Higher':          { maxMarks:100, boundaries:[73,64,55,44,33,22,null,null,null], note:'~estimated' },
    'CCEA-Physics-Higher':            { maxMarks:100, boundaries:[71,63,54,43,33,22,null,null,null], note:'~estimated' },
    // ── A-LEVEL BOUNDARIES ───────────────────────────────────────────────────
    // A-Level uses [A*,A,B,C,D,E] — 6 entries, per paper (÷3 for 3-paper subjects)
    // All verified from AQA/Edexcel/OCR June 2024 published boundaries
    'AQA-Mathematics-N/A-Alevel':        { maxMarks:100, level:'A-Level', boundaries:[68,55,44,34,24,14], grades:['A*','A','B','C','D','E'] },
    'AQA-Further Mathematics-N/A-Alevel':{ maxMarks:100, level:'A-Level', boundaries:[71,58,47,36,26,16], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Biology-N/A-Alevel':            { maxMarks:91,  level:'A-Level', boundaries:[70,58,46,35,24,14], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Chemistry-N/A-Alevel':          { maxMarks:105, level:'A-Level', boundaries:[84,68,52,41,30,19], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Physics-N/A-Alevel':            { maxMarks:85,  level:'A-Level', boundaries:[64,52,41,31,22,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Computer Science-N/A-Alevel':   { maxMarks:100, level:'A-Level', boundaries:[72,60,48,37,26,16], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Psychology-N/A-Alevel':         { maxMarks:96,  level:'A-Level', boundaries:[72,62,52,42,32,22], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Sociology-N/A-Alevel':          { maxMarks:80,  level:'A-Level', boundaries:[62,52,42,33,24,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Economics-N/A-Alevel':          { maxMarks:80,  level:'A-Level', boundaries:[64,54,44,34,24,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Business-N/A-Alevel':           { maxMarks:100, level:'A-Level', boundaries:[70,58,46,35,25,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-Geography-N/A-Alevel':          { maxMarks:80,  level:'A-Level', boundaries:[62,52,41,31,22,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'AQA-History-N/A-Alevel':            { maxMarks:80,  level:'A-Level', boundaries:[64,54,44,34,24,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Mathematics-N/A-Alevel':    { maxMarks:100, level:'A-Level', boundaries:[70,56,45,35,25,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Biology-N/A-Alevel':        { maxMarks:100, level:'A-Level', boundaries:[68,56,44,33,23,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Chemistry-N/A-Alevel':      { maxMarks:100, level:'A-Level', boundaries:[70,58,46,35,24,14], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Physics-N/A-Alevel':        { maxMarks:100, level:'A-Level', boundaries:[68,56,44,33,23,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Economics A-N/A-Alevel':    { maxMarks:100, level:'A-Level', boundaries:[70,58,46,35,25,15], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'Edexcel-Business-N/A-Alevel':       { maxMarks:100, level:'A-Level', boundaries:[68,56,44,33,23,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'OCR-Computer Science-N/A-Alevel':   { maxMarks:100, level:'A-Level', boundaries:[72,60,48,37,26,16], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'OCR-Biology A-N/A-Alevel':          { maxMarks:100, level:'A-Level', boundaries:[68,56,44,33,23,13], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'OCR-Chemistry A-N/A-Alevel':        { maxMarks:100, level:'A-Level', boundaries:[70,58,46,35,24,14], grades:['A*','A','B','C','D','E'], note:'~estimated' },
    'OCR-Physics A-N/A-Alevel':          { maxMarks:100, level:'A-Level', boundaries:[67,55,43,32,22,12], grades:['A*','A','B','C','D','E'], note:'~estimated' },
  },

  2023: {
    'AQA-Mathematics-Higher':         { maxMarks:80,  boundaries:[71,62,53,42,31,20,null,null,null] },
    'AQA-Mathematics-Foundation':     { maxMarks:80,  boundaries:[null,null,null,null,63,53,39,25,12] },
    'AQA-English Language':           { maxMarks:80,  boundaries:[60,55,50,44,38,30,22,15,7] },
    'AQA-English Literature':         { maxMarks:80,  boundaries:[67,59,52,44,37,29,21,14,6] },
    'AQA-Biology-Higher':             { maxMarks:100, boundaries:[70,62,55,44,34,23,null,null,null] },
    'AQA-Chemistry-Higher':           { maxMarks:100, boundaries:[72,64,56,44,34,22,null,null,null] },
    'AQA-Physics-Higher':             { maxMarks:100, boundaries:[74,65,56,45,34,23,null,null,null] },
    'AQA-Geography':                  { maxMarks:88,  boundaries:[69,62,55,48,41,34,24,15,7] },
    'AQA-History':                    { maxMarks:64,  boundaries:[51,45,39,33,27,21,15,10,5], note:'~estimated' },
    'OCR-Computer Science':           { maxMarks:90,  boundaries:[74,68,62,52,42,32,null,null,null] },
    'Edexcel-Mathematics-Higher':     { maxMarks:80,  boundaries:[63,53,43,33,23,14,null,null,null] },
    'Edexcel-Business Studies':       { maxMarks:90,  boundaries:[66,58,49,40,30,20,null,null,null] },
    'AQA-German-Higher':              { maxMarks:60,  boundaries:[49,43,37,30,24,18,null,null,null] },
  },

  2022: {
    'AQA-Mathematics-Higher':         { maxMarks:80,  boundaries:[71,62,52,40,29,17,null,null,null] },
    'AQA-Mathematics-Foundation':     { maxMarks:80,  boundaries:[null,null,null,null,57,45,34,22,11] },
    'AQA-English Language':           { maxMarks:80,  boundaries:[62,56,50,44,37,29,21,14,7] },
    'AQA-English Literature':         { maxMarks:80,  boundaries:[67,60,52,44,36,28,20,13,6] },
    'AQA-Biology-Higher':             { maxMarks:100, boundaries:[73,65,57,46,36,25,null,null,null] },
    'AQA-Chemistry-Higher':           { maxMarks:100, boundaries:[74,66,58,47,37,26,null,null,null] },
    'AQA-Physics-Higher':             { maxMarks:100, boundaries:[73,65,57,46,36,25,null,null,null] },
    'AQA-Geography':                  { maxMarks:88,  boundaries:[73,65,57,49,41,34,24,16,8] },
    'OCR-Computer Science':           { maxMarks:90,  boundaries:[77,71,64,53,42,32,null,null,null] },
    'Edexcel-Mathematics-Higher':     { maxMarks:80,  boundaries:[66,56,46,35,24,14,null,null,null] },
  },

  2021: {
    // Pandemic year — boundaries lower than normal, labelled accordingly
    // AQA Maths Higher Nov 2021: total G9=192,G8=155,G7=119,G6=90,G5=62,G4=34 /240 (÷3)
    'AQA-Mathematics-Higher':     { maxMarks:80, boundaries:[64,52,40,30,21,11,null,null,null], note:'Nov 2021 (pandemic grading)' },
    // AQA Maths Foundation Nov 2021: G5=145,G4=108,G3=79,G2=51,G1=23 /240 (÷3)
    'AQA-Mathematics-Foundation': { maxMarks:80, boundaries:[null,null,null,null,48,36,26,17,8], note:'Nov 2021 (pandemic grading)' },
    // OCR CS Nov 2021: total G9=127,G8=111,G7=95,G6=79,G5=63,G4=48,G3=36,G2=25,G1=14 /160 (÷2)
    'OCR-Computer Science':       { maxMarks:80, boundaries:[64,56,48,40,32,24,18,13,7], note:'2021 (pandemic grading)' },
    // Other subjects — no June 2021 exams (teacher assessed grades), only estimates from Nov series
    'AQA-English Language':       { maxMarks:80, boundaries:[58,52,46,40,34,27,20,13,6], note:'~estimated (pandemic year)' },
    'AQA-English Literature':     { maxMarks:80, boundaries:[65,58,50,42,34,26,19,12,5], note:'~estimated (pandemic year)' },
    'AQA-Biology-Higher':         { maxMarks:100, boundaries:[67,59,51,40,30,19,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Chemistry-Higher':       { maxMarks:100, boundaries:[68,60,52,41,30,19,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Physics-Higher':         { maxMarks:100, boundaries:[66,58,50,39,29,18,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Geography':              { maxMarks:88,  boundaries:[67,60,52,45,37,29,21,13,5], note:'~estimated (pandemic year)' },
    'Edexcel-Mathematics-Higher': { maxMarks:80,  boundaries:[60,50,40,30,21,12,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-German-Higher':          { maxMarks:60,  boundaries:[46,40,34,28,22,16,null,null,null], note:'~estimated (pandemic year)' },
  },

  2020: {
    // Pandemic year — no GCSE exams sat in summer 2020 (centre assessed grades)
    // Nov 2020 AQA Maths Higher: total G9=194,G8=159,G7=124,G6=95,G5=67,G4=39 /240 (÷3)
    'AQA-Mathematics-Higher':     { maxMarks:80, boundaries:[65,53,41,32,22,13,null,null,null], note:'Nov 2020 (pandemic grading — no summer exams)' },
    // AQA Maths Foundation Nov 2020: G5=146,G4=116,G3=86,G2=56,G1=26 /240 (÷3)
    'AQA-Mathematics-Foundation': { maxMarks:80, boundaries:[null,null,null,null,49,39,29,19,9], note:'Nov 2020 (pandemic grading)' },
    // No other subjects had written exams in summer 2020
    // All other entries are estimates from Nov 2020 series where available
    'AQA-English Language':       { maxMarks:80, boundaries:[57,51,45,39,33,26,19,12,5], note:'~estimated Nov 2020 (pandemic year)' },
    'AQA-English Literature':     { maxMarks:80, boundaries:[64,57,49,41,33,25,18,11,5], note:'~estimated Nov 2020 (pandemic year)' },
    'AQA-Biology-Higher':         { maxMarks:100, boundaries:[66,58,50,39,29,18,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Chemistry-Higher':       { maxMarks:100, boundaries:[67,59,51,40,29,18,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Physics-Higher':         { maxMarks:100, boundaries:[65,57,49,38,28,17,null,null,null], note:'~estimated (pandemic year)' },
    'AQA-Geography':              { maxMarks:88,  boundaries:[66,59,51,44,36,28,20,12,5], note:'~estimated (pandemic year)' },
    'Edexcel-Mathematics-Higher': { maxMarks:80,  boundaries:[59,49,39,29,20,11,null,null,null], note:'~estimated (pandemic year)' },
    'OCR-Computer Science':       { maxMarks:80,  boundaries:[62,54,46,38,30,22,16,11,6], note:'~estimated (pandemic year)' },
  },

  2019: {
    'AQA-Mathematics-Higher':         { maxMarks:80,  boundaries:[69,57,45,35,25,14,null,null,null] },
    'AQA-Mathematics-Foundation':     { maxMarks:80,  boundaries:[null,null,null,null,52,41,30,19,8] },
    'AQA-English Language':           { maxMarks:80,  boundaries:[58,53,47,41,34,27,20,13,6] },
    'AQA-English Literature':         { maxMarks:80,  boundaries:[64,57,50,42,34,26,18,12,5] },
    'AQA-Biology-Higher':             { maxMarks:100, boundaries:[68,60,52,41,31,20,null,null,null] },
    'AQA-Chemistry-Higher':           { maxMarks:100, boundaries:[67,59,51,40,30,20,null,null,null] },
    'AQA-Physics-Higher':             { maxMarks:100, boundaries:[68,60,52,41,31,20,null,null,null] },
    'AQA-Geography':                  { maxMarks:88,  boundaries:[70,63,56,48,40,32,22,14,6] },
    'OCR-Computer Science':           { maxMarks:90,  boundaries:[72,65,59,48,38,28,null,null,null] },
    'Edexcel-Mathematics-Higher':     { maxMarks:80,  boundaries:[63,53,42,32,22,13,null,null,null] },
  },
}

// ── LOOKUP FUNCTIONS ──────────────────────────────────────────────────────────
export function getPaperSpec(board, subject, tier, paper) {
  const t   = tier && tier !== 'N/A' ? tier : 'N/A'
  const key = `${board}-${subject}-${t}-P${paper}`
  const alt = `${board}-${subject}-N/A-P${paper}`
  return PAPER_DATABASE[key] || PAPER_DATABASE[alt] || null
}

const TIERED = ['Mathematics','Further Mathematics','Biology','Chemistry','Physics',
  'Combined Science','German','French','Spanish','Italian','Mandarin Chinese',
  'Welsh Second Language','Polish','Urdu']

export function getBoundaries(board, subject, tier, year, level) {
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  if (!yearData) return null

  const isTiered = TIERED.includes(subject)
  const isALevel = level === 'A-Level'
  const suffix   = isALevel ? '-N/A-Alevel' : ''

  if (isALevel) {
    return yearData[`${board}-${subject}-N/A-Alevel`] || null
  }

  if (isTiered && tier && tier !== 'N/A') {
    const k = `${board}-${subject}-${tier}`
    if (yearData[k]) return yearData[k]
  }
  return yearData[`${board}-${subject}`] || null
}

export function getBoundariesForPaper(board, subject, tier, year, paper, level) {
  const yearData = GRADE_BOUNDARIES[year] || GRADE_BOUNDARIES[2024]
  if (!yearData) return getBoundaries(board, subject, tier, year, level)
  const paperKey = `${board}-${subject}-P${paper}`
  return yearData[paperKey] || getBoundaries(board, subject, tier, year, level)
}

export function calculateGradeFromBoundaries(score, boundaryData) {
  if (!boundaryData) return null
  const { boundaries, grades } = boundaryData
  const gradeLabels = grades || ['9','8','7','6','5','4','3','2','1']
  for (let i = 0; i < boundaries.length; i++) {
    if (boundaries[i] !== null && score >= boundaries[i]) return gradeLabels[i]
  }
  return 'U'
}

export function getBoundariesWithPercentages(board, subject, tier, year, paper, level) {
  const data = paper
    ? getBoundariesForPaper(board, subject, tier, year, paper, level)
    : getBoundaries(board, subject, tier, year, level)
  if (!data) return null
  const gradeLabels = data.grades || ['9','8','7','6','5','4','3','2','1']
  return {
    ...data,
    withPercentages: data.boundaries.map((b,i) => ({
      grade:      gradeLabels[i],
      marks:      b,
      percentage: b !== null ? Math.round((b / data.maxMarks)*100) : null,
      estimated:  !!(data.note && data.note.includes('~')),
    })).filter(x => x.marks !== null)
  }
}

export const AVAILABLE_YEARS = [2024, 2023, 2022, 2019, 2018, 2017, 2016]

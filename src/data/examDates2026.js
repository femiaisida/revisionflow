// src/data/examDates2026.js
// 2026 GCSE exam dates - all major UK boards
// Source: Published timetables. Users can override any date.

export const TIERED_SUBJECTS = [
  'Mathematics', 'Biology', 'Chemistry', 'Physics', 'Combined Science',
  'French', 'German', 'Spanish', 'Mandarin', 'Welsh', 'Further Mathematics',
]

export function isTiered(subject) {
  return TIERED_SUBJECTS.includes(subject)
}

// Format: { board, subject, tier, paper, paperName, date }
// date: 'YYYY-MM-DD'
export const EXAM_DATES_2026 = [
  // ── AQA ──────────────────────────────────────────────────────────────────
  // Mathematics
  { board:'AQA', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator',  date:'2026-05-14' },
  { board:'AQA', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',       date:'2026-06-03' },
  { board:'AQA', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',       date:'2026-06-10' },
  { board:'AQA', subject:'Mathematics', tier:'Foundation', paper:1, paperName:'Non-Calculator',  date:'2026-05-14' },
  { board:'AQA', subject:'Mathematics', tier:'Foundation', paper:2, paperName:'Calculator',       date:'2026-06-03' },
  { board:'AQA', subject:'Mathematics', tier:'Foundation', paper:3, paperName:'Calculator',       date:'2026-06-10' },
  // Further Mathematics
  { board:'AQA', subject:'Further Mathematics', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-06-08' },
  { board:'AQA', subject:'Further Mathematics', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-15' },
  // English Language
  { board:'AQA', subject:'English Language', tier:'N/A', paper:1, paperName:'Explorations in Creative Reading and Writing', date:'2026-05-21' },
  { board:'AQA', subject:'English Language', tier:'N/A', paper:2, paperName:'Writers\' Viewpoints and Perspectives',         date:'2026-06-05' },
  // English Literature
  { board:'AQA', subject:'English Literature', tier:'N/A', paper:1, paperName:'Shakespeare and the 19th-Century Novel', date:'2026-05-11' },
  { board:'AQA', subject:'English Literature', tier:'N/A', paper:2, paperName:'Modern Texts and Poetry',                date:'2026-05-19' },
  // Biology (Separate)
  { board:'AQA', subject:'Biology', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'AQA', subject:'Biology', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'AQA', subject:'Biology', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'AQA', subject:'Biology', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-08' },
  // Chemistry (Separate)
  { board:'AQA', subject:'Chemistry', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'AQA', subject:'Chemistry', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'AQA', subject:'Chemistry', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'AQA', subject:'Chemistry', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-12' },
  // Physics (Separate)
  { board:'AQA', subject:'Physics', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'AQA', subject:'Physics', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-15' },
  { board:'AQA', subject:'Physics', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'AQA', subject:'Physics', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-15' },
  // Combined Science (Trilogy)
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:1, paperName:'Biology 1',   date:'2026-05-12' },
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:2, paperName:'Chemistry 1', date:'2026-05-18' },
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:3, paperName:'Physics 1',   date:'2026-06-02' },
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:4, paperName:'Biology 2',   date:'2026-06-08' },
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:5, paperName:'Chemistry 2', date:'2026-06-12' },
  { board:'AQA', subject:'Combined Science', tier:'Higher',     paper:6, paperName:'Physics 2',   date:'2026-06-15' },
  // Geography
  { board:'AQA', subject:'Geography', tier:'N/A', paper:1, paperName:'Living with the Physical Environment', date:'2026-05-13' },
  { board:'AQA', subject:'Geography', tier:'N/A', paper:2, paperName:'Challenges in the Human Environment',  date:'2026-06-03' },
  { board:'AQA', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Applications',            date:'2026-06-11' },
  // History
  { board:'AQA', subject:'History', tier:'N/A', paper:1, paperName:'Understanding the Modern World', date:'2026-05-15' },
  { board:'AQA', subject:'History', tier:'N/A', paper:2, paperName:'Shaping the Nation',              date:'2026-06-09' },
  // German
  { board:'AQA', subject:'German', tier:'Higher',     paper:1, paperName:'Listening',  date:'2026-05-07' },
  { board:'AQA', subject:'German', tier:'Higher',     paper:2, paperName:'Speaking',   date:'2026-04-22' },
  { board:'AQA', subject:'German', tier:'Higher',     paper:3, paperName:'Reading',    date:'2026-05-07' },
  { board:'AQA', subject:'German', tier:'Higher',     paper:4, paperName:'Writing',    date:'2026-05-14' },
  { board:'AQA', subject:'German', tier:'Foundation', paper:1, paperName:'Listening',  date:'2026-05-07' },
  { board:'AQA', subject:'German', tier:'Foundation', paper:2, paperName:'Speaking',   date:'2026-04-22' },
  { board:'AQA', subject:'German', tier:'Foundation', paper:3, paperName:'Reading',    date:'2026-05-07' },
  { board:'AQA', subject:'German', tier:'Foundation', paper:4, paperName:'Writing',    date:'2026-05-14' },
  // French
  { board:'AQA', subject:'French', tier:'Higher',     paper:1, paperName:'Listening', date:'2026-05-06' },
  { board:'AQA', subject:'French', tier:'Higher',     paper:2, paperName:'Speaking',  date:'2026-04-21' },
  { board:'AQA', subject:'French', tier:'Higher',     paper:3, paperName:'Reading',   date:'2026-05-06' },
  { board:'AQA', subject:'French', tier:'Higher',     paper:4, paperName:'Writing',   date:'2026-05-13' },
  // Spanish
  { board:'AQA', subject:'Spanish', tier:'Higher',     paper:1, paperName:'Listening', date:'2026-05-08' },
  { board:'AQA', subject:'Spanish', tier:'Higher',     paper:2, paperName:'Speaking',  date:'2026-04-23' },
  { board:'AQA', subject:'Spanish', tier:'Higher',     paper:3, paperName:'Reading',   date:'2026-05-08' },
  { board:'AQA', subject:'Spanish', tier:'Higher',     paper:4, paperName:'Writing',   date:'2026-05-15' },
  // Religious Studies
  { board:'AQA', subject:'Religious Studies', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-20' },
  { board:'AQA', subject:'Religious Studies', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-04' },
  // Computer Science (OCR)
  { board:'OCR', subject:'Computer Science', tier:'N/A', paper:1, paperName:'Computer Systems',        date:'2026-05-13' },
  { board:'OCR', subject:'Computer Science', tier:'N/A', paper:2, paperName:'Computational Thinking',  date:'2026-05-19' },
  // Business Studies (Edexcel)
  { board:'Edexcel', subject:'Business Studies', tier:'N/A', paper:1, paperName:'Investigating Small Business', date:'2026-05-11' },
  { board:'Edexcel', subject:'Business Studies', tier:'N/A', paper:2, paperName:'Building a Business',          date:'2026-05-21' },
  // ── Edexcel ───────────────────────────────────────────────────────────────
  { board:'Edexcel', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'Edexcel', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'Edexcel', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'Edexcel', subject:'Mathematics', tier:'Foundation', paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'Edexcel', subject:'Mathematics', tier:'Foundation', paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'Edexcel', subject:'Mathematics', tier:'Foundation', paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'Edexcel', subject:'English Language', tier:'N/A', paper:1, paperName:'Fiction and Imaginative Writing',      date:'2026-05-21' },
  { board:'Edexcel', subject:'English Language', tier:'N/A', paper:2, paperName:'Non-Fiction and Transactional Writing',date:'2026-06-05' },
  { board:'Edexcel', subject:'English Literature', tier:'N/A', paper:1, paperName:'Shakespeare and Post-1914 Literature', date:'2026-05-11' },
  { board:'Edexcel', subject:'English Literature', tier:'N/A', paper:2, paperName:'19th-Century Novel and Poetry',        date:'2026-05-19' },
  { board:'Edexcel', subject:'History',   tier:'N/A', paper:1, paperName:'Thematic Study and Historic Environment', date:'2026-05-15' },
  { board:'Edexcel', subject:'History',   tier:'N/A', paper:2, paperName:'British Depth Study',                     date:'2026-05-22' },
  { board:'Edexcel', subject:'History',   tier:'N/A', paper:3, paperName:'Modern Depth Study',                      date:'2026-06-09' },
  { board:'Edexcel', subject:'Geography', tier:'N/A', paper:1, paperName:'The Physical Environment', date:'2026-05-13' },
  { board:'Edexcel', subject:'Geography', tier:'N/A', paper:2, paperName:'The Human Environment',    date:'2026-06-03' },
  { board:'Edexcel', subject:'Geography', tier:'N/A', paper:3, paperName:'People and Environment',   date:'2026-06-11' },
  // ── OCR ──────────────────────────────────────────────────────────────────
  { board:'OCR', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'OCR', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'OCR', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'OCR', subject:'English Language', tier:'N/A', paper:1, paperName:'Communicating Information and Ideas',  date:'2026-05-21' },
  { board:'OCR', subject:'English Language', tier:'N/A', paper:2, paperName:'Exploring Effects and Impact',         date:'2026-06-05' },
  { board:'OCR', subject:'English Literature', tier:'N/A', paper:1, paperName:'Exploring Modern and Literary Heritage Texts', date:'2026-05-11' },
  { board:'OCR', subject:'English Literature', tier:'N/A', paper:2, paperName:'Exploring Poetry and Shakespeare',              date:'2026-05-19' },
  { board:'OCR', subject:'History',   tier:'N/A', paper:1, paperName:'History Around Us',   date:'2026-05-15' },
  { board:'OCR', subject:'History',   tier:'N/A', paper:2, paperName:'British Depth Study', date:'2026-06-09' },
  { board:'OCR', subject:'Geography', tier:'N/A', paper:1, paperName:'Our Natural World',   date:'2026-05-13' },
  { board:'OCR', subject:'Geography', tier:'N/A', paper:2, paperName:'People and Society',  date:'2026-06-03' },
  { board:'OCR', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Debates',date:'2026-06-11' },
]

export function getExamDates(subject, board, tier) {
  return EXAM_DATES_2026.filter(e =>
    e.subject === subject &&
    e.board === board &&
    (tier === 'N/A' || !tier || e.tier === tier || e.tier === 'N/A')
  )
}

export function getExamDate(subject, board, tier, paper) {
  const match = EXAM_DATES_2026.find(e =>
    e.subject === subject &&
    e.board === board &&
    e.paper === paper &&
    (tier === 'N/A' || !tier || e.tier === tier || e.tier === 'N/A')
  )
  return match?.date || null
}

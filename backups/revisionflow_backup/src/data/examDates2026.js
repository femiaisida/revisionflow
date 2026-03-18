// src/data/examDates2026.js
// 2026 GCSE and A-Level exam dates — all major UK boards
// Sources: AQA, Edexcel, OCR, WJEC, CCEA published timetables
// Note: Some dates are confirmed, others estimated from typical timetabling patterns

export const TIERED_SUBJECTS = [
  'Mathematics','Biology','Chemistry','Physics','Combined Science',
  'French','German','Spanish','Italian','Mandarin Chinese','Polish','Urdu',
  'Welsh Second Language','Further Mathematics',
]

export function isTiered(subject) {
  return TIERED_SUBJECTS.includes(subject)
}

// ── GCSE 2026 EXAM DATES ──────────────────────────────────────────────────────
const GCSE_2026 = [
  // ── AQA GCSE ─────────────────────────────────────────────────────────────
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator',  date:'2026-05-14' },
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',       date:'2026-06-03' },
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',       date:'2026-06-10' },
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:1, paperName:'Non-Calculator',  date:'2026-05-14' },
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:2, paperName:'Calculator',       date:'2026-06-03' },
  { board:'AQA', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:3, paperName:'Calculator',       date:'2026-06-10' },
  { board:'AQA', level:'GCSE', subject:'Further Mathematics', tier:'N/A', paper:1, paperName:'Paper 1',         date:'2026-06-08' },
  { board:'AQA', level:'GCSE', subject:'Further Mathematics', tier:'N/A', paper:2, paperName:'Paper 2',         date:'2026-06-15' },
  { board:'AQA', level:'GCSE', subject:'English Language', tier:'N/A', paper:1, paperName:'Explorations in Creative Reading and Writing', date:'2026-05-21' },
  { board:'AQA', level:'GCSE', subject:'English Language', tier:'N/A', paper:2, paperName:"Writers' Viewpoints and Perspectives",         date:'2026-06-05' },
  { board:'AQA', level:'GCSE', subject:'English Literature', tier:'N/A', paper:1, paperName:'Shakespeare and the 19th-Century Novel',     date:'2026-05-11' },
  { board:'AQA', level:'GCSE', subject:'English Literature', tier:'N/A', paper:2, paperName:'Modern Texts and Poetry',                    date:'2026-05-19' },
  { board:'AQA', level:'GCSE', subject:'Biology', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'AQA', level:'GCSE', subject:'Biology', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'AQA', level:'GCSE', subject:'Biology', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'AQA', level:'GCSE', subject:'Biology', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'AQA', level:'GCSE', subject:'Chemistry', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'AQA', level:'GCSE', subject:'Chemistry', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'AQA', level:'GCSE', subject:'Chemistry', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'AQA', level:'GCSE', subject:'Chemistry', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'AQA', level:'GCSE', subject:'Physics', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'AQA', level:'GCSE', subject:'Physics', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-15' },
  { board:'AQA', level:'GCSE', subject:'Physics', tier:'Foundation', paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'AQA', level:'GCSE', subject:'Physics', tier:'Foundation', paper:2, paperName:'Paper 2', date:'2026-06-15' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:1, paperName:'Biology 1',   date:'2026-05-12' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:2, paperName:'Chemistry 1', date:'2026-05-18' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:3, paperName:'Physics 1',   date:'2026-06-02' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:4, paperName:'Biology 2',   date:'2026-06-08' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:5, paperName:'Chemistry 2', date:'2026-06-12' },
  { board:'AQA', level:'GCSE', subject:'Combined Science', tier:'Higher',     paper:6, paperName:'Physics 2',   date:'2026-06-15' },
  { board:'AQA', level:'GCSE', subject:'Geography', tier:'N/A', paper:1, paperName:'Living with the Physical Environment', date:'2026-05-13' },
  { board:'AQA', level:'GCSE', subject:'Geography', tier:'N/A', paper:2, paperName:'Challenges in the Human Environment',  date:'2026-06-03' },
  { board:'AQA', level:'GCSE', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Applications',            date:'2026-06-11' },
  { board:'AQA', level:'GCSE', subject:'History', tier:'N/A', paper:1, paperName:'Understanding the Modern World', date:'2026-05-15' },
  { board:'AQA', level:'GCSE', subject:'History', tier:'N/A', paper:2, paperName:'Shaping the Nation',              date:'2026-06-09' },
  { board:'AQA', level:'GCSE', subject:'German', tier:'Higher',     paper:1, paperName:'Listening',  date:'2026-05-07' },
  { board:'AQA', level:'GCSE', subject:'German', tier:'Higher',     paper:2, paperName:'Speaking',   date:'2026-04-22' },
  { board:'AQA', level:'GCSE', subject:'German', tier:'Higher',     paper:3, paperName:'Reading',    date:'2026-05-07' },
  { board:'AQA', level:'GCSE', subject:'German', tier:'Higher',     paper:4, paperName:'Writing',    date:'2026-05-14' },
  { board:'AQA', level:'GCSE', subject:'French', tier:'Higher',     paper:1, paperName:'Listening',  date:'2026-05-06' },
  { board:'AQA', level:'GCSE', subject:'French', tier:'Higher',     paper:2, paperName:'Speaking',   date:'2026-04-21' },
  { board:'AQA', level:'GCSE', subject:'French', tier:'Higher',     paper:3, paperName:'Reading',    date:'2026-05-06' },
  { board:'AQA', level:'GCSE', subject:'French', tier:'Higher',     paper:4, paperName:'Writing',    date:'2026-05-13' },
  { board:'AQA', level:'GCSE', subject:'Spanish', tier:'Higher',    paper:1, paperName:'Listening',  date:'2026-05-08' },
  { board:'AQA', level:'GCSE', subject:'Spanish', tier:'Higher',    paper:2, paperName:'Speaking',   date:'2026-04-23' },
  { board:'AQA', level:'GCSE', subject:'Spanish', tier:'Higher',    paper:3, paperName:'Reading',    date:'2026-05-08' },
  { board:'AQA', level:'GCSE', subject:'Spanish', tier:'Higher',    paper:4, paperName:'Writing',    date:'2026-05-15' },
  { board:'AQA', level:'GCSE', subject:'Religious Studies', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-20' },
  { board:'AQA', level:'GCSE', subject:'Religious Studies', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-04' },
  { board:'AQA', level:'GCSE', subject:'Sociology', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'AQA', level:'GCSE', subject:'Sociology', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-04' },
  { board:'AQA', level:'GCSE', subject:'Psychology', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-15' },
  { board:'AQA', level:'GCSE', subject:'Psychology', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-10' },
  { board:'AQA', level:'GCSE', subject:'Media Studies', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-20' },
  { board:'AQA', level:'GCSE', subject:'Media Studies', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-09' },
  // Business Studies (AQA no longer offered — Edexcel/OCR main)
  // ── OCR GCSE ────────────────────────────────────────────────────────────
  { board:'OCR', level:'GCSE', subject:'Computer Science', tier:'N/A', paper:1, paperName:'Computer Systems',        date:'2026-05-13' },
  { board:'OCR', level:'GCSE', subject:'Computer Science', tier:'N/A', paper:2, paperName:'Computational Thinking',  date:'2026-05-19' },
  { board:'OCR', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'OCR', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'OCR', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'OCR', level:'GCSE', subject:'Geography', tier:'N/A', paper:1, paperName:'Our Natural World',    date:'2026-05-13' },
  { board:'OCR', level:'GCSE', subject:'Geography', tier:'N/A', paper:2, paperName:'People and Society',   date:'2026-06-03' },
  { board:'OCR', level:'GCSE', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Debates', date:'2026-06-11' },
  { board:'OCR', level:'GCSE', subject:'History', tier:'N/A', paper:1, paperName:'History Around Us',   date:'2026-05-15' },
  { board:'OCR', level:'GCSE', subject:'History', tier:'N/A', paper:2, paperName:'British Depth Study', date:'2026-06-09' },
  { board:'OCR', level:'GCSE', subject:'English Language', tier:'N/A', paper:1, paperName:'Communicating Information and Ideas',  date:'2026-05-21' },
  { board:'OCR', level:'GCSE', subject:'English Language', tier:'N/A', paper:2, paperName:'Exploring Effects and Impact',         date:'2026-06-05' },
  { board:'OCR', level:'GCSE', subject:'English Literature', tier:'N/A', paper:1, paperName:'Exploring Modern and Literary Heritage Texts', date:'2026-05-11' },
  { board:'OCR', level:'GCSE', subject:'English Literature', tier:'N/A', paper:2, paperName:'Exploring Poetry and Shakespeare',              date:'2026-05-19' },
  { board:'OCR', level:'GCSE', subject:'Biology', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'OCR', level:'GCSE', subject:'Biology', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'OCR', level:'GCSE', subject:'Chemistry', tier:'Higher',   paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'OCR', level:'GCSE', subject:'Chemistry', tier:'Higher',   paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'OCR', level:'GCSE', subject:'Physics', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'OCR', level:'GCSE', subject:'Physics', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-15' },
  // ── EDEXCEL GCSE ─────────────────────────────────────────────────────────
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'Edexcel', level:'GCSE', subject:'Mathematics', tier:'Foundation', paper:3, paperName:'Calculator',     date:'2026-06-10' },
  { board:'Edexcel', level:'GCSE', subject:'English Language', tier:'N/A', paper:1, paperName:'Fiction and Imaginative Writing',       date:'2026-05-21' },
  { board:'Edexcel', level:'GCSE', subject:'English Language', tier:'N/A', paper:2, paperName:'Non-Fiction and Transactional Writing', date:'2026-06-05' },
  { board:'Edexcel', level:'GCSE', subject:'English Literature', tier:'N/A', paper:1, paperName:'Shakespeare and Post-1914 Literature', date:'2026-05-11' },
  { board:'Edexcel', level:'GCSE', subject:'English Literature', tier:'N/A', paper:2, paperName:'19th-Century Novel and Poetry',        date:'2026-05-19' },
  { board:'Edexcel', level:'GCSE', subject:'Business Studies', tier:'N/A', paper:1, paperName:'Investigating Small Business', date:'2026-05-11' },
  { board:'Edexcel', level:'GCSE', subject:'Business Studies', tier:'N/A', paper:2, paperName:'Building a Business',          date:'2026-05-21' },
  { board:'Edexcel', level:'GCSE', subject:'Geography', tier:'N/A', paper:1, paperName:'The Physical Environment', date:'2026-05-13' },
  { board:'Edexcel', level:'GCSE', subject:'Geography', tier:'N/A', paper:2, paperName:'The Human Environment',    date:'2026-06-03' },
  { board:'Edexcel', level:'GCSE', subject:'Geography', tier:'N/A', paper:3, paperName:'People and Environment',   date:'2026-06-11' },
  { board:'Edexcel', level:'GCSE', subject:'History', tier:'N/A', paper:1, paperName:'Thematic Study and Historic Environment', date:'2026-05-15' },
  { board:'Edexcel', level:'GCSE', subject:'History', tier:'N/A', paper:2, paperName:'British Depth Study',                     date:'2026-05-22' },
  { board:'Edexcel', level:'GCSE', subject:'History', tier:'N/A', paper:3, paperName:'Modern Depth Study',                      date:'2026-06-09' },
  { board:'Edexcel', level:'GCSE', subject:'Biology', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'Edexcel', level:'GCSE', subject:'Biology', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'Edexcel', level:'GCSE', subject:'Chemistry', tier:'Higher',   paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'Edexcel', level:'GCSE', subject:'Chemistry', tier:'Higher',   paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'Edexcel', level:'GCSE', subject:'Physics', tier:'Higher',     paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'Edexcel', level:'GCSE', subject:'Physics', tier:'Higher',     paper:2, paperName:'Paper 2', date:'2026-06-15' },
  { board:'Edexcel', level:'GCSE', subject:'Religious Studies', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-20' },
  { board:'Edexcel', level:'GCSE', subject:'Religious Studies', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-04' },
  { board:'Edexcel', level:'GCSE', subject:'Economics', tier:'N/A', paper:1, paperName:'Markets in Action',     date:'2026-05-18' },
  { board:'Edexcel', level:'GCSE', subject:'Economics', tier:'N/A', paper:2, paperName:'The National and Global Economy', date:'2026-06-09' },
  // ── WJEC GCSE ────────────────────────────────────────────────────────────
  { board:'WJEC', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:1, paperName:'Non-Calculator', date:'2026-05-14' },
  { board:'WJEC', level:'GCSE', subject:'Mathematics', tier:'Higher',     paper:2, paperName:'Calculator',     date:'2026-06-03' },
  { board:'WJEC', level:'GCSE', subject:'English Language', tier:'N/A', paper:1, paperName:'Spoken Language and Reading', date:'2026-05-21' },
  { board:'WJEC', level:'GCSE', subject:'English Language', tier:'N/A', paper:2, paperName:'Writing',                    date:'2026-06-05' },
  { board:'WJEC', level:'GCSE', subject:'Biology', tier:'Higher',   paper:1, paperName:'Paper 1', date:'2026-05-12' },
  { board:'WJEC', level:'GCSE', subject:'Biology', tier:'Higher',   paper:2, paperName:'Paper 2', date:'2026-06-08' },
  { board:'WJEC', level:'GCSE', subject:'Chemistry', tier:'Higher', paper:1, paperName:'Paper 1', date:'2026-05-18' },
  { board:'WJEC', level:'GCSE', subject:'Chemistry', tier:'Higher', paper:2, paperName:'Paper 2', date:'2026-06-12' },
  { board:'WJEC', level:'GCSE', subject:'Physics', tier:'Higher',   paper:1, paperName:'Paper 1', date:'2026-06-02' },
  { board:'WJEC', level:'GCSE', subject:'Physics', tier:'Higher',   paper:2, paperName:'Paper 2', date:'2026-06-15' },
  { board:'WJEC', level:'GCSE', subject:'Geography', tier:'N/A', paper:1, paperName:'Changing Landscapes', date:'2026-05-13' },
  { board:'WJEC', level:'GCSE', subject:'Geography', tier:'N/A', paper:2, paperName:'Changing Places',     date:'2026-06-03' },
  { board:'WJEC', level:'GCSE', subject:'Geography', tier:'N/A', paper:3, paperName:'Applied Fieldwork',   date:'2026-06-11' },
  { board:'WJEC', level:'GCSE', subject:'History', tier:'N/A', paper:1, paperName:'Changes in Health and Medicine', date:'2026-05-15' },
  { board:'WJEC', level:'GCSE', subject:'History', tier:'N/A', paper:2, paperName:'Power and Protest',              date:'2026-06-09' },
  { board:'WJEC', level:'GCSE', subject:'French', tier:'Higher', paper:1, paperName:'Listening', date:'2026-05-06' },
  { board:'WJEC', level:'GCSE', subject:'French', tier:'Higher', paper:2, paperName:'Reading',   date:'2026-05-13' },
  { board:'WJEC', level:'GCSE', subject:'French', tier:'Higher', paper:3, paperName:'Writing',   date:'2026-05-20' },
  { board:'WJEC', level:'GCSE', subject:'German', tier:'Higher', paper:1, paperName:'Listening', date:'2026-05-07' },
  { board:'WJEC', level:'GCSE', subject:'German', tier:'Higher', paper:2, paperName:'Reading',   date:'2026-05-14' },
  { board:'WJEC', level:'GCSE', subject:'German', tier:'Higher', paper:3, paperName:'Writing',   date:'2026-05-21' },
  // ── CCEA GCSE ────────────────────────────────────────────────────────────
  { board:'CCEA', level:'GCSE', subject:'Mathematics', tier:'Higher',   paper:1, paperName:'Module T1', date:'2026-05-14' },
  { board:'CCEA', level:'GCSE', subject:'Mathematics', tier:'Higher',   paper:2, paperName:'Module T2', date:'2026-06-03' },
  { board:'CCEA', level:'GCSE', subject:'English Language', tier:'N/A', paper:1, paperName:'Writing',  date:'2026-05-21' },
  { board:'CCEA', level:'GCSE', subject:'English Language', tier:'N/A', paper:2, paperName:'Reading',  date:'2026-06-05' },
  { board:'CCEA', level:'GCSE', subject:'Biology', tier:'Higher',   paper:1, paperName:'Unit 1', date:'2026-05-12' },
  { board:'CCEA', level:'GCSE', subject:'Biology', tier:'Higher',   paper:2, paperName:'Unit 2', date:'2026-06-08' },
  { board:'CCEA', level:'GCSE', subject:'Chemistry', tier:'Higher', paper:1, paperName:'Unit 1', date:'2026-05-18' },
  { board:'CCEA', level:'GCSE', subject:'Chemistry', tier:'Higher', paper:2, paperName:'Unit 2', date:'2026-06-12' },
  { board:'CCEA', level:'GCSE', subject:'Physics', tier:'Higher',   paper:1, paperName:'Unit 1', date:'2026-06-02' },
  { board:'CCEA', level:'GCSE', subject:'Physics', tier:'Higher',   paper:2, paperName:'Unit 2', date:'2026-06-15' },
]

// ── A-LEVEL 2026 EXAM DATES ──────────────────────────────────────────────────
// Note: A-Level dates estimated from typical May/June timetabling
// Confirmed dates will be published by each board — check their websites
const ALEVEL_2026 = [
  // AQA A-Level
  { board:'AQA', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:1, paperName:'Pure Mathematics 1',      date:'2026-05-18' },
  { board:'AQA', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:2, paperName:'Pure Mathematics 2',      date:'2026-06-03' },
  { board:'AQA', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:3, paperName:'Statistics and Mechanics', date:'2026-06-11' },
  { board:'AQA', level:'A-Level', subject:'Further Mathematics', tier:'N/A', paper:1, paperName:'Core Pure 1',     date:'2026-05-15' },
  { board:'AQA', level:'A-Level', subject:'Further Mathematics', tier:'N/A', paper:2, paperName:'Core Pure 2',     date:'2026-05-22' },
  { board:'AQA', level:'A-Level', subject:'Further Mathematics', tier:'N/A', paper:3, paperName:'Options',         date:'2026-06-08' },
  { board:'AQA', level:'A-Level', subject:'Biology', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-15' },
  { board:'AQA', level:'A-Level', subject:'Biology', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-03' },
  { board:'AQA', level:'A-Level', subject:'Biology', tier:'N/A', paper:3, paperName:'Paper 3', date:'2026-06-18' },
  { board:'AQA', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-20' },
  { board:'AQA', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-09' },
  { board:'AQA', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:3, paperName:'Paper 3', date:'2026-06-22' },
  { board:'AQA', level:'A-Level', subject:'Physics', tier:'N/A', paper:1, paperName:'Paper 1', date:'2026-05-22' },
  { board:'AQA', level:'A-Level', subject:'Physics', tier:'N/A', paper:2, paperName:'Paper 2', date:'2026-06-11' },
  { board:'AQA', level:'A-Level', subject:'Physics', tier:'N/A', paper:3, paperName:'Paper 3', date:'2026-06-25' },
  { board:'AQA', level:'A-Level', subject:'English Language', tier:'N/A', paper:1, paperName:'Language, the Individual and Society', date:'2026-05-19' },
  { board:'AQA', level:'A-Level', subject:'English Language', tier:'N/A', paper:2, paperName:'Language Diversity and Change',       date:'2026-06-04' },
  { board:'AQA', level:'A-Level', subject:'English Literature A', tier:'N/A', paper:1, paperName:'Love Through the Ages',          date:'2026-05-19' },
  { board:'AQA', level:'A-Level', subject:'English Literature A', tier:'N/A', paper:2, paperName:'Texts in Shared Contexts',       date:'2026-06-12' },
  { board:'AQA', level:'A-Level', subject:'Geography', tier:'N/A', paper:1, paperName:'Physical Geography',   date:'2026-05-20' },
  { board:'AQA', level:'A-Level', subject:'Geography', tier:'N/A', paper:2, paperName:'Human Geography',      date:'2026-06-04' },
  { board:'AQA', level:'A-Level', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Debates', date:'2026-06-17' },
  { board:'AQA', level:'A-Level', subject:'History', tier:'N/A', paper:1, paperName:'Breadth Study',  date:'2026-05-18' },
  { board:'AQA', level:'A-Level', subject:'History', tier:'N/A', paper:2, paperName:'Depth Study',    date:'2026-06-08' },
  { board:'AQA', level:'A-Level', subject:'History', tier:'N/A', paper:3, paperName:'Historical Investigation', date:'2026-06-19' },
  { board:'AQA', level:'A-Level', subject:'Psychology', tier:'N/A', paper:1, paperName:'Introductory Topics', date:'2026-05-18' },
  { board:'AQA', level:'A-Level', subject:'Psychology', tier:'N/A', paper:2, paperName:'Psychology in Context',  date:'2026-06-04' },
  { board:'AQA', level:'A-Level', subject:'Psychology', tier:'N/A', paper:3, paperName:'Issues and Options',     date:'2026-06-16' },
  { board:'AQA', level:'A-Level', subject:'Sociology', tier:'N/A', paper:1, paperName:'Education with Theory and Methods', date:'2026-05-19' },
  { board:'AQA', level:'A-Level', subject:'Sociology', tier:'N/A', paper:2, paperName:'Topics in Sociology',                date:'2026-06-05' },
  { board:'AQA', level:'A-Level', subject:'Sociology', tier:'N/A', paper:3, paperName:'Crime and Deviance',                 date:'2026-06-18' },
  { board:'AQA', level:'A-Level', subject:'Economics', tier:'N/A', paper:1, paperName:'Microeconomics',  date:'2026-05-21' },
  { board:'AQA', level:'A-Level', subject:'Economics', tier:'N/A', paper:2, paperName:'Macroeconomics',  date:'2026-06-09' },
  { board:'AQA', level:'A-Level', subject:'Economics', tier:'N/A', paper:3, paperName:'Economic Principles and Issues', date:'2026-06-22' },
  { board:'AQA', level:'A-Level', subject:'French', tier:'N/A', paper:1, paperName:'Listening, Reading and Writing', date:'2026-05-20' },
  { board:'AQA', level:'A-Level', subject:'French', tier:'N/A', paper:2, paperName:'Writing',                       date:'2026-06-09' },
  { board:'AQA', level:'A-Level', subject:'German', tier:'N/A', paper:1, paperName:'Listening, Reading and Writing', date:'2026-05-21' },
  { board:'AQA', level:'A-Level', subject:'German', tier:'N/A', paper:2, paperName:'Writing',                        date:'2026-06-10' },
  { board:'AQA', level:'A-Level', subject:'Spanish', tier:'N/A', paper:1, paperName:'Listening, Reading and Writing', date:'2026-05-22' },
  { board:'AQA', level:'A-Level', subject:'Spanish', tier:'N/A', paper:2, paperName:'Writing',                        date:'2026-06-11' },
  { board:'AQA', level:'A-Level', subject:'Computer Science', tier:'N/A', paper:1, paperName:'Computer Systems', date:'2026-05-19' },
  { board:'AQA', level:'A-Level', subject:'Computer Science', tier:'N/A', paper:2, paperName:'Algorithms and Programming', date:'2026-06-08' },
  { board:'AQA', level:'A-Level', subject:'Business', tier:'N/A', paper:1, paperName:'Business 1',   date:'2026-05-22' },
  { board:'AQA', level:'A-Level', subject:'Business', tier:'N/A', paper:2, paperName:'Business 2',   date:'2026-06-11' },
  { board:'AQA', level:'A-Level', subject:'Business', tier:'N/A', paper:3, paperName:'Business 3',   date:'2026-06-24' },
  { board:'AQA', level:'A-Level', subject:'Law', tier:'N/A', paper:1, paperName:'The English Legal System and Constitutional Law', date:'2026-05-20' },
  { board:'AQA', level:'A-Level', subject:'Law', tier:'N/A', paper:2, paperName:'Law Making and the Law of Tort',                  date:'2026-06-09' },
  { board:'AQA', level:'A-Level', subject:'Law', tier:'N/A', paper:3, paperName:'Further Law',                                     date:'2026-06-22' },
  { board:'AQA', level:'A-Level', subject:'Religious Studies', tier:'N/A', paper:1, paperName:'Philosophy of Religion', date:'2026-05-21' },
  { board:'AQA', level:'A-Level', subject:'Religious Studies', tier:'N/A', paper:2, paperName:'Ethics',                   date:'2026-06-10' },
  { board:'AQA', level:'A-Level', subject:'Religious Studies', tier:'N/A', paper:3, paperName:'Study of Religion',        date:'2026-06-23' },
  { board:'AQA', level:'A-Level', subject:'Media Studies', tier:'N/A', paper:1, paperName:'Media Products, Industries and Audiences', date:'2026-05-19' },
  { board:'AQA', level:'A-Level', subject:'Media Studies', tier:'N/A', paper:2, paperName:'Media Forms and Products in Depth',         date:'2026-06-08' },
  // Edexcel A-Level
  { board:'Edexcel', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:1, paperName:'Pure Mathematics 1',       date:'2026-05-18' },
  { board:'Edexcel', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:2, paperName:'Pure Mathematics 2',       date:'2026-06-03' },
  { board:'Edexcel', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:3, paperName:'Statistics and Mechanics', date:'2026-06-11' },
  { board:'Edexcel', level:'A-Level', subject:'Further Mathematics', tier:'N/A', paper:1, paperName:'Core Pure 1', date:'2026-05-15' },
  { board:'Edexcel', level:'A-Level', subject:'Further Mathematics', tier:'N/A', paper:2, paperName:'Core Pure 2', date:'2026-05-22' },
  { board:'Edexcel', level:'A-Level', subject:'Biology', tier:'N/A', paper:1, paperName:'The Natural Environment and Species Survival', date:'2026-05-15' },
  { board:'Edexcel', level:'A-Level', subject:'Biology', tier:'N/A', paper:2, paperName:'Energy, Exercise and Coordination',            date:'2026-06-03' },
  { board:'Edexcel', level:'A-Level', subject:'Biology', tier:'N/A', paper:3, paperName:'General and Practical Principles',             date:'2026-06-18' },
  { board:'Edexcel', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:1, paperName:'Advanced Inorganic and Physical Chemistry', date:'2026-05-20' },
  { board:'Edexcel', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:2, paperName:'Advanced Organic and Physical Chemistry',   date:'2026-06-09' },
  { board:'Edexcel', level:'A-Level', subject:'Chemistry', tier:'N/A', paper:3, paperName:'General and Practical Principles',          date:'2026-06-22' },
  { board:'Edexcel', level:'A-Level', subject:'Physics', tier:'N/A', paper:1, paperName:'Advanced Physics 1', date:'2026-05-22' },
  { board:'Edexcel', level:'A-Level', subject:'Physics', tier:'N/A', paper:2, paperName:'Advanced Physics 2', date:'2026-06-11' },
  { board:'Edexcel', level:'A-Level', subject:'Physics', tier:'N/A', paper:3, paperName:'General and Practical Principles', date:'2026-06-25' },
  { board:'Edexcel', level:'A-Level', subject:'Economics A', tier:'N/A', paper:1, paperName:'Markets and Business Behaviour', date:'2026-05-21' },
  { board:'Edexcel', level:'A-Level', subject:'Economics A', tier:'N/A', paper:2, paperName:'The National and Global Economy', date:'2026-06-09' },
  { board:'Edexcel', level:'A-Level', subject:'Economics A', tier:'N/A', paper:3, paperName:'Microeconomics and Macroeconomics', date:'2026-06-22' },
  { board:'Edexcel', level:'A-Level', subject:'Business', tier:'N/A', paper:1, paperName:'Marketing and People',                date:'2026-05-22' },
  { board:'Edexcel', level:'A-Level', subject:'Business', tier:'N/A', paper:2, paperName:'Business Activities, Decisions and Strategy', date:'2026-06-11' },
  { board:'Edexcel', level:'A-Level', subject:'Business', tier:'N/A', paper:3, paperName:'Investigating Business in a Competitive Environment', date:'2026-06-24' },
  { board:'Edexcel', level:'A-Level', subject:'History', tier:'N/A', paper:1, paperName:'Breadth Study', date:'2026-05-18' },
  { board:'Edexcel', level:'A-Level', subject:'History', tier:'N/A', paper:2, paperName:'Depth Study',   date:'2026-06-08' },
  { board:'Edexcel', level:'A-Level', subject:'Geography', tier:'N/A', paper:1, paperName:'Dynamic Landscapes', date:'2026-05-20' },
  { board:'Edexcel', level:'A-Level', subject:'Geography', tier:'N/A', paper:2, paperName:'Dynamic Places',     date:'2026-06-04' },
  { board:'Edexcel', level:'A-Level', subject:'Geography', tier:'N/A', paper:3, paperName:'Synoptic Investigation', date:'2026-06-17' },
  { board:'Edexcel', level:'A-Level', subject:'Psychology', tier:'N/A', paper:1, paperName:'Social and Cognitive Psychology',     date:'2026-05-18' },
  { board:'Edexcel', level:'A-Level', subject:'Psychology', tier:'N/A', paper:2, paperName:'Biological Psychology and Learning',  date:'2026-06-04' },
  { board:'Edexcel', level:'A-Level', subject:'Psychology', tier:'N/A', paper:3, paperName:'Applied Psychology',                  date:'2026-06-16' },
  // OCR A-Level
  { board:'OCR', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:1, paperName:'Pure Mathematics 1',        date:'2026-05-18' },
  { board:'OCR', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:2, paperName:'Pure Mathematics 2',        date:'2026-06-03' },
  { board:'OCR', level:'A-Level', subject:'Mathematics', tier:'N/A', paper:3, paperName:'Statistics and Mechanics',  date:'2026-06-11' },
  { board:'OCR', level:'A-Level', subject:'Computer Science', tier:'N/A', paper:1, paperName:'Computer Systems',           date:'2026-05-19' },
  { board:'OCR', level:'A-Level', subject:'Computer Science', tier:'N/A', paper:2, paperName:'Algorithms and Programming',  date:'2026-06-08' },
  { board:'OCR', level:'A-Level', subject:'Computer Science', tier:'N/A', paper:3, paperName:'Programming Project (NEA)',   date:'2026-04-30' },
  { board:'OCR', level:'A-Level', subject:'Biology A', tier:'N/A', paper:1, paperName:'Biological Processes',      date:'2026-05-15' },
  { board:'OCR', level:'A-Level', subject:'Biology A', tier:'N/A', paper:2, paperName:'Biological Diversity',      date:'2026-06-03' },
  { board:'OCR', level:'A-Level', subject:'Biology A', tier:'N/A', paper:3, paperName:'Unified Biology',           date:'2026-06-18' },
  { board:'OCR', level:'A-Level', subject:'Chemistry A', tier:'N/A', paper:1, paperName:'Periodic Table, Elements and Physical Chemistry', date:'2026-05-20' },
  { board:'OCR', level:'A-Level', subject:'Chemistry A', tier:'N/A', paper:2, paperName:'Synthesis and Analytical Techniques',             date:'2026-06-09' },
  { board:'OCR', level:'A-Level', subject:'Chemistry A', tier:'N/A', paper:3, paperName:'Unified Chemistry',                               date:'2026-06-22' },
  { board:'OCR', level:'A-Level', subject:'Physics A', tier:'N/A', paper:1, paperName:'Modelling Physics',    date:'2026-05-22' },
  { board:'OCR', level:'A-Level', subject:'Physics A', tier:'N/A', paper:2, paperName:'Exploring Physics',    date:'2026-06-11' },
  { board:'OCR', level:'A-Level', subject:'Physics A', tier:'N/A', paper:3, paperName:'Unified Physics',      date:'2026-06-25' },
  { board:'OCR', level:'A-Level', subject:'History', tier:'N/A', paper:1, paperName:'British Period Study and Enquiry', date:'2026-05-18' },
  { board:'OCR', level:'A-Level', subject:'History', tier:'N/A', paper:2, paperName:'Non-British Period Study',           date:'2026-06-08' },
  { board:'OCR', level:'A-Level', subject:'Geography', tier:'N/A', paper:1, paperName:'Physical Systems',    date:'2026-05-20' },
  { board:'OCR', level:'A-Level', subject:'Geography', tier:'N/A', paper:2, paperName:'Human Interactions',  date:'2026-06-04' },
  { board:'OCR', level:'A-Level', subject:'Geography', tier:'N/A', paper:3, paperName:'Geographical Debates', date:'2026-06-17' },
  { board:'OCR', level:'A-Level', subject:'Economics', tier:'N/A', paper:1, paperName:'Microeconomics',  date:'2026-05-21' },
  { board:'OCR', level:'A-Level', subject:'Economics', tier:'N/A', paper:2, paperName:'Macroeconomics',  date:'2026-06-09' },
  { board:'OCR', level:'A-Level', subject:'Economics', tier:'N/A', paper:3, paperName:'Themes in Economics', date:'2026-06-22' },
]

// ── LEVEL 2 VOCATIONAL ────────────────────────────────────────────────────────
// Cambridge Nationals and other L2 vocational quals
// These have unit exams rather than traditional papers
const L2_2026 = [
  { board:'OCR', level:'Level 2', subject:'Cambridge National Business', tier:'N/A', paper:1, paperName:'Exam Unit (R069)', date:'2026-05-15' },
  { board:'OCR', level:'Level 2', subject:'Cambridge National IT', tier:'N/A', paper:1, paperName:'Exam Unit (R070)', date:'2026-05-22' },
  { board:'OCR', level:'Level 2', subject:'Cambridge National Sport Science', tier:'N/A', paper:1, paperName:'Exam Unit (R041)', date:'2026-05-19' },
  { board:'OCR', level:'Level 2', subject:'Cambridge National Health & Social Care', tier:'N/A', paper:1, paperName:'Exam Unit (R032)', date:'2026-05-20' },
  { board:'OCR', level:'Level 2', subject:'Cambridge National Creative Media', tier:'N/A', paper:1, paperName:'Exam Unit', date:'2026-06-03' },
]

export const EXAM_DATES_2026 = [...GCSE_2026, ...ALEVEL_2026, ...L2_2026]

export function getExamDates(subject, board, tier, level) {
  return EXAM_DATES_2026.filter(e =>
    e.subject === subject &&
    e.board   === board &&
    (!level || e.level === level) &&
    (tier === 'N/A' || !tier || e.tier === tier || e.tier === 'N/A')
  )
}

export function getExamDate(subject, board, tier, paper, level) {
  const match = EXAM_DATES_2026.find(e =>
    e.subject === subject &&
    e.board   === board &&
    e.paper   === paper &&
    (!level || e.level === level) &&
    (tier === 'N/A' || !tier || e.tier === tier || e.tier === 'N/A')
  )
  return match?.date || null
}

export function getAllSubjectsForBoard(board, level) {
  return [...new Set(
    EXAM_DATES_2026
      .filter(e => e.board === board && (!level || e.level === level))
      .map(e => e.subject)
  )].sort()
}

// src/data/examDatabase.js
// Verified 2026 exam dates sourced from official AQA, Edexcel/Pearson, OCR, WJEC, CCEA timetables
// Last verified: March 2026
// Grade boundaries: sourced from published 2024 results (2026 boundaries available after results day Aug 2026)
// Topics: sourced from official published specifications

// ─────────────────────────────────────────────────────────────────────────────
// GRADING SYSTEMS
// ─────────────────────────────────────────────────────────────────────────────
export const GRADING_SYSTEMS = {
  GCSE_STANDARD: { type: 'numeric', grades: ['9','8','7','6','5','4','3','2','1','U'], label: '9-1' },
  GCSE_COMBINED: { type: 'double', grades: ['9-9','9-8','8-8','8-7','7-7','7-6','6-6','6-5','5-5','5-4','4-4','4-3','3-3','U'], label: 'Double Award' },
  ALEVEL: { type: 'letter', grades: ['A*','A','B','C','D','E','U'], label: 'A*-E' },
  BTEC_L2: { type: 'btec', grades: ['D*','D','M','P','U'], label: 'D*-U' },
  BTEC_L3: { type: 'btec', grades: ['D*','D','M','P','U'], label: 'D*-U' },
  CAMBRIDGE_IGCSE: { type: 'letter', grades: ['A*','A','B','C','D','E','F','G','U'], label: 'A*-G' },
}

// ─────────────────────────────────────────────────────────────────────────────
// EXAM BOARDS AND SUBJECTS THEY OFFER
// Key: board name, Value: array of subject names they offer at GCSE/A-Level
// ─────────────────────────────────────────────────────────────────────────────
export const BOARD_SUBJECTS = {
  AQA: {
    GCSE: [
      'Biology','Chemistry','Physics','Combined Science: Trilogy','Combined Science: Synergy',
      'Mathematics','Further Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Mandarin Chinese','Arabic','Polish','Urdu',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics',
      'Media Studies','Film Studies',
      'Food Preparation & Nutrition',
      'Design & Technology',
      'Engineering',
      'Statistics',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics','Statistics',
      'English Language','English Literature','English Language & Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Dance','Drama & Theatre Studies',
      'Physical Education',
      'French','German','Spanish','Mandarin Chinese','Arabic',
      'Religious Studies','Philosophy','Sociology','Psychology',
      'Business','Economics','Accounting',
      'Law','Politics',
      'Media Studies','Film Studies',
      'Design & Technology','Product Design',
      'Environmental Science',
    ],
  },
  Edexcel: {
    GCSE: [
      'Biology','Chemistry','Physics','Combined Science',
      'Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Italian','Chinese',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics',
      'Media Studies',
      'Food Technology',
      'Design & Technology',
      'Engineering',
      'Statistics',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics','Statistics',
      'English Language','English Literature','English Language & Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama & Theatre',
      'Physical Education',
      'French','German','Spanish','Italian','Chinese',
      'Religious Studies','Philosophy','Sociology','Psychology',
      'Business','Economics','Accounting',
      'Law','Politics',
      'Media Studies',
      'Design & Technology',
      'Environmental Science',
    ],
  },
  OCR: {
    GCSE: [
      'Biology','Chemistry','Physics','Combined Science A','Combined Science B',
      'Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Latin','Classical Greek',
      'Religious Studies','Sociology','Psychology',
      'Business','Economics',
      'Media Studies',
      'Food Technology',
      'Design & Technology',
      'Engineering',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics','Statistics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama & Theatre Studies',
      'Physical Education',
      'French','German','Spanish','Latin','Classical Greek',
      'Religious Studies','Philosophy','Sociology','Psychology',
      'Business','Economics','Accounting',
      'Law','Politics',
      'Media Studies',
      'Design & Technology',
    ],
  },
  WJEC: {
    GCSE: [
      'Biology','Chemistry','Physics','Combined Science',
      'Mathematics','Mathematics - Numeracy',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Welsh','Welsh Literature',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics',
      'Media Studies','Film Studies',
      'Food & Nutrition',
      'Design & Technology',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Welsh',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics',
      'Media Studies','Film Studies',
    ],
  },
  CCEA: {
    GCSE: [
      'Biology','Chemistry','Physics','Double Award Science',
      'Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','Spanish','Irish',
      'Religious Studies','Sociology',
      'Business Studies','Economics',
      'Media Studies',
      'Technology & Design',
      'Home Economics',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','Spanish','Irish',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics',
      'Media Studies',
      'Technology & Design',
    ],
  },
  Cambridge: {
    IGCSE: [
      'Biology','Chemistry','Physics','Combined Science',
      'Mathematics','Additional Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music','Drama',
      'Physical Education',
      'French','German','Spanish','Mandarin Chinese','Arabic',
      'Religious Studies','Sociology','Psychology',
      'Business Studies','Economics','Accounting',
      'Design & Technology','Food & Nutrition',
    ],
    ALEVEL: [
      'Biology','Chemistry','Physics',
      'Mathematics','Further Mathematics',
      'English Language','English Literature',
      'History','Geography',
      'Computer Science',
      'Art & Design','Music',
      'French','German','Spanish','Mandarin Chinese','Arabic',
      'Sociology','Psychology',
      'Business','Economics','Accounting',
      'Law',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// 2026 EXAM DATES - VERIFIED FROM OFFICIAL TIMETABLES
// ─────────────────────────────────────────────────────────────────────────────
// Format: { board, subject, qualification, papers: [{ name, date, duration, code }] }
// Dates sourced from: AQA confirmed timetable v1.1, Pearson/Edexcel confirmed timetable,
// OCR confirmed timetable, WJEC confirmed timetable
// ─────────────────────────────────────────────────────────────────────────────
export const EXAM_DATES_2026 = [

  // ── AQA GCSE ────────────────────────────────────────────────────────────────

  // English Literature
  { board:'AQA', subject:'English Literature', qualification:'GCSE', papers:[
    { name:'Paper 1: Shakespeare & the 19th Century Novel', date:'2026-05-11', session:'AM', duration:105, code:'8702/1' },
    { name:'Paper 2: Modern Texts & Poetry', date:'2026-05-19', session:'AM', duration:135, code:'8702/2' },
  ]},

  // English Language
  { board:'AQA', subject:'English Language', qualification:'GCSE', papers:[
    { name:'Paper 1: Explorations in Creative Reading & Writing', date:'2026-05-21', session:'AM', duration:105, code:'8700/1' },
    { name:'Paper 2: Writers\' Viewpoints & Perspectives', date:'2026-06-05', session:'AM', duration:105, code:'8700/2' },
  ]},

  // Mathematics
  { board:'AQA', subject:'Mathematics', qualification:'GCSE', papers:[
    { name:'Paper 1: Non-Calculator', date:'2026-05-14', session:'AM', duration:90, code:'8300/1F', codeH:'8300/1H' },
    { name:'Paper 2: Calculator', date:'2026-06-03', session:'AM', duration:90, code:'8300/2F', codeH:'8300/2H' },
    { name:'Paper 3: Calculator', date:'2026-06-10', session:'AM', duration:90, code:'8300/3F', codeH:'8300/3H' },
  ]},

  // Further Mathematics (AQA Level 2)
  { board:'AQA', subject:'Further Mathematics', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-06-08', session:'PM', duration:105, code:'8365/1' },
    { name:'Paper 2', date:'2026-06-15', session:'PM', duration:105, code:'8365/2' },
  ]},

  // Biology
  { board:'AQA', subject:'Biology', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-05-12', session:'PM', duration:105, code:'8461/1H' },
    { name:'Paper 2', date:'2026-06-08', session:'AM', duration:105, code:'8461/2H' },
  ]},

  // Chemistry
  { board:'AQA', subject:'Chemistry', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-05-18', session:'AM', duration:105, code:'8462/1H' },
    { name:'Paper 2', date:'2026-06-12', session:'AM', duration:105, code:'8462/2H' },
  ]},

  // Physics
  { board:'AQA', subject:'Physics', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-06-02', session:'AM', duration:105, code:'8463/1H' },
    { name:'Paper 2', date:'2026-06-15', session:'AM', duration:105, code:'8463/2H' },
  ]},

  // Combined Science: Trilogy
  { board:'AQA', subject:'Combined Science: Trilogy', qualification:'GCSE', gradingSystem:'GCSE_COMBINED', papers:[
    { name:'Biology Paper 1', date:'2026-05-12', session:'PM', duration:75, code:'8464/B/1H' },
    { name:'Chemistry Paper 1', date:'2026-05-18', session:'AM', duration:75, code:'8464/C/1H' },
    { name:'Physics Paper 1', date:'2026-06-02', session:'AM', duration:75, code:'8464/P/1H' },
    { name:'Biology Paper 2', date:'2026-06-08', session:'AM', duration:75, code:'8464/B/2H' },
    { name:'Chemistry Paper 2', date:'2026-06-12', session:'AM', duration:75, code:'8464/C/2H' },
    { name:'Physics Paper 2', date:'2026-06-15', session:'AM', duration:75, code:'8464/P/2H' },
  ]},

  // Geography
  { board:'AQA', subject:'Geography', qualification:'GCSE', papers:[
    { name:'Paper 1: Living with the Physical Environment', date:'2026-05-13', session:'AM', duration:90, code:'8035/1' },
    { name:'Paper 2: Challenges in the Human Environment', date:'2026-06-03', session:'PM', duration:90, code:'8035/2' },
    { name:'Paper 3: Geographical Applications', date:'2026-06-11', session:'AM', duration:90, code:'8035/3' },
  ]},

  // Computer Science
  { board:'AQA', subject:'Computer Science', qualification:'GCSE', papers:[
    { name:'Paper 1: Computational Thinking & Programming Skills', date:'2026-05-13', session:'PM', duration:150, code:'8525/1B' },
    { name:'Paper 2: Computing Concepts', date:'2026-05-19', session:'PM', duration:105, code:'8525/2' },
  ]},

  // History (AQA)
  { board:'AQA', subject:'History', qualification:'GCSE', papers:[
    { name:'Paper 1: Understanding the Modern World', date:'2026-05-15', session:'AM', duration:90, code:'8145/1' },
    { name:'Paper 2: Shaping the Nation', date:'2026-06-09', session:'AM', duration:105, code:'8145/2' },
  ]},

  // Religious Studies
  { board:'AQA', subject:'Religious Studies', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-05-12', session:'AM', duration:105, code:'8062/1' },
    { name:'Paper 2', date:'2026-05-20', session:'PM', duration:105, code:'8062/2A' },
  ]},

  // Drama
  { board:'AQA', subject:'Drama', qualification:'GCSE', papers:[
    { name:'Written Paper: Understanding Drama', date:'2026-05-08', session:'PM', duration:105, code:'8261/W' },
  ]},

  // Sociology
  { board:'AQA', subject:'Sociology', qualification:'GCSE', papers:[
    { name:'Paper 1: The Sociology of Families and Education', date:'2026-05-22', session:'AM', duration:105, code:'8192/1' },
    { name:'Paper 2: The Sociology of Crime & Deviance and Social Stratification', date:'2026-06-09', session:'PM', duration:105, code:'8192/2' },
  ]},

  // Psychology (AQA GCSE)
  { board:'AQA', subject:'Psychology', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-05-22', session:'PM', duration:105, code:'8182/1' },
    { name:'Paper 2', date:'2026-06-04', session:'AM', duration:105, code:'8182/2' },
  ]},

  // Business Studies (AQA GCSE)
  { board:'AQA', subject:'Business Studies', qualification:'GCSE', papers:[
    { name:'Paper 1: Influences of Technology & Digital Marketing on Business Activity', date:'2026-05-22', session:'AM', duration:105, code:'8132/1' },
    { name:'Paper 2: Influences of Finance, HR & Marketing on Business Activity', date:'2026-06-11', session:'PM', duration:105, code:'8132/2' },
  ]},

  // Economics (AQA GCSE)
  { board:'AQA', subject:'Economics', qualification:'GCSE', papers:[
    { name:'Paper 1: How Markets Work', date:'2026-05-27', session:'AM', duration:90, code:'8136/1' },
    { name:'Paper 2: How the Economy Works', date:'2026-06-16', session:'AM', duration:90, code:'8136/2' },
  ]},

  // Media Studies (AQA GCSE)
  { board:'AQA', subject:'Media Studies', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-05-18', session:'PM', duration:90, code:'8572/1' },
    { name:'Paper 2', date:'2026-06-04', session:'PM', duration:90, code:'8572/2' },
  ]},

  // Food Preparation & Nutrition
  { board:'AQA', subject:'Food Preparation & Nutrition', qualification:'GCSE', papers:[
    { name:'Written Paper', date:'2026-06-11', session:'AM', duration:105, code:'8585/W' },
  ]},

  // Statistics (AQA GCSE)
  { board:'AQA', subject:'Statistics', qualification:'GCSE', papers:[
    { name:'Paper 1', date:'2026-06-04', session:'AM', duration:90, code:'8382/1F' },
    { name:'Paper 2', date:'2026-06-16', session:'PM', duration:90, code:'8382/2F' },
  ]},

  // ── Edexcel/Pearson GCSE ─────────────────────────────────────────────────────

  // Maths (Edexcel)
  { board:'Edexcel', subject:'Mathematics', qualification:'GCSE', papers:[
    { name:'Paper 1: Non-Calculator', date:'2026-05-14', session:'AM', duration:90, code:'1MA1 1' },
    { name:'Paper 2: Calculator', date:'2026-06-03', session:'AM', duration:90, code:'1MA1 2' },
    { name:'Paper 3: Calculator', date:'2026-06-10', session:'AM', duration:90, code:'1MA1 3' },
  ]},

  // History (Edexcel)
  { board:'Edexcel', subject:'History', qualification:'GCSE', papers:[
    { name:'Paper 1: Thematic Study & Historic Environment', date:'2026-05-15', session:'AM', duration:80, code:'1HI0 10-13' },
    { name:'Paper 2: Period Study & British Depth Study', date:'2026-06-04', session:'AM', duration:110, code:'1HI0 2A-2W' },
    { name:'Paper 3: Modern Depth Study', date:'2026-06-09', session:'PM', duration:90, code:'1HI0 30-33' },
  ]},

  // French (Edexcel)
  { board:'Edexcel', subject:'French', qualification:'GCSE', papers:[
    { name:'Listening', date:'2026-05-20', session:'AM', duration:45, code:'1FR1 2' },
    { name:'Reading', date:'2026-06-04', session:'PM', duration:45, code:'1FR1 3' },
    { name:'Writing', date:'2026-06-08', session:'PM', duration:75, code:'1FR1 4' },
  ]},

  // Spanish (Edexcel)
  { board:'Edexcel', subject:'Spanish', qualification:'GCSE', papers:[
    { name:'Listening', date:'2026-06-09', session:'AM', duration:45, code:'1SP1 2' },
    { name:'Reading', date:'2026-06-16', session:'AM', duration:45, code:'1SP1 3' },
    { name:'Writing', date:'2026-06-17', session:'AM', duration:75, code:'1SP1 4' },
  ]},

  // Physical Education (Edexcel)
  { board:'Edexcel', subject:'Physical Education', qualification:'GCSE', papers:[
    { name:'Component 1: Fitness & Body Systems', date:'2026-05-22', session:'AM', duration:90, code:'1PE0 01' },
    { name:'Component 2: Health & Performance', date:'2026-06-01', session:'AM', duration:75, code:'1PE0 02' },
  ]},

  // ── OCR GCSE ─────────────────────────────────────────────────────────────────

  // Mathematics (OCR)
  { board:'OCR', subject:'Mathematics', qualification:'GCSE', papers:[
    { name:'Paper 1: Non-Calculator', date:'2026-05-14', session:'AM', duration:90, code:'J560/01' },
    { name:'Paper 2: Calculator', date:'2026-06-03', session:'AM', duration:90, code:'J560/02' },
    { name:'Paper 3: Calculator', date:'2026-06-10', session:'AM', duration:90, code:'J560/03' },
  ]},

  // Computer Science (OCR)
  { board:'OCR', subject:'Computer Science', qualification:'GCSE', papers:[
    { name:'Paper 1: Computer Systems', date:'2026-05-13', session:'AM', duration:90, code:'J277/01' },
    { name:'Paper 2: Computational Thinking, Algorithms & Programming', date:'2026-05-19', session:'AM', duration:90, code:'J277/02' },
  ]},

  // ── AQA A-LEVEL ─────────────────────────────────────────────────────────────
  // Dates from AQA confirmed A-level timetable v1.1 May/June 2026

  // A-Level Biology
  { board:'AQA', subject:'Biology', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1', date:'2026-05-14', session:'AM', duration:120, code:'7402/1' },
    { name:'Paper 2', date:'2026-06-01', session:'AM', duration:120, code:'7402/2' },
    { name:'Paper 3', date:'2026-06-15', session:'AM', duration:120, code:'7402/3' },
  ]},

  // A-Level Chemistry
  { board:'AQA', subject:'Chemistry', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1', date:'2026-05-19', session:'AM', duration:120, code:'7405/1' },
    { name:'Paper 2', date:'2026-06-03', session:'AM', duration:120, code:'7405/2' },
    { name:'Paper 3', date:'2026-06-18', session:'AM', duration:120, code:'7405/3' },
  ]},

  // A-Level Physics
  { board:'AQA', subject:'Physics', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1', date:'2026-05-22', session:'AM', duration:120, code:'7408/1' },
    { name:'Paper 2', date:'2026-06-08', session:'AM', duration:120, code:'7408/2' },
    { name:'Paper 3', date:'2026-06-22', session:'AM', duration:120, code:'7408/3' },
  ]},

  // A-Level Mathematics
  { board:'AQA', subject:'Mathematics', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Pure Mathematics', date:'2026-05-18', session:'AM', duration:120, code:'7357/1' },
    { name:'Paper 2: Pure Mathematics', date:'2026-06-01', session:'AM', duration:120, code:'7357/2' },
    { name:'Paper 3: Statistics & Mechanics', date:'2026-06-15', session:'PM', duration:120, code:'7357/3' },
  ]},

  // A-Level Further Mathematics
  { board:'AQA', subject:'Further Mathematics', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Core Pure Mathematics 1', date:'2026-05-15', session:'AM', duration:120, code:'7367/1' },
    { name:'Paper 2: Core Pure Mathematics 2', date:'2026-05-29', session:'AM', duration:120, code:'7367/2' },
    { name:'Paper 3A/3B: Optional', date:'2026-06-11', session:'AM', duration:120, code:'7367/3' },
    { name:'Paper 4A/4B: Optional', date:'2026-06-19', session:'AM', duration:120, code:'7367/4' },
  ]},

  // A-Level Psychology
  { board:'AQA', subject:'Psychology', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Introductory Topics', date:'2026-05-15', session:'AM', duration:120, code:'7182/1' },
    { name:'Paper 2: Psychology in Context', date:'2026-05-20', session:'AM', duration:120, code:'7182/2' },
    { name:'Paper 3: Issues & Options', date:'2026-06-05', session:'AM', duration:120, code:'7182/3' },
  ]},

  // A-Level Sociology
  { board:'AQA', subject:'Sociology', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Education with Theory & Methods', date:'2026-05-14', session:'PM', duration:120, code:'7192/1' },
    { name:'Paper 2: Topics in Sociology', date:'2026-06-02', session:'AM', duration:120, code:'7192/2' },
    { name:'Paper 3: Crime & Deviance with Theory & Methods', date:'2026-06-16', session:'AM', duration:120, code:'7192/3' },
  ]},

  // A-Level History
  { board:'AQA', subject:'History', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Component 1: Breadth Study', date:'2026-05-18', session:'PM', duration:150, code:'7042/1' },
    { name:'Component 2A/2B: Depth Study', date:'2026-06-03', session:'PM', duration:150, code:'7042/2' },
    { name:'Component 3: Historical Investigation', date:'2026-06-17', session:'AM', duration:120, code:'7042/2C' },
  ]},

  // A-Level Geography
  { board:'AQA', subject:'Geography', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Physical Geography', date:'2026-05-20', session:'AM', duration:135, code:'7037/1' },
    { name:'Paper 2: Human Geography', date:'2026-06-04', session:'AM', duration:135, code:'7037/2' },
    { name:'Paper 3: Geography Fieldwork Investigation', date:'2026-06-18', session:'PM', duration:120, code:'7037/3' },
  ]},

  // A-Level English Literature
  { board:'AQA', subject:'English Literature', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Love Through the Ages', date:'2026-05-19', session:'PM', duration:180, code:'7712/1' },
    { name:'Paper 2: Texts in Shared Contexts', date:'2026-06-09', session:'PM', duration:150, code:'7712/2' },
  ]},

  // A-Level English Language
  { board:'AQA', subject:'English Language', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Language, the Individual & Society', date:'2026-05-21', session:'AM', duration:150, code:'7702/1' },
    { name:'Paper 2: Language Diversity & Change', date:'2026-06-11', session:'AM', duration:150, code:'7702/2' },
  ]},

  // A-Level Business
  { board:'AQA', subject:'Business', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Business 1', date:'2026-05-13', session:'AM', duration:120, code:'7132/1' },
    { name:'Paper 2: Business 2', date:'2026-06-02', session:'PM', duration:120, code:'7132/2' },
    { name:'Paper 3: Business 3', date:'2026-06-16', session:'PM', duration:120, code:'7132/3' },
  ]},

  // A-Level Economics
  { board:'AQA', subject:'Economics', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Markets & Market Failure', date:'2026-05-15', session:'PM', duration:120, code:'7136/1' },
    { name:'Paper 2: National & International Economy', date:'2026-06-01', session:'PM', duration:120, code:'7136/2' },
    { name:'Paper 3: Economic Principles & Issues', date:'2026-06-19', session:'AM', duration:120, code:'7136/3' },
  ]},

  // A-Level Computer Science
  { board:'AQA', subject:'Computer Science', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: On-screen Exam', date:'2026-05-22', session:'AM', duration:150, code:'7517/1' },
    { name:'Paper 2: Written Exam', date:'2026-06-08', session:'PM', duration:150, code:'7517/2' },
  ]},

  // A-Level Politics
  { board:'AQA', subject:'Politics', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: Government & Politics of the UK', date:'2026-05-13', session:'PM', duration:120, code:'7152/1' },
    { name:'Paper 2: Government & Politics of the USA & Comparative Politics', date:'2026-06-04', session:'PM', duration:120, code:'7152/2' },
    { name:'Paper 3: Political Ideas', date:'2026-06-22', session:'PM', duration:120, code:'7152/3' },
  ]},

  // A-Level Law
  { board:'AQA', subject:'Law', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1: The Nature of Law & The English Legal System', date:'2026-05-20', session:'PM', duration:120, code:'7162/1' },
    { name:'Paper 2: Criminal Law & Tort', date:'2026-06-09', session:'AM', duration:120, code:'7162/2' },
    { name:'Paper 3: Contract Law & Options', date:'2026-06-18', session:'AM', duration:120, code:'7162/3' },
  ]},

  // A-Level Religious Studies
  { board:'AQA', subject:'Religious Studies', qualification:'A-Level', gradingSystem:'ALEVEL', papers:[
    { name:'Paper 1', date:'2026-05-12', session:'PM', duration:180, code:'7062/1' },
    { name:'Paper 2', date:'2026-06-01', session:'PM', duration:180, code:'7062/2' },
  ]},
]

// ─────────────────────────────────────────────────────────────────────────────
// PAPER STRUCTURES - maxMarks and grade boundaries
// Boundaries sourced from published 2024 results (most recent available)
// 2026 boundaries will be published after results day (20 August 2026 for GCSE)
// ─────────────────────────────────────────────────────────────────────────────
export const PAPER_STRUCTURES = {

  // AQA GCSE Mathematics Higher (per paper, 80 marks each)
  'AQA-Mathematics-GCSE-Higher': {
    maxMarks: 80,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:73, 8:64, 7:54, 6:43, 5:32, 4:20, 3:13, 2:7, 1:3 },
    boundaries2023: { 9:72, 8:62, 7:53, 6:41, 5:30, 4:18, 3:12, 2:6, 1:3 },
    note: 'Per paper (Paper 1, 2 or 3). Total subject max = 240.',
  },
  'AQA-Mathematics-GCSE-Foundation': {
    maxMarks: 80,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 5:54, 4:42, 3:28, 2:17, 1:8 },
    boundaries2023: { 5:52, 4:40, 3:26, 2:15, 1:8 },
    note: 'Per paper. Foundation tier grades 1-5 only.',
  },

  // AQA GCSE Biology Higher (105 min, 100 marks per paper)
  'AQA-Biology-GCSE-Higher': {
    maxMarks: 100,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:71, 8:63, 7:56, 6:48, 5:40, 4:28, 3:20, 2:12, 1:6 },
    boundaries2023: { 9:72, 8:64, 7:57, 6:49, 5:40, 4:28, 3:20, 2:12, 1:6 },
    note: 'Per paper (Paper 1 or 2). Total subject max = 200.',
  },

  // AQA GCSE Chemistry Higher
  'AQA-Chemistry-GCSE-Higher': {
    maxMarks: 100,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:75, 8:65, 7:56, 6:47, 5:37, 4:26, 3:18, 2:11, 1:5 },
    boundaries2023: { 9:73, 8:63, 7:54, 6:45, 5:35, 4:25, 3:17, 2:10, 1:5 },
    note: 'Per paper. Total subject max = 200.',
  },

  // AQA GCSE Physics Higher
  'AQA-Physics-GCSE-Higher': {
    maxMarks: 100,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:76, 8:68, 7:61, 6:52, 5:43, 4:31, 3:22, 2:13, 1:6 },
    boundaries2023: { 9:75, 8:67, 7:60, 6:51, 5:42, 4:30, 3:21, 2:13, 1:6 },
    note: 'Per paper. Total subject max = 200.',
  },

  // AQA Combined Science Trilogy Higher (75 marks per paper)
  'AQA-Combined Science: Trilogy-GCSE-Higher': {
    maxMarks: 75,
    gradingSystem: 'GCSE_COMBINED',
    boundaries2024: { '9-9':282, '8-8':252, '7-7':222, '6-6':185, '5-5':147, '4-4':110 },
    note: 'Total subject max = 450 (6 papers × 75). Double grade awarded.',
  },

  // AQA English Language
  'AQA-English Language-GCSE': {
    maxMarks: 80,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:61, 8:56, 7:51, 6:46, 5:40, 4:32, 3:23, 2:15, 1:8 },
    boundaries2023: { 9:60, 8:55, 7:50, 6:45, 5:39, 4:31, 3:22, 2:14, 1:7 },
    note: 'Per paper (Paper 1 or 2). Total subject max = 160.',
  },

  // AQA English Literature
  'AQA-English Literature-GCSE': {
    maxMarks: 80,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:69, 8:61, 7:52, 6:44, 5:35, 4:26, 3:17, 2:10, 1:5 },
    note: 'Paper 1 = 80 marks (1hr45m), Paper 2 = 80 marks (2hr15m). Total = 160.',
  },

  // AQA Geography GCSE
  'AQA-Geography-GCSE': {
    maxMarks: 88,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:74, 8:66, 7:58, 6:49, 5:40, 4:30, 3:20, 2:12, 1:6 },
    note: 'Paper 1 = 88 marks, Paper 2 = 88 marks, Paper 3 = 76 marks.',
  },

  // OCR Computer Science J277 (80 marks per paper)
  'OCR-Computer Science-GCSE': {
    maxMarks: 80,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:68, 8:63, 7:59, 6:51, 5:44, 4:36, 3:26, 2:16, 1:7 },
    boundaries2023: { 9:68, 8:63, 7:56, 6:48, 5:40, 4:33, 3:23, 2:14, 1:7 },
    note: 'Per paper. Total subject max = 160 (2 papers × 80).',
  },

  // AQA Computer Science GCSE (different from OCR)
  'AQA-Computer Science-GCSE': {
    maxMarks: 90,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:77, 8:68, 7:60, 6:51, 5:42, 4:33, 3:23, 2:14, 1:7 },
    note: 'Paper 1 = 90 marks (2hr30m), Paper 2 = 90 marks (1hr45m).',
  },

  // AQA Further Mathematics GCSE Level 2 (105 marks per paper)
  'AQA-Further Mathematics-GCSE': {
    maxMarks: 105,
    gradingSystem: 'GCSE_STANDARD',
    boundaries2024: { 9:77, 8:64, 7:52, 6:40, 5:29, 4:19 },
    note: 'Level 2 qualification. Grades 4-9 only.',
  },

  // AQA A-Level Mathematics (100 marks per paper)
  'AQA-Mathematics-A-Level': {
    maxMarks: 100,
    gradingSystem: 'ALEVEL',
    boundaries2024: { 'A*':78, A:66, B:56, C:46, D:36, E:26 },
    note: 'Per paper. 3 papers each 2 hours, 100 marks. Total = 300.',
  },

  // AQA A-Level Biology (91 marks per paper avg)
  'AQA-Biology-A-Level': {
    maxMarks: 91,
    gradingSystem: 'ALEVEL',
    boundaries2024: { 'A*':68, A:58, B:50, C:42, D:34, E:26 },
    note: 'Papers 1 & 2 = 91 marks each, Paper 3 = 78 marks. Total = 260.',
  },

  // AQA A-Level Chemistry (105 marks per paper)
  'AQA-Chemistry-A-Level': {
    maxMarks: 105,
    gradingSystem: 'ALEVEL',
    boundaries2024: { 'A*':82, A:70, B:60, C:50, D:40, E:30 },
    note: 'Papers 1 & 2 = 105 marks, Paper 3 = 90 marks. Total = 300.',
  },

  // AQA A-Level Physics (85 marks per paper avg)
  'AQA-Physics-A-Level': {
    maxMarks: 85,
    gradingSystem: 'ALEVEL',
    boundaries2024: { 'A*':64, A:54, B:45, C:37, D:29, E:21 },
    note: 'Papers 1 & 2 = 85 marks, Paper 3 = 80 marks. Total = 250.',
  },

  // AQA A-Level Psychology
  'AQA-Psychology-A-Level': {
    maxMarks: 96,
    gradingSystem: 'ALEVEL',
    boundaries2024: { 'A*':76, A:65, B:55, C:46, D:37, E:28 },
    note: 'Per paper. 3 papers × 96 marks = 288 total.',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// SPECIFICATION TOPICS
// Sourced from official published specifications (links to spec doc noted)
// ─────────────────────────────────────────────────────────────────────────────
export const SPEC_TOPICS = {

  // ── AQA GCSE BIOLOGY ──────────────────────────────────────────────────────
  'AQA-Biology-GCSE': {
    'Paper 1': [
      'B1 – Cell Biology: Cell Structure',
      'B1 – Cell Biology: Cell Division (Mitosis)',
      'B1 – Cell Biology: Transport in Cells (Diffusion, Osmosis, Active Transport)',
      'B2 – Organisation: Principles of Organisation',
      'B2 – Organisation: The Human Digestive System',
      'B2 – Organisation: The Heart & Blood Vessels',
      'B2 – Organisation: Blood',
      'B2 – Organisation: Coronary Heart Disease',
      'B2 – Organisation: Health Issues & Effect of Lifestyle',
      'B2 – Organisation: Plant Tissues, Organs & Systems',
      'B2 – Organisation: Transpiration & Translocation',
      'B3 – Infection & Response: Communicable Diseases',
      'B3 – Infection & Response: Monoclonal Antibodies',
      'B3 – Infection & Response: Plant Diseases',
      'B4 – Bioenergetics: Photosynthesis',
      'B4 – Bioenergetics: Respiration (Aerobic & Anaerobic)',
    ],
    'Paper 2': [
      'B5 – Homeostasis & Response: Homeostasis',
      'B5 – Homeostasis & Response: The Nervous System',
      'B5 – Homeostasis & Response: The Brain',
      'B5 – Homeostasis & Response: The Eye',
      'B5 – Homeostasis & Response: Hormonal Coordination',
      'B5 – Homeostasis & Response: Controlling Blood Glucose',
      'B5 – Homeostasis & Response: Maintaining Water & Nitrogen Balance',
      'B5 – Homeostasis & Response: Hormones in Human Reproduction',
      'B5 – Homeostasis & Response: Contraception',
      'B5 – Homeostasis & Response: The Use of Hormones to Treat Infertility',
      'B5 – Homeostasis & Response: Negative Feedback',
      'B6 – Inheritance, Variation & Evolution: Reproduction',
      'B6 – Inheritance, Variation & Evolution: DNA & the Genome',
      'B6 – Inheritance, Variation & Evolution: Genetic Inheritance',
      'B6 – Inheritance, Variation & Evolution: Inherited Disorders',
      'B6 – Inheritance, Variation & Evolution: Sex Determination',
      'B6 – Inheritance, Variation & Evolution: Variation & Evolution',
      'B6 – Inheritance, Variation & Evolution: The Development of Understanding of Genetics & Evolution',
      'B6 – Inheritance, Variation & Evolution: Classification of Living Organisms',
      'B7 – Ecology: Adaptations, Interdependence & Competition',
      'B7 – Ecology: Organisation of an Ecosystem',
      'B7 – Ecology: Biodiversity & the Effect of Human Interaction',
      'B7 – Ecology: Trophic Levels in an Ecosystem',
      'B7 – Ecology: Food Security & Farming',
      'B7 – Ecology: Biotechnology',
    ],
  },

  // ── AQA GCSE CHEMISTRY ────────────────────────────────────────────────────
  'AQA-Chemistry-GCSE': {
    'Paper 1': [
      'C1 – Atomic Structure & the Periodic Table',
      'C1 – Electronic Structure',
      'C1 – Development of the Periodic Table',
      'C1 – Group 1: Alkali Metals',
      'C1 – Group 7: Halogens',
      'C1 – Group 0: Noble Gases',
      'C1 – Transition Metals',
      'C2 – Bonding, Structure & Properties of Matter: Ionic Bonding',
      'C2 – Covalent Bonding',
      'C2 – Metallic Bonding',
      'C2 – Properties of Ionic Compounds',
      'C2 – Properties of Small Covalent Molecules',
      'C2 – Polymers',
      'C2 – Giant Covalent Structures',
      'C2 – Properties of Metals & Alloys',
      'C2 – Nanoparticles',
      'C3 – Quantitative Chemistry: Conservation of Mass',
      'C3 – Relative Formula Mass',
      'C3 – Moles & Concentration',
      'C3 – Percentage Yield & Atom Economy',
      'C4 – Chemical Changes: Metal Reactivity Series',
      'C4 – Extraction of Metals',
      'C4 – Reactions of Acids',
      'C4 – The pH Scale',
      'C4 – Strong & Weak Acids',
      'C4 – Electrolysis',
      'C5 – Energy Changes: Exothermic & Endothermic Reactions',
      'C5 – Bond Energies',
      'C5 – Cells, Batteries & Fuel Cells',
    ],
    'Paper 2': [
      'C6 – The Rate & Extent of Chemical Change: Rate of Reaction',
      'C6 – Factors Affecting Rate (Temperature, Concentration, Pressure, Catalyst, Surface Area)',
      'C6 – Reversible Reactions & Equilibrium',
      'C6 – Le Chatelier\'s Principle',
      'C7 – Organic Chemistry: Carbon Compounds',
      'C7 – Crude Oil & Fractional Distillation',
      'C7 – Alkanes',
      'C7 – Alkenes',
      'C7 – Alcohols',
      'C7 – Carboxylic Acids',
      'C7 – Polymers: Addition Polymerisation',
      'C7 – Polymers: Condensation Polymerisation',
      'C8 – Chemical Analysis: Pure & Impure Substances',
      'C8 – Chromatography',
      'C8 – Identification of Common Gases',
      'C8 – Flame Tests & Spectroscopy',
      'C8 – Tests for Anions',
      'C9 – Chemistry of the Atmosphere: Earth\'s Atmosphere',
      'C9 – Carbon Dioxide & the Greenhouse Effect',
      'C9 – Climate Change',
      'C9 – Atmospheric Pollutants',
      'C10 – Using Resources: Using the Earth\'s Resources',
      'C10 – Potable Water',
      'C10 – Waste Water Treatment',
      'C10 – Life Cycle Assessment',
      'C10 – Reducing Use of Resources',
      'C10 – The Haber Process',
      'C10 – NPK Fertilisers',
    ],
  },

  // ── AQA GCSE PHYSICS ──────────────────────────────────────────────────────
  'AQA-Physics-GCSE': {
    'Paper 1': [
      'P1 – Energy: Stores & Transfers',
      'P1 – Energy: Kinetic, Gravitational Potential, Elastic Potential, Chemical, Thermal',
      'P1 – Energy: Conservation of Energy',
      'P1 – Energy: Power',
      'P1 – Energy: Efficiency',
      'P1 – Energy: Renewable & Non-Renewable Energy Sources',
      'P2 – Electricity: Current, Potential Difference & Resistance',
      'P2 – Electricity: Series & Parallel Circuits',
      'P2 – Electricity: I–V Characteristics (Resistor, Diode, Filament Lamp, Thermistor, LDR)',
      'P2 – Electricity: Domestic Uses & Safety',
      'P2 – Electricity: Energy Transfers',
      'P2 – Electricity: The National Grid',
      'P3 – Particle Model of Matter: Density',
      'P3 – Particle Model of Matter: Changes of State',
      'P3 – Particle Model of Matter: Specific Heat Capacity',
      'P3 – Particle Model of Matter: Specific Latent Heat',
      'P3 – Particle Model of Matter: Particle Motion in Gases',
      'P4 – Atomic Structure: The Nuclear Atom',
      'P4 – Atomic Structure: Isotopes',
      'P4 – Atomic Structure: Radioactive Decay',
      'P4 – Atomic Structure: Nuclear Radiation (Alpha, Beta, Gamma)',
      'P4 – Atomic Structure: Half-Life',
      'P4 – Atomic Structure: Nuclear Fission & Fusion',
    ],
    'Paper 2': [
      'P5 – Forces: Scalar & Vector Quantities',
      'P5 – Forces: Contact & Non-Contact Forces',
      'P5 – Forces: Gravity',
      'P5 – Forces: Resultant Forces',
      'P5 – Forces: Newton\'s Laws of Motion',
      'P5 – Forces: Momentum',
      'P5 – Forces: Stopping Distance',
      'P5 – Forces: Elasticity & Hooke\'s Law',
      'P6 – Waves: Transverse & Longitudinal Waves',
      'P6 – Waves: Wave Properties (Amplitude, Frequency, Wavelength, Speed)',
      'P6 – Waves: Reflection, Refraction & Total Internal Reflection',
      'P6 – Waves: Electromagnetic Spectrum',
      'P6 – Waves: Radio Waves, Microwaves, Infrared, Visible Light, Ultraviolet, X-Rays, Gamma Rays',
      'P6 – Waves: Lenses',
      'P6 – Waves: Sound',
      'P7 – Magnetism & Electromagnetism: Permanent & Induced Magnets',
      'P7 – Magnetism & Electromagnetism: Magnetic Fields',
      'P7 – Magnetism & Electromagnetism: The Motor Effect',
      'P7 – Magnetism & Electromagnetism: Fleming\'s Left-Hand Rule',
      'P7 – Magnetism & Electromagnetism: Electric Motors',
      'P7 – Magnetism & Electromagnetism: Electromagnetic Induction',
      'P7 – Magnetism & Electromagnetism: Generators & Microphones',
      'P7 – Magnetism & Electromagnetism: Transformers',
      'P8 – Space Physics: Our Solar System',
      'P8 – Space Physics: The Life Cycle of Stars',
      'P8 – Space Physics: Orbital Motion',
      'P8 – Space Physics: Hubble\'s Law & the Big Bang',
    ],
  },

  // ── AQA GCSE MATHEMATICS ──────────────────────────────────────────────────
  'AQA-Mathematics-GCSE': {
    'All Papers': [
      'Number: Structure & Calculation',
      'Number: Fractions, Decimals & Percentages',
      'Number: Measures & Accuracy',
      'Algebra: Notation, Vocabulary & Manipulation',
      'Algebra: Graphs',
      'Algebra: Solving Equations & Inequalities',
      'Algebra: Sequences',
      'Ratio, Proportion & Rates of Change',
      'Geometry & Measures: Properties & Constructions',
      'Geometry & Measures: Mensuration & Calculation',
      'Geometry & Measures: Vectors',
      'Probability',
      'Statistics',
      // Higher only
      'Algebra: Quadratic Functions & Graphs',
      'Algebra: Further Functions & Calculus',
      'Geometry: Circle Theorems',
      'Geometry: Further Trigonometry (Sine & Cosine Rules)',
      'Statistics: Cumulative Frequency & Box Plots',
      'Probability: Tree Diagrams & Venn Diagrams',
    ],
  },

  // ── AQA GCSE ENGLISH LANGUAGE ─────────────────────────────────────────────
  'AQA-English Language-GCSE': {
    'Paper 1: Explorations in Creative Reading & Writing': [
      'Q1: Identify & Interpret Explicit & Implicit Information',
      'Q2: Language Analysis – How Language is Used for Effect',
      'Q3: Structural Analysis – How Structure Creates Effect',
      'Q4: Critical Evaluation of a Text',
      'Q5: Descriptive or Narrative Writing',
    ],
    'Paper 2: Writers\' Viewpoints & Perspectives': [
      'Q1: Identify True Statements from Two Sources',
      'Q2: Summarise & Synthesise Two Texts',
      'Q3: Language Analysis – Non-Fiction Text',
      'Q4: Compare How Two Writers Convey Viewpoints',
      'Q5: Non-Fiction Writing (Article, Letter, Speech, etc.)',
    ],
  },

  // ── AQA GCSE ENGLISH LITERATURE ───────────────────────────────────────────
  'AQA-English Literature-GCSE': {
    'Paper 1: Shakespeare & the 19th Century Novel': [
      'Macbeth – Characters: Macbeth, Lady Macbeth, Banquo, Macduff, Duncan',
      'Macbeth – Themes: Ambition, Power, Guilt, Fate, Appearance vs Reality',
      'Macbeth – Context: Jacobean Society, Divine Right of Kings, Witchcraft',
      'A Christmas Carol – Characters: Scrooge, Bob Cratchit, Tiny Tim, The Ghosts',
      'A Christmas Carol – Themes: Redemption, Poverty, Christmas, Social Responsibility',
      'A Christmas Carol – Context: Victorian Society, Industrial Revolution, Poor Laws',
      'The Sign of Four – Characters & Plot',
      'Jane Eyre – Characters & Themes',
      'The Strange Case of Dr Jekyll & Mr Hyde – Duality, Victorian Values',
      'Great Expectations – Social Class, Characters',
    ],
    'Paper 2: Modern Texts & Poetry': [
      'An Inspector Calls – Characters: Birling Family, Inspector Goole, Eva Smith',
      'An Inspector Calls – Themes: Social Responsibility, Class, Gender, Age',
      'An Inspector Calls – Context: 1912 vs 1945, Priestley\'s Socialist Views',
      'A Taste of Honey – Characters & Themes',
      'Lord of the Flies – Characters, Civilization vs Savagery',
      'Animal Farm – Allegory, Political Satire',
      'Power & Conflict Poetry – Ozymandias (Shelley)',
      'Power & Conflict Poetry – London (Blake)',
      'Power & Conflict Poetry – The Prelude (Wordsworth)',
      'Power & Conflict Poetry – My Last Duchess (Browning)',
      'Power & Conflict Poetry – Charge of the Light Brigade (Tennyson)',
      'Power & Conflict Poetry – Exposure (Owen)',
      'Power & Conflict Poetry – Storm on the Island (Heaney)',
      'Power & Conflict Poetry – Bayonet Charge (Hughes)',
      'Power & Conflict Poetry – Remains (Armitage)',
      'Power & Conflict Poetry – Poppies (Weir)',
      'Power & Conflict Poetry – War Photographer (Duffy)',
      'Power & Conflict Poetry – Tissue (Dharker)',
      'Power & Conflict Poetry – The Emigrée (Rumens)',
      'Power & Conflict Poetry – Kamikaze (Garland)',
      'Power & Conflict Poetry – Checking Out Me History (Agard)',
      'Unseen Poetry – Analysis Techniques (SMILE: Structure, Mood, Imagery, Language, Effect)',
      'Unseen Poetry – Comparison of Two Poems',
    ],
  },

  // ── AQA GCSE GEOGRAPHY ────────────────────────────────────────────────────
  'AQA-Geography-GCSE': {
    'Paper 1: Living with the Physical Environment': [
      '1A – The Challenge of Natural Hazards: Tectonic Hazards',
      '1A – The Challenge of Natural Hazards: Atmospheric Hazards',
      '1A – The Challenge of Natural Hazards: Climate Change',
      '1B – The Living World: Ecosystems',
      '1B – The Living World: Tropical Rainforests',
      '1B – The Living World: Hot Deserts',
      '1C – Physical Landscapes in the UK: Coastal Landscapes',
      '1C – Physical Landscapes in the UK: River Landscapes',
      '1C – Physical Landscapes in the UK: Glacial Landscapes',
    ],
    'Paper 2: Challenges in the Human Environment': [
      '2A – Urban Issues & Challenges: Global Pattern of Urban Change',
      '2A – Urban Issues & Challenges: Urban Growth in LICs/NEEs',
      '2A – Urban Issues & Challenges: Urban Change in the UK',
      '2B – The Changing Economic World: The Development Gap',
      '2B – The Changing Economic World: Nigeria as a Case Study (NEE)',
      '2B – The Changing Economic World: Economic Change in the UK',
      '2C – The Challenge of Resource Management: Food, Water, Energy',
    ],
    'Paper 3: Geographical Applications': [
      '3A – Issue Evaluation (Pre-Release Material)',
      '3B – Fieldwork: Physical Geography Investigation',
      '3B – Fieldwork: Human Geography Investigation',
    ],
  },

  // ── AQA GCSE COMPUTER SCIENCE ─────────────────────────────────────────────
  'AQA-Computer Science-GCSE': {
    'Paper 1: Computational Thinking & Programming': [
      '3.1 – Fundamentals of Algorithms: Searching Algorithms (Binary, Linear)',
      '3.1 – Fundamentals of Algorithms: Sorting Algorithms (Bubble, Merge, Insertion)',
      '3.1 – Fundamentals of Algorithms: Representing Algorithms (Pseudocode, Flowcharts)',
      '3.2 – Programming: Variables, Constants, Operators',
      '3.2 – Programming: Selection (if, if-else)',
      '3.2 – Programming: Iteration (while, for)',
      '3.2 – Programming: Arrays & Lists',
      '3.2 – Programming: String Handling',
      '3.2 – Programming: File Handling',
      '3.2 – Programming: Subroutines (Procedures & Functions)',
      '3.2 – Programming: Object-Oriented Programming',
      '3.2 – Programming: Structured Programming',
    ],
    'Paper 2: Computing Concepts': [
      '3.3 – Fundamentals of Data Representation: Number Bases (Binary, Denary, Hex)',
      '3.3 – Data Representation: Binary Arithmetic',
      '3.3 – Data Representation: Representing Text (ASCII, Unicode)',
      '3.3 – Data Representation: Representing Images (Pixels, Colour Depth)',
      '3.3 – Data Representation: Representing Sound (Sampling)',
      '3.3 – Data Representation: Compression (Lossy, Lossless)',
      '3.4 – Computer Systems: Hardware (CPU, RAM, ROM, Storage)',
      '3.4 – Computer Systems: The Fetch-Decode-Execute Cycle',
      '3.4 – Computer Systems: Secondary Storage',
      '3.4 – Computer Systems: Operating Systems',
      '3.4 – Computer Systems: Utility Software',
      '3.5 – Fundamentals of Computer Networks: Types of Networks (LAN, WAN)',
      '3.5 – Networks: Network Hardware (Router, Switch, NIC)',
      '3.5 – Networks: Network Protocols (TCP/IP, HTTP, HTTPS, FTP)',
      '3.5 – Networks: Network Security',
      '3.6 – Cyber Security: Social Engineering, Malware, SQL Injection',
      '3.6 – Cyber Security: Network Security Measures',
      '3.7 – Relational Databases & SQL',
      '3.8 – Ethical, Legal, Cultural & Environmental Impacts',
    ],
  },

  // ── OCR GCSE COMPUTER SCIENCE J277 ────────────────────────────────────────
  'OCR-Computer Science-GCSE': {
    'Paper 1: Computer Systems': [
      '1.1 – Systems Architecture: CPU Components (ALU, CU, Registers, Cache)',
      '1.1 – Systems Architecture: Fetch-Decode-Execute Cycle',
      '1.1 – Systems Architecture: CPU Performance Factors',
      '1.1 – Systems Architecture: Embedded Systems',
      '1.2 – Memory & Storage: Primary Storage (RAM, ROM)',
      '1.2 – Memory & Storage: Secondary Storage (HDD, SSD, Optical)',
      '1.2 – Memory & Storage: Units of Data',
      '1.2 – Memory & Storage: Data Storage',
      '1.3 – Computer Networks, Connections & Protocols: Network Characteristics',
      '1.3 – Networks: Wired & Wireless Networks',
      '1.3 – Networks: The Internet',
      '1.3 – Networks: Network Protocols (TCP/IP, HTTP/S, FTP, DNS)',
      '1.3 – Networks: Network Security',
      '1.4 – Network Security: Threats (Malware, Phishing, Brute Force)',
      '1.4 – Network Security: Countermeasures',
      '1.5 – Systems Software: Operating Systems',
      '1.5 – Systems Software: Utility Programs',
      '1.6 – Ethical, Legal, Cultural & Environmental Concerns',
    ],
    'Paper 2: Computational Thinking, Algorithms & Programming': [
      '2.1 – Algorithms: Computational Thinking (Abstraction, Decomposition)',
      '2.1 – Algorithms: Designing & Refining Algorithms',
      '2.1 – Algorithms: Searching Algorithms (Binary Search, Linear Search)',
      '2.1 – Algorithms: Sorting Algorithms (Bubble Sort, Merge Sort, Insertion Sort)',
      '2.2 – Programming Fundamentals: Data Types',
      '2.2 – Programming: Sequence, Selection, Iteration',
      '2.2 – Programming: Arrays & Lists',
      '2.2 – Programming: String Operations',
      '2.2 – Programming: File Handling',
      '2.2 – Programming: Subroutines (Procedures, Functions)',
      '2.3 – Producing Robust Programs: Defensive Design',
      '2.3 – Testing: Types of Testing (Normal, Boundary, Erroneous)',
      '2.4 – Boolean Logic: AND, OR, NOT, XOR Gates',
      '2.4 – Boolean Logic: Truth Tables',
      '2.5 – Programming Languages & IDEs',
    ],
  },

  // ── AQA GCSE HISTORY ──────────────────────────────────────────────────────
  'AQA-History-GCSE': {
    'Paper 1: Understanding the Modern World': [
      'Period Study – Germany: Democracy & Dictatorship 1890-1945',
      'Wider World Depth Study – Conflict & Tension 1918-1939',
      'British Depth Study (Optional)',
    ],
    'Paper 2: Shaping the Nation': [
      'Thematic Study – Power & the People 1170-Present',
      'British Depth Study – Elizabethan England 1568-1603',
    ],
  },

  // ── AQA GCSE BUSINESS STUDIES ─────────────────────────────────────────────
  'AQA-Business Studies-GCSE': {
    'Paper 1': [
      '1.1 – Enterprise & Entrepreneurship',
      '1.2 – Spotting a Business Opportunity',
      '1.3 – Putting a Business Idea into Practice',
      '1.4 – Making the Business Effective',
      '1.5 – Understanding External Influences on Business',
      '3.1 – Business Operations',
      '3.2 – Working with Suppliers',
      '3.3 – Managing Quality',
      '3.4 – The Role of Technology in Operations',
    ],
    'Paper 2': [
      '2.1 – Growing the Business',
      '2.2 – Making Marketing Decisions',
      '2.3 – Making Operational Decisions',
      '2.4 – Making Financial Decisions',
      '2.5 – Making Human Resource Decisions',
    ],
  },

  // ── AQA A-LEVEL PSYCHOLOGY ────────────────────────────────────────────────
  'AQA-Psychology-A-Level': {
    'Paper 1: Introductory Topics': [
      'Social Influence: Types of Conformity (Compliance, Identification, Internalisation)',
      'Social Influence: Explanations for Conformity (Informational, Normative)',
      'Social Influence: Variables Affecting Conformity (Asch)',
      'Social Influence: Obedience (Milgram)',
      'Social Influence: Situational & Dispositional Factors in Obedience',
      'Social Influence: Resistance to Social Influence',
      'Social Influence: Minority Influence',
      'Social Influence: Social Change',
      'Memory: Models of Memory (MSM, Working Memory Model)',
      'Memory: Types of Long-Term Memory',
      'Memory: Factors Affecting EWT',
      'Memory: The Cognitive Interview',
      'Attachment: Caregiver-Infant Interactions',
      'Attachment: Schaffer\'s Stages of Attachment',
      'Attachment: Animal Studies of Attachment',
      'Attachment: Learning Theory & Bowlby\'s Theory',
      'Attachment: Types of Attachment (Ainsworth)',
      'Attachment: Bowlby\'s Theory of Maternal Deprivation',
      'Psychopathology: Definitions of Abnormality',
      'Psychopathology: Phobias, Depression, OCD',
      'Psychopathology: Treatments (CBT, Systematic Desensitisation, Drug Therapy)',
    ],
    'Paper 2: Psychology in Context': [
      'Approaches: Origins of Psychology',
      'Approaches: The Behaviourist Approach',
      'Approaches: Social Learning Theory',
      'Approaches: The Cognitive Approach',
      'Approaches: Biological Approach',
      'Approaches: Psychodynamic Approach',
      'Approaches: Humanistic Psychology',
      'Biopsychology: The Nervous System',
      'Biopsychology: Neurons & Synaptic Transmission',
      'Biopsychology: The Endocrine System',
      'Biopsychology: Fight or Flight',
      'Biopsychology: Localisation of Brain Function',
      'Biopsychology: Ways of Studying the Brain',
      'Biopsychology: Biological Rhythms',
      'Research Methods: Experiments (Lab, Field, Natural)',
      'Research Methods: Observational Techniques',
      'Research Methods: Self-Report Techniques',
      'Research Methods: Correlations',
      'Research Methods: Data Handling & Descriptive Statistics',
      'Research Methods: Inferential Statistics',
      'Research Methods: Ethical Issues',
    ],
    'Paper 3: Issues & Options': [
      'Issues & Debates: Gender & Culture in Psychology',
      'Issues & Debates: Free Will vs Determinism',
      'Issues & Debates: Nature vs Nurture',
      'Issues & Debates: Holism vs Reductionism',
      'Issues & Debates: Idiographic vs Nomothetic',
      'Issues & Debates: Ethical Implications of Research',
      'Options: Relationships / Forensic Psychology / Eating Behaviour / Stress / Aggression / Schizophrenia / Cognition & Development',
    ],
  },

  // ── AQA A-LEVEL MATHEMATICS ───────────────────────────────────────────────
  'AQA-Mathematics-A-Level': {
    'Paper 1 & 2: Pure Mathematics': [
      'Proof: Deductive Proof, Proof by Contradiction, Disproof by Counter-Example',
      'Algebra & Functions: Indices, Surds, Quadratics',
      'Algebra & Functions: Factor & Remainder Theorems',
      'Algebra & Functions: Partial Fractions',
      'Algebra & Functions: Modulus Function',
      'Coordinate Geometry: Straight Lines, Circles',
      'Sequences & Series: Binomial Expansion',
      'Sequences & Series: Arithmetic & Geometric Sequences',
      'Trigonometry: Sine & Cosine Rules',
      'Trigonometry: Radians, Arcs, Sectors',
      'Trigonometry: Trigonometric Identities',
      'Trigonometry: Small Angle Approximations',
      'Exponentials & Logarithms',
      'Differentiation: From First Principles',
      'Differentiation: Product, Quotient & Chain Rules',
      'Differentiation: Implicit Differentiation',
      'Integration: Definite & Indefinite',
      'Integration: Integration by Parts & Substitution',
      'Numerical Methods: Newton-Raphson, Iteration',
      'Vectors in 2D & 3D',
    ],
    'Paper 3: Statistics & Mechanics': [
      'Statistics: Statistical Sampling',
      'Statistics: Data Presentation & Interpretation',
      'Statistics: Probability',
      'Statistics: Statistical Distributions (Binomial, Normal)',
      'Statistics: Statistical Hypothesis Testing',
      'Mechanics: Quantities & Units',
      'Mechanics: Kinematics (SUVAT)',
      'Mechanics: Forces & Newton\'s Laws',
      'Mechanics: Moments',
      'Mechanics: Projectiles',
    ],
  },

  // ── AQA A-LEVEL BIOLOGY ───────────────────────────────────────────────────
  'AQA-Biology-A-Level': {
    'Paper 1': [
      '1 – Biological Molecules: Water & Carbohydrates',
      '1 – Biological Molecules: Lipids',
      '1 – Biological Molecules: Proteins',
      '1 – Biological Molecules: Nucleic Acids',
      '1 – Biological Molecules: ATP, Water, Inorganic Ions',
      '2 – Cells: Cell Structure (Eukaryotic & Prokaryotic)',
      '2 – Cells: Cell Division (Mitosis & Meiosis)',
      '2 – Cells: Transport Across Cell Membranes',
      '3 – Organisms Exchange Substances with Environment: Surface Area to Volume Ratio',
      '3 – Gas Exchange Systems',
      '3 – Digestion & Absorption',
      '3 – Mass Transport in Animals (Blood, Heart)',
      '3 – Mass Transport in Plants (Xylem, Phloem)',
      '4 – Genetic Information: DNA Structure',
      '4 – Genetic Information: Transcription & Translation',
      '4 – Genetic Information: Mutations',
    ],
    'Paper 2': [
      '5 – Energy Transfers: Photosynthesis (Light-Dependent & Light-Independent Reactions)',
      '5 – Energy Transfers: Respiration (Glycolysis, Krebs Cycle, Oxidative Phosphorylation)',
      '6 – Organisms Respond to Changes: Nervous System',
      '6 – Organisms Respond: Receptors & Effectors',
      '6 – Organisms Respond: Muscles',
      '6 – Organisms Respond: Homeostasis (Blood Glucose, Temperature, Water)',
      '7 – Genetics & Populations: Inheritance',
      '7 – Genetics & Populations: Genetic Diversity & Adaptation',
      '7 – Genetics & Populations: Species & Taxonomy',
      '7 – Genetics & Populations: Populations & Evolution',
      '7 – Genetics & Populations: Ecosystems',
      '7 – Genetics & Populations: Nutrient Cycles',
      '7 – Genetics & Populations: Populations in Ecosystems',
    ],
    'Paper 3': [
      '8 – The Control of Gene Expression: Mutations & Variation',
      '8 – Gene Expression: Totipotency & Stem Cells',
      '8 – Gene Expression: Epigenetics',
      '8 – Gene Expression: Gene Technology',
      'Synoptic Questions across all topics',
      'Practical Skills Assessment',
    ],
  },

  // ── AQA A-LEVEL CHEMISTRY ─────────────────────────────────────────────────
  'AQA-Chemistry-A-Level': {
    'Paper 1': [
      '1 – Physical Chemistry: Atomic Structure',
      '1 – Physical Chemistry: Bonding',
      '1 – Physical Chemistry: Energetics',
      '1 – Physical Chemistry: Kinetics',
      '1 – Physical Chemistry: Equilibria',
      '1 – Physical Chemistry: Redox',
      '2 – Inorganic Chemistry: Periodicity',
      '2 – Inorganic Chemistry: Group 2',
      '2 – Inorganic Chemistry: Group 7',
      '3 – Organic Chemistry: Introduction & Alkanes',
      '3 – Organic Chemistry: Halogenoalkanes',
      '3 – Organic Chemistry: Alkenes',
      '3 – Organic Chemistry: Alcohols',
      '3 – Organic Chemistry: Organic Analysis',
    ],
    'Paper 2': [
      '1 – Physical Chemistry: Thermodynamics',
      '1 – Physical Chemistry: Rate Equations',
      '1 – Physical Chemistry: Equilibrium Constant (Kp)',
      '1 – Physical Chemistry: Electrode Potentials',
      '1 – Physical Chemistry: Acids & Bases',
      '2 – Inorganic Chemistry: Properties of Period 3',
      '2 – Inorganic Chemistry: Transition Metals',
      '2 – Inorganic Chemistry: Reactions of Aqueous Ions',
      '3 – Organic Chemistry: Optical Isomerism',
      '3 – Organic Chemistry: Aldehydes & Ketones',
      '3 – Organic Chemistry: Carboxylic Acids & Derivatives',
      '3 – Organic Chemistry: Aromatic Chemistry',
      '3 – Organic Chemistry: Amines',
      '3 – Organic Chemistry: Polymers',
      '3 – Organic Chemistry: Amino Acids, Proteins & DNA',
      '3 – Organic Chemistry: Organic Synthesis',
      '3 – Organic Chemistry: NMR Spectroscopy',
      '3 – Organic Chemistry: Chromatography',
    ],
    'Paper 3': [
      'Synoptic Questions: All Physical, Inorganic & Organic Topics',
      'Practical Skills: Required Practicals Assessment',
    ],
  },

  // ── AQA A-LEVEL PHYSICS ───────────────────────────────────────────────────
  'AQA-Physics-A-Level': {
    'Paper 1': [
      '1 – Measurements & their Errors',
      '2 – Particles & Radiation: Atomic Structure',
      '2 – Particles & Radiation: Fundamental Particles',
      '2 – Particles & Radiation: Electromagnetic Radiation & Quantum Phenomena',
      '3 – Waves: Progressive & Stationary Waves',
      '3 – Waves: Refraction, Diffraction, Interference',
      '4 – Mechanics & Energy: Force, Energy & Momentum',
      '4 – Mechanics & Energy: Circular Motion',
      '5 – Electricity: Current, Resistance & Potential Difference',
      '5 – Electricity: DC Circuits',
    ],
    'Paper 2': [
      '6 – Further Mechanics & Thermal Physics: Periodic Motion (SHM)',
      '6 – Further Mechanics & Thermal Physics: Thermal Physics',
      '7 – Fields & their Consequences: Gravitational Fields',
      '7 – Fields & their Consequences: Electric Fields',
      '7 – Fields & their Consequences: Magnetic Fields',
      '7 – Fields & their Consequences: Electromagnetic Induction',
      '8 – Nuclear Physics: Radioactive Decay',
      '8 – Nuclear Physics: Nuclear Instability',
      '8 – Nuclear Physics: Nuclear Radius',
      '8 – Nuclear Physics: Mass & Energy',
      '8 – Nuclear Physics: Induced Fission',
    ],
    'Paper 3': [
      'Section A: Practical Skills & Data Analysis',
      'Section B: Optional Topic (Astrophysics / Medical Physics / Engineering Physics / Turning Points)',
    ],
  },

  // ── AQA A-LEVEL ENGLISH LITERATURE ────────────────────────────────────────
  'AQA-English Literature-A-Level': {
    'Paper 1: Love Through the Ages': [
      'Shakespeare Play (e.g. Othello, The Taming of the Shrew)',
      'Pre-1900 Poetry: Chaucer/Other Pre-1900 Poet',
      'Post-1900 Poetry Collection',
    ],
    'Paper 2: Texts in Shared Contexts': [
      'Prose: WWI & its Aftermath (e.g. Regeneration, All Quiet on the Western Front)',
      'Poetry: WWI Poetry (Owen, Sassoon, Rosenberg)',
      'Drama: Modern Times (Post-1945)',
    ],
  },

  // ── AQA A-LEVEL HISTORY ───────────────────────────────────────────────────
  'AQA-History-A-Level': {
    'Component 1: Breadth Study': [
      'Religious Conflict & the Church (1529-1570)',
      'Stuart Britain & the Crisis of Monarchy (1603-1702)',
      'International Relations & Global Conflict (20th Century)',
      'Russia (1855-1964)',
    ],
    'Component 2: Depth Study': [
      'The Tudors: England 1485-1603',
      'The Cold War (1945-1991)',
      'The Weimar Republic & the Third Reich (1919-1945)',
    ],
    'Component 3: Historical Investigation (NEA)': [
      'Independent Research & Essay',
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Get exam dates for a subject/board/qualification */
export function getExamDates(board, subject, qualification) {
  return EXAM_DATES_2026.find(
    e => e.board === board && e.subject === subject && e.qualification === qualification
  ) || null
}

/** Get paper structure (maxMarks, boundaries) for a subject */
export function getPaperStructure(board, subject, qualification, tier = '') {
  const key = tier
    ? `${board}-${subject}-${qualification}-${tier}`
    : `${board}-${subject}-${qualification}`
  return PAPER_STRUCTURES[key] || PAPER_STRUCTURES[`${board}-${subject}-${qualification}`] || null
}

/** Get spec topics for a subject */
export function getSpecTopics(board, subject, qualification) {
  const key = `${board}-${subject}-${qualification}`
  return SPEC_TOPICS[key] || null
}

/** Check if a subject is offered by a board */
export function boardOffersSubject(board, subject, qualification) {
  const q = qualification === 'GCSE' ? 'GCSE' :
            qualification === 'A-Level' ? 'ALEVEL' :
            qualification === 'IGCSE' ? 'IGCSE' : 'GCSE'
  const boardSubjects = BOARD_SUBJECTS[board]?.[q] || []
  return boardSubjects.includes(subject)
}

/** Get grading system for a subject */
export function getGradingSystem(board, subject, qualification) {
  const dates = getExamDates(board, subject, qualification)
  if (dates?.gradingSystem) return GRADING_SYSTEMS[dates.gradingSystem]
  if (qualification === 'A-Level') return GRADING_SYSTEMS.ALEVEL
  if (subject.startsWith('Combined Science')) return GRADING_SYSTEMS.GCSE_COMBINED
  return GRADING_SYSTEMS.GCSE_STANDARD
}

/** Get all grades for a grading system */
export function getGrades(board, subject, qualification) {
  return getGradingSystem(board, subject, qualification).grades
}

export const AVAILABLE_YEARS_GCSE = [2024, 2023, 2022, 2019, 2018]
export const AVAILABLE_YEARS_ALEVEL = [2024, 2023, 2022, 2019, 2018]
// Note: No summer 2020 or 2021 exams were held (teacher-assessed grades due to COVID-19)

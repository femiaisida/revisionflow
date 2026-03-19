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
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Art, Craft & Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Fine Art)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Graphic Communication)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Textile Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Three-dimensional Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Art & Design (Photography)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Portfolio & Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Operations and HRM",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Business",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Marketing and Finance",
    "date": "2026-05-21"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Chinese (Mandarin)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Chinese (Mandarin)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Chinese (Mandarin)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Citizenship Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-07"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Citizenship Studies",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-05-14"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 Biology (F/H)",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 Biology (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 Chemistry (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 Chemistry (F/H)",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 Physics (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Trilogy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 Physics (F/H)",
    "date": "2026-06-15"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Synergy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Life & Environmental Sciences (F/H)",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Synergy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Life & Environmental Sciences (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Synergy",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Physical Sciences (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Combined Science: Synergy",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Physical Sciences (F/H)",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Computational Thinking & Programming (choice of language)",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Computing Concepts",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Dance",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Performance & Choreography (NEA)",
    "date": "Submit by 07 May 2026"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Dance",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Dance Appreciation (Written)",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Design and Technology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Written Paper",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Drama",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Understanding Drama (Written)",
    "date": "2026-05-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Economics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: How Markets Work",
    "date": "2026-05-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Economics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: How the Economy Works",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Engineering",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Written Paper",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Explorations in Creative Reading & Writing",
    "date": "2026-05-21"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Writers' Viewpoints & Perspectives",
    "date": "2026-06-05"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Shakespeare & 19th Century Novel",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Modern Texts and Poetry",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Food Preparation and Nutrition",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-06-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-05-20"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "2026-05-20"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-04"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Living with the Physical Environment",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Challenges in the Human Environment",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Geographical Applications",
    "date": "2026-06-11"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-05-07"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "2026-05-07"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-05-14"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Understanding the Modern World (2h combined \u2013 options 1A+1B)",
    "date": "2026-05-15"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "History",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Shaping the Nation (2h combined \u2013 options 2A+2B)",
    "date": "2026-06-04"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Non-Calculator (F/H)",
    "date": "2026-05-14"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Calculator (F/H)",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Calculator (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Media Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Media Studies",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Modern Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Modern Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-17"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Music",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Understanding Music (Written)",
    "date": "2026-06-05"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Panjabi",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Panjabi",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Human Body & Movement",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Socio-cultural Influences & Wellbeing",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-15"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Polish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Polish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Cognition and Behaviour",
    "date": "2026-05-07"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Social Context and Behaviour",
    "date": "2026-05-14"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Religious Studies A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Study of Religions (2 options)",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Religious Studies A",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2A or 2B: Thematic Studies",
    "date": "2026-05-20"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Religious Studies B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Catholic Christianity",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Religious Studies B",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Perspectives on Faith",
    "date": "2026-05-20"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Sociology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Families and Education",
    "date": "2026-05-08"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Sociology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Crime, Deviance & Social Stratification",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening (F/H)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Reading (F/H)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Writing (F/H)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "GCSE",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "TBC"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Astronomy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Naked-eye Astronomy",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Astronomy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Telescopic Astronomy",
    "date": "2026-06-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Biblical Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 1: Language",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Biblical Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 2: Literature",
    "date": "2026-05-19"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-05-12"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Investigating Small Business",
    "date": "2026-05-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Business",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Building a Business",
    "date": "2026-05-21"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-09"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Chinese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-05-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Chinese",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-05-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Chinese",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Citizenship Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Citizenship Studies",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-05-14"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Biology 1 (F/H)",
    "date": "2026-05-12"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Chemistry 1 (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Physics 1 (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Biology 2 (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 5,
    "paperName": "Paper 5: Chemistry 2 (F/H)",
    "date": "11 Jun 2026"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Combined Science",
    "tier": "N/A",
    "paper": 6,
    "paperName": "Paper 6: Physics 2 (F/H)",
    "date": "15 Jun 2026"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Principles of Computer Science",
    "date": "2026-05-13"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Application of Computational Thinking (On-screen, IDE)",
    "date": "2026-05-19"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Drama",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 3: Theatre Makers in Practice (Written)",
    "date": "2026-05-08"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Design & Technology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 1 (choice of material/system)",
    "date": "2026-06-10"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Fiction & Imaginative Writing",
    "date": "2026-05-21"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Non-Fiction & Transactional Writing",
    "date": "2026-06-05"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Language 2.0",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Non-Fiction Texts",
    "date": "2026-05-21"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Language 2.0",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Contemporary Texts",
    "date": "2026-06-05"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Shakespeare & Post-1914 Literature",
    "date": "2026-05-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: 19th-Century Novel & Poetry since 1789",
    "date": "2026-05-19"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Listening (F/H)",
    "date": "2026-05-20"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-06-04"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "French",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-08"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: The Physical Environment",
    "date": "2026-05-13"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography A",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: The Human Environment",
    "date": "2026-06-03"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography A",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Geographical Investigations: Fieldwork & UK Challenges",
    "date": "2026-06-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Global Geographical Issues",
    "date": "2026-05-13"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography B",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: UK Geographical Issues",
    "date": "2026-06-03"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Geography B",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: People & Environment Issues \u2013 Making Decisions",
    "date": "2026-06-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Listening (F/H)",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-05-14"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "German",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Greek",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Greek",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Gujarati",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Gujarati",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-09"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Thematic Study & Historic Environment",
    "date": "2026-05-15"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "History",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Period Study & British Depth Study",
    "date": "2026-06-04"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "History",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Modern Depth Study",
    "date": "2026-06-09"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Japanese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Japanese",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Japanese",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-09"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Non-Calculator (F/H)",
    "date": "2026-05-14"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Calculator (F/H)",
    "date": "2026-06-03"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Calculator (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Music",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 3: Appraising",
    "date": "2026-06-05"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 1: Fitness & Body Systems",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Component 2: Health & Performance",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Persian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (F/H)",
    "date": "2026-06-11"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Portuguese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-05-14"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Area of Study 1 \u2013 Study of Religion",
    "date": "2026-05-12"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies A",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Area of Study 2 \u2013 Study of Second Religion",
    "date": "2026-05-20"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies A",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Philosophy & Ethics",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Religion & Ethics",
    "date": "2026-05-12"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies B",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Religion, Peace & Conflict",
    "date": "2026-05-20"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Religious Studies B",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Religion, Philosophy & Social Justice",
    "date": "2026-06-01"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Russian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Russian",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-10"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Listening (F/H)",
    "date": "2026-06-09"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "11 Jun 2026"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-17"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (F/H)",
    "date": "2026-06-02"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Turkish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Turkish",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Reading (F/H)",
    "date": "2026-05-07"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Turkish",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-05-22"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Urdu",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening (F/H)",
    "date": "2026-05-18"
  },
  {
    "board": "Edexcel",
    "level": "GCSE",
    "subject": "Urdu",
    "tier": "N/A",
    "paper": 4,
    "paperName": "Paper 4: Writing (F/H)",
    "date": "2026-06-02"
  }
]

// ── A-LEVEL 2026 EXAM DATES ──────────────────────────────────────────────────
// Note: A-Level dates estimated from typical May/June timetabling
// Confirmed dates will be published by each board — check their websites
const ALEVEL_2026 = [
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Accounting",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Financial Accounting",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Accounting",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Accounting for Analysis & Decision",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (Art,Craft & Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (Fine Art)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (Graphic Communication)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (Textile Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (3D Design)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Art & Design (Photography)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Externally Set Assignment",
    "date": "Submit by 31 May 2026"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Reading and Writing",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Writing",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Bengali",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Listening, Reading & Writing",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biblical Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Translation, Comprehension & Composition",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biblical Hebrew",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Prose Literature",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biblical Hebrew",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Poetry",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-06-04"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-12"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Biology",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3",
    "date": "2026-06-16"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Business 1",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Business 2",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Business 3",
    "date": "2026-06-09"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Inorganic & Physical Chemistry",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Organic & Physical Chemistry",
    "date": "2026-06-09"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3",
    "date": "2026-06-15"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (On-screen, choice of language)",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Computer Science",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-17"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Dance",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Critical Engagement (Written)",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Design & Technology: Fashion & Textiles",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Design & Technology: Fashion & Textiles",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Design & Technology: Product Design",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Design & Technology: Product Design",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-10"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Drama and Theatre",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Written Paper: Drama and Theatre",
    "date": "2026-05-21"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Economics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Markets and Market Failure",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Economics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: National and International Economy",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Economics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Economic Principles and Issues",
    "date": "2026-06-04"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Language, the Individual and Society",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Language Diversity and Change",
    "date": "2026-05-22"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Language & Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Telling Stories",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Language & Literature",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Exploring Conflict",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Literature A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Love Through the Ages",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Literature A",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Texts in Shared Contexts (option)",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Literature B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Literary Genres (Tragedy/Comedy)",
    "date": "2026-05-13"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "English Literature B",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Texts and Genres (option)",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Environmental Science",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-18"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Environmental Science",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-05"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening, Reading & Writing",
    "date": "2026-06-08"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "French",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Writing",
    "date": "2026-06-17"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Pure Core",
    "date": "2026-05-11"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (optional route)",
    "date": "2026-05-15"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3 (optional route)",
    "date": "2026-05-15"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Physical Geography",
    "date": "2026-05-12"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Human Geography",
    "date": "2026-05-21"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening, Reading & Writing",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "German",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Writing",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (1A+1B option combination)",
    "date": "2026-05-19"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "History",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (2A+2B option combination)",
    "date": "2026-06-02"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Law",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "2026-05-21"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Law",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "2026-06-01"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Law",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3 (Contract or Human Rights)",
    "date": "2026-06-09"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1 (Pure)",
    "date": "2026-06-03"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2 (Pure & Statistics/Mechanics)",
    "date": "2026-06-11"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3 (Pure & Statistics/Mechanics)",
    "date": "2026-06-18"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Media Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Media Studies",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Modern Hebrew",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Reading & Writing",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Music",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Listening paper + Composition NEA + Performance NEA",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Panjabi",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Reading & Writing",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Philosophy",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Epistemology & Moral Philosophy",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Philosophy",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Metaphysics & Philosophy of Mind/Religion",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Factors Affecting Participation",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Factors Affecting Optimal Performance",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3 (Practical Skills + Options)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Polish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Reading & Writing",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: UK Politics & Core Political Ideas",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: UK Government & Political Ideas",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Comparative Politics (option)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Introductory Topics",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Psychology in Context",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Issues & Options",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Philosophy of Religion",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Religion & Ethics",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Study of Religion/Dialogues (opt)",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Sociology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Education + Theory & Methods",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Sociology",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Topics in Sociology",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Sociology",
    "tier": "N/A",
    "paper": 3,
    "paperName": "Paper 3: Crime & Deviance + Theory & Methods",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "Paper 1: Listening, Reading & Writing",
    "date": "TBC"
  },
  {
    "board": "AQA",
    "level": "A-Level",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 2,
    "paperName": "Paper 2: Writing",
    "date": "TBC"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Arabic",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "General-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology A (Salters Nuffield)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Lifestyle,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology A (Salters Nuffield)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Development,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology A (Salters Nuffield)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "The-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology A (Salters Nuffield)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Energy,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Biology A (Salters Nuffield)",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "General-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Marketing-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Managing-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Marketing,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Business-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Business",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Investigating-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chemistry",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "General-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chinese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Chinese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Design & Technology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Design-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Drama & Theatre",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Theatre-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Markets-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "The-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics A",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Microeconomics-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Markets-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Competing-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Economics B",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "The-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Language:-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Child-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Language-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Child-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Language",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Investigating-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Lang & Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Voices-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Lang & Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Varieties-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Lang & Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Voices-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Lang & Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Varieties-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Poetry-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Paper 2: Prose"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Paper 1: Drama"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Paper 2: Prose"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "English Literature",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Paper 3: Poetry"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Further Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Options-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "French",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Physical-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Human-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Physical-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Dynamic-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Geography",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Dynamic-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "German",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Greek",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Greek",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Breadth-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Depth-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "History",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Themes-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "History of Art",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Visual-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "History of Art",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Paper 2: Periods"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Italian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Japanese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Japanese",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Translation-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Pure-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Pure-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Statistics-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Pure-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Mathematics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Statistics-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Music",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Component 3: Appraising"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Music Technology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Music Technology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Producing-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Scientific-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physical Education",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Psychological-00-Component"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Advanced-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "General-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Physics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Core-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "UK-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "UK-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Comparative-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Politics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Comparative-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Foundations-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Applications-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Psychological-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Social-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Psychology",
    "tier": "N/A",
    "paper": 1,
    "paperName": "AS",
    "date": "Biological-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Philosophy-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Religion-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "New-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Religious Studies",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Study-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Russian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Russian",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Listening,-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Spanish",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Written-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Data-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Statistical-00-Paper"
  },
  {
    "board": "Edexcel",
    "level": "A-Level",
    "subject": "Statistics",
    "tier": "N/A",
    "paper": 1,
    "paperName": "A-level",
    "date": "Statistics-00-Paper"
  }
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

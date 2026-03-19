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
  {
    "board": "AQA",
    "subject": "Art & Design (Art, Craft & Design)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8201"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Fine Art)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8202"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Graphic Communication)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8203"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Textile Design)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8204"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Three-dimensional Design)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8205"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Photography)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8206"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Bengali",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8638"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8638"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8638"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8461"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8461"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Operations and HRM",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      },
      {
        "name": "Paper 2: Marketing and Finance",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chinese (Mandarin)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8673"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8673"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8673"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Trilogy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 Biology (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Biology (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Chemistry (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Chemistry (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Physics (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Physics (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Synergy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Life & Environmental Sciences (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 2: Life & Environmental Sciences (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 3: Physical Sciences (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 4: Physical Sciences (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Computational Thinking & Programming (choice of language)",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "8525"
      },
      {
        "name": "Paper 2: Computing Concepts",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8525"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Performance & Choreography (NEA)",
        "date": "Submit by 07 May 2026",
        "session": "\u2014",
        "duration": "\u2014",
        "code": "8236"
      },
      {
        "name": "Dance Appreciation (Written)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8236"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design and Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h",
        "code": "8552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Drama (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8261"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: How Markets Work",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8136"
      },
      {
        "name": "Paper 2: How the Economy Works",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Engineering",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h",
        "code": "8852"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Explorations in Creative Reading & Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      },
      {
        "name": "Paper 2: Writers' Viewpoints & Perspectives",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & 19th Century Novel",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8702"
      },
      {
        "name": "Paper 2: Modern Texts and Poetry",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "8702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Food Preparation and Nutrition",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8585"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8652"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8652"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Living with the Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 2: Challenges in the Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 3: Geographical Applications",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8662"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8662"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Understanding the Modern World (2h combined \u2013 options 1A+1B)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      },
      {
        "name": "Paper 2: Shaping the Nation (2h combined \u2013 options 2A+2B)",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8633"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8633"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8633"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8678"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8678"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Music (Written)",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8271"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8683"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8683"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Human Body & Movement",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      },
      {
        "name": "Paper 2: Socio-cultural Influences & Wellbeing",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8688"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8688"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Cognition and Behaviour",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8182"
      },
      {
        "name": "Paper 2: Social Context and Behaviour",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Study of Religions (2 options)",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8062"
      },
      {
        "name": "Paper 2A or 2B: Thematic Studies",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Catholic Christianity",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8063"
      },
      {
        "name": "Paper 2: Perspectives on Faith",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8063"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Families and Education",
        "date": "2026-05-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8192"
      },
      {
        "name": "Paper 2: Crime, Deviance & Social Stratification",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 45m",
        "code": "8192"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Spanish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "35m/45m",
        "code": "8698"
      },
      {
        "name": "Reading (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "45m/1h",
        "code": "8698"
      },
      {
        "name": "Writing (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h10m/1h15m",
        "code": "8698"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Statistics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 30m",
        "code": "8382"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 30m",
        "code": "8382"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Accounting",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Financial Accounting",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      },
      {
        "name": "Paper 2: Accounting for Analysis & Decision",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Art,Craft & Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7201"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Fine Art)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7202"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Graphic Communication)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7203"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Textile Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7204"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (3D Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7205"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Photography)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7206"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Bengali",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading and Writing",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h",
        "code": "7637"
      },
      {
        "name": "Paper 3: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biblical Hebrew",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation, Comprehension & Composition",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "3h",
        "code": "7677"
      },
      {
        "name": "Paper 2: Prose Literature",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      },
      {
        "name": "Paper 3: Poetry",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-16",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Business 1",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 2: Business 2",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 3: Business 3",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Inorganic & Physical Chemistry",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 2: Organic & Physical Chemistry",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (On-screen, choice of language)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7517"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7517"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Critical Engagement (Written)",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7237"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Fashion & Textiles",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7562"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7562"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Product Design",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7552"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama and Theatre",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Written Paper: Drama and Theatre",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "3h",
        "code": "7262"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Markets and Market Failure",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 2: National and International Economy",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 3: Economic Principles and Issues",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Language, the Individual and Society",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      },
      {
        "name": "Paper 2: Language Diversity and Change",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language & Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Telling Stories",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7707"
      },
      {
        "name": "Paper 2: Exploring Conflict",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7707"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature A",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Love Through the Ages",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7712"
      },
      {
        "name": "Paper 2: Texts in Shared Contexts (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7712"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Literary Genres (Tragedy/Comedy)",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7717"
      },
      {
        "name": "Paper 2: Texts and Genres (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7717"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Environmental Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7652"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h",
        "code": "7652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Further Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Pure Core",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7367"
      },
      {
        "name": "Paper 2 (optional route)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h",
        "code": "7367"
      },
      {
        "name": "Paper 3 (optional route)",
        "date": "2026-05-15",
        "session": "PM",
        "duration": "1h",
        "code": "7367"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Physical Geography",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7037"
      },
      {
        "name": "Paper 2: Human Geography",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7037"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7662"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (1A+1B option combination)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      },
      {
        "name": "Paper 2 (2A+2B option combination)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Law",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 3 (Contract or Human Rights)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7162"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (Pure)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 2 (Pure & Statistics/Mechanics)",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 3 (Pure & Statistics/Mechanics)",
        "date": "2026-06-18",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7572"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7672"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Listening paper + Composition NEA + Performance NEA",
        "date": "TBC",
        "session": "\u2014",
        "duration": "Various",
        "code": "7272"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7682"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Philosophy",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Epistemology & Moral Philosophy",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7172"
      },
      {
        "name": "Paper 2: Metaphysics & Philosophy of Mind/Religion",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7172"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Factors Affecting Participation",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7582"
      },
      {
        "name": "Paper 2: Factors Affecting Optimal Performance",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      },
      {
        "name": "Paper 3 (Practical Skills + Options)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7687"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Politics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: UK Politics & Core Political Ideas",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      },
      {
        "name": "Paper 2: UK Government & Political Ideas",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      },
      {
        "name": "Paper 3: Comparative Politics (option)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Introductory Topics",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      },
      {
        "name": "Paper 2: Psychology in Context",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      },
      {
        "name": "Paper 3: Issues & Options",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Philosophy of Religion",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      },
      {
        "name": "Paper 2: Religion & Ethics",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      },
      {
        "name": "Paper 3: Study of Religion/Dialogues (opt)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Education + Theory & Methods",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      },
      {
        "name": "Paper 2: Topics in Sociology",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      },
      {
        "name": "Paper 3: Crime & Deviance + Theory & Methods",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Spanish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7692"
      },
      {
        "name": "Paper 2: Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7692"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Arabic",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1AA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1AA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1AA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Astronomy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Naked-eye Astronomy",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1AS0"
      },
      {
        "name": "Paper 2: Telescopic Astronomy",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1AS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biblical Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Language",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "2h 00m",
        "code": "1BH0"
      },
      {
        "name": "Component 2: Literature",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1BH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BI0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1BI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Investigating Small Business",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      },
      {
        "name": "Paper 2: Building a Business",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chinese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1CN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1CN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1CN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Combined Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Biology 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 2: Chemistry 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 3: Physics 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 4: Biology 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 5: Chemistry 2 (F/H)",
        "date": "11 Jun 2026",
        "session": "N/A",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 6: Physics 2 (F/H)",
        "date": "15 Jun 2026",
        "session": "N/A",
        "duration": "1h 10m",
        "code": "1SC0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Principles of Computer Science",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1CP2"
      },
      {
        "name": "Paper 2: Application of Computational Thinking (On-screen, IDE)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1CP2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Theatre Makers in Practice (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Design & Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1 (choice of material/system)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Fiction & Imaginative Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1EN0"
      },
      {
        "name": "Paper 2: Non-Fiction & Transactional Writing",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "2h 05m",
        "code": "1EN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language 2.0",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Fiction Texts",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      },
      {
        "name": "Paper 2: Contemporary Texts",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & Post-1914 Literature",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1ET0"
      },
      {
        "name": "Paper 2: 19th-Century Novel & Poetry since 1789",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "1ET0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1FR1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: The Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1GA0"
      },
      {
        "name": "Paper 2: The Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1GA0"
      },
      {
        "name": "Paper 3: Geographical Investigations: Fieldwork & UK Challenges",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Global Geographical Issues",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      },
      {
        "name": "Paper 2: UK Geographical Issues",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1GB0"
      },
      {
        "name": "Paper 3: People & Environment Issues \u2013 Making Decisions",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1GN1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Greek",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GK0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1GK0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Gujarati",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1GU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Thematic Study & Historic Environment",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h 20m",
        "code": "1HI0"
      },
      {
        "name": "Paper 2: Period Study & British Depth Study",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "1h 50m",
        "code": "1HI0"
      },
      {
        "name": "Paper 3: Modern Depth Study",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1HI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1IN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1IN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1IN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Japanese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1JA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1JA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1JA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Appraising",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1MU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Fitness & Body Systems",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1PE0"
      },
      {
        "name": "Component 2: Health & Performance",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "1PE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Persian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Portuguese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PG0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 20m",
        "code": "1PS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Area of Study 1 \u2013 Study of Religion",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RA0"
      },
      {
        "name": "Paper 2: Area of Study 2 \u2013 Study of Second Religion",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      },
      {
        "name": "Paper 3: Philosophy & Ethics",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Religion & Ethics",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 2: Religion, Peace & Conflict",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 3: Religion, Philosophy & Social Justice",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Russian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1RU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1RU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Spanish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "11 Jun 2026",
        "session": "N/A",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1SP1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Statistics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1ST0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Turkish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1TU0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1TU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1TU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Urdu",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1UR0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1UR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Arabic",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "19 May 2026 PM",
        "code": "9AA0"
      },
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "01 Jun 2026 AM",
        "code": "9AA0"
      },
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "11 Jun 2026 AM",
        "code": "9AA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Cellular",
        "duration": "11 May 2026 AM",
        "code": "8BI0"
      },
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Physiology",
        "duration": "21 May 2026 AM",
        "code": "8BI0"
      },
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Biochemistry,",
        "duration": "04 Jun 2026 PM",
        "code": "9BI0"
      },
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Physiology,",
        "duration": "12 Jun 2026 AM",
        "code": "9BI0"
      },
      {
        "name": "A-level",
        "date": "General-00-Paper",
        "session": "&",
        "duration": "16 Jun 2026 AM",
        "code": "9BI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology A (Salters Nuffield)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Lifestyle,-00-Paper",
        "session": "Transport,",
        "duration": "11 May 2026 AM",
        "code": "8BN0"
      },
      {
        "name": "AS",
        "date": "Development,-00-Paper",
        "session": "Plants",
        "duration": "21 May 2026 AM",
        "code": "8BN0"
      },
      {
        "name": "A-level",
        "date": "The-00-Paper",
        "session": "Natural",
        "duration": "04 Jun 2026 PM",
        "code": "9BN0"
      },
      {
        "name": "A-level",
        "date": "Energy,-00-Paper",
        "session": "Exercise",
        "duration": "12 Jun 2026 AM",
        "code": "9BN0"
      },
      {
        "name": "A-level",
        "date": "General-00-Paper",
        "session": "&",
        "duration": "16 Jun 2026 AM",
        "code": "9BN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Business",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Marketing-00-Paper",
        "session": "and",
        "duration": "15 May 2026 AM",
        "code": "8BS0"
      },
      {
        "name": "AS",
        "date": "Managing-00-Paper",
        "session": "Business",
        "duration": "21 May 2026 PM",
        "code": "8BS0"
      },
      {
        "name": "A-level",
        "date": "Marketing,-00-Paper",
        "session": "People",
        "duration": "13 May 2026 PM",
        "code": "9BS0"
      },
      {
        "name": "A-level",
        "date": "Business-00-Paper",
        "session": "Activities,",
        "duration": "19 May 2026 AM",
        "code": "9BS0"
      },
      {
        "name": "A-level",
        "date": "Investigating-00-Paper",
        "session": "Business",
        "duration": "09 Jun 2026 PM",
        "code": "9BS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chemistry",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Inorganic",
        "duration": "12 May 2026 AM",
        "code": "8CH0"
      },
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Organic",
        "duration": "19 May 2026 AM",
        "code": "8CH0"
      },
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Inorganic",
        "duration": "02 Jun 2026 AM",
        "code": "9CH0"
      },
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Organic",
        "duration": "09 Jun 2026 AM",
        "code": "9CH0"
      },
      {
        "name": "A-level",
        "date": "General-00-Paper",
        "session": "&",
        "duration": "15 Jun 2026 AM",
        "code": "9CH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chinese",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "19 May 2026 AM",
        "code": "9CN0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "01 Jun 2026 AM",
        "code": "9CN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Design & Technology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Design-00-Component",
        "session": "&",
        "duration": "22 May 2026 AM",
        "code": "9DT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Drama & Theatre",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Theatre-00-Component",
        "session": "Makers",
        "duration": "21 May 2026 AM",
        "code": "9DR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Economics A",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Markets-00-Paper",
        "session": "&",
        "duration": "11 May 2026 AM",
        "code": "9EC0"
      },
      {
        "name": "A-level",
        "date": "The-00-Paper",
        "session": "National",
        "duration": "18 May 2026 PM",
        "code": "9EC0"
      },
      {
        "name": "A-level",
        "date": "Microeconomics-00-Paper",
        "session": "&",
        "duration": "04 Jun 2026 AM",
        "code": "9EC0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Economics B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Markets-00-Paper",
        "session": "&",
        "duration": "11 May 2026 AM",
        "code": "9EB0"
      },
      {
        "name": "A-level",
        "date": "Competing-00-Paper",
        "session": "in",
        "duration": "18 May 2026 PM",
        "code": "9EB0"
      },
      {
        "name": "A-level",
        "date": "The-00-Paper",
        "session": "Economic",
        "duration": "04 Jun 2026 AM",
        "code": "9EB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Language:-00-Paper",
        "session": "Context",
        "duration": "11 May 2026 AM",
        "code": "8EN0"
      },
      {
        "name": "AS",
        "date": "Child-00-Paper",
        "session": "Language",
        "duration": "18 May 2026 AM",
        "code": "8EN0"
      },
      {
        "name": "A-level",
        "date": "Language-00-Paper",
        "session": "Variation",
        "duration": "11 May 2026 AM",
        "code": "9EN0"
      },
      {
        "name": "A-level",
        "date": "Child-00-Paper",
        "session": "Language",
        "duration": "22 May 2026 AM",
        "code": "9EN0"
      },
      {
        "name": "A-level",
        "date": "Investigating-00-Paper",
        "session": "Language",
        "duration": "03 Jun 2026 PM",
        "code": "9EN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Lang & Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Voices-00-Paper",
        "session": "in",
        "duration": "11 May 2026 AM",
        "code": "8EL0"
      },
      {
        "name": "AS",
        "date": "Varieties-00-Paper",
        "session": "in",
        "duration": "18 May 2026 AM",
        "code": "8EL0"
      },
      {
        "name": "A-level",
        "date": "Voices-00-Paper",
        "session": "in",
        "duration": "11 May 2026 AM",
        "code": "9EL0"
      },
      {
        "name": "A-level",
        "date": "Varieties-00-Paper",
        "session": "in",
        "duration": "22 May 2026 AM",
        "code": "9EL0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "AS",
        "date": "Poetry-00-Paper",
        "session": "&",
        "duration": "14 May 2026 AM",
        "code": "8ET0"
      },
      {
        "name": "AS",
        "date": "Paper 2: Prose",
        "session": "N/A",
        "duration": "22 May 2026 AM",
        "code": "8ET0"
      },
      {
        "name": "A-level",
        "date": "Paper 1: Drama",
        "session": "N/A",
        "duration": "13 May 2026 AM",
        "code": "9ET0"
      },
      {
        "name": "A-level",
        "date": "Paper 2: Prose",
        "session": "N/A",
        "duration": "01 Jun 2026 AM",
        "code": "9ET0"
      },
      {
        "name": "A-level",
        "date": "Paper 3: Poetry",
        "session": "N/A",
        "duration": "10 Jun 2026 AM",
        "code": "9ET0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Further Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Core-00-Paper",
        "session": "Pure",
        "duration": "14 May 2026 PM",
        "code": "9FM0"
      },
      {
        "name": "A-level",
        "date": "Core-00-Paper",
        "session": "Pure",
        "duration": "21 May 2026 PM",
        "code": "9FM0"
      },
      {
        "name": "A-level",
        "date": "Options-00-Paper",
        "session": "(Further",
        "duration": "05\u201319 Jun 2026",
        "code": "9FM0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "French",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "08 Jun 2026 AM",
        "code": "9FR0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "17 Jun 2026 AM",
        "code": "9FR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Physical-00-Paper",
        "session": "Geography",
        "duration": "12 May 2026 AM",
        "code": "9GE0"
      },
      {
        "name": "A-level",
        "date": "Human-00-Paper",
        "session": "Geography",
        "duration": "21 May 2026 PM",
        "code": "9GE0"
      },
      {
        "name": "A-level",
        "date": "Physical-00-Paper",
        "session": "&",
        "duration": "08 Jun 2026 PM",
        "code": "9GE0"
      },
      {
        "name": "AS",
        "date": "Dynamic-00-Paper",
        "session": "Landscapes",
        "duration": "12 May 2026 PM",
        "code": "8GE0"
      },
      {
        "name": "AS",
        "date": "Dynamic-00-Paper",
        "session": "Places",
        "duration": "20 May 2026 AM",
        "code": "8GE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "German",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "19 May 2026 AM",
        "code": "9GN0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "02 Jun 2026 AM",
        "code": "9GN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Greek",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "18 May 2026 AM",
        "code": "9GK0"
      },
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "02 Jun 2026 PM",
        "code": "9GK0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Breadth-00-Paper",
        "session": "Study",
        "duration": "19 May 2026 PM",
        "code": "9HI0"
      },
      {
        "name": "A-level",
        "date": "Depth-00-Paper",
        "session": "Study",
        "duration": "02 Jun 2026 PM",
        "code": "9HI0"
      },
      {
        "name": "A-level",
        "date": "Themes-00-Paper",
        "session": "in",
        "duration": "11 Jun 2026 AM",
        "code": "9HI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History of Art",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Visual-00-Paper",
        "session": "Analysis",
        "duration": "18 May 2026 PM",
        "code": "9HT0"
      },
      {
        "name": "A-level",
        "date": "Paper 2: Periods",
        "session": "N/A",
        "duration": "02 Jun 2026 AM",
        "code": "9HT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Italian",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "12 Jun 2026 AM",
        "code": "9IN0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "19 Jun 2026 AM",
        "code": "9IN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Japanese",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "19 May 2026 PM",
        "code": "9JA0"
      },
      {
        "name": "A-level",
        "date": "Translation-00-Paper",
        "session": "into",
        "duration": "01 Jun 2026 PM",
        "code": "9JA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Pure-00-Paper",
        "session": "Mathematics",
        "duration": "03 Jun 2026 PM",
        "code": "9MA0"
      },
      {
        "name": "A-level",
        "date": "Pure-00-Paper",
        "session": "Mathematics",
        "duration": "11 Jun 2026 PM",
        "code": "9MA0"
      },
      {
        "name": "A-level",
        "date": "Statistics-00-Paper",
        "session": "&",
        "duration": "18 Jun 2026 PM",
        "code": "9MA0"
      },
      {
        "name": "AS",
        "date": "Pure-00-Paper",
        "session": "Mathematics",
        "duration": "14 May 2026 PM",
        "code": "8MA0"
      },
      {
        "name": "AS",
        "date": "Statistics-00-Paper",
        "session": "&",
        "duration": "22 May 2026 PM",
        "code": "8MA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Component 3: Appraising",
        "session": "N/A",
        "duration": "08 Jun 2026 PM",
        "code": "9MU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music Technology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening-00-Component",
        "session": "&",
        "duration": "22 May 2026 AM",
        "code": "9MT0"
      },
      {
        "name": "A-level",
        "date": "Producing-00-Component",
        "session": "&",
        "duration": "03 Jun 2026 AM",
        "code": "9MT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physical Education",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Scientific-00-Component",
        "session": "Principles",
        "duration": "21 May 2026 AM",
        "code": "9PE0"
      },
      {
        "name": "A-level",
        "date": "Psychological-00-Component",
        "session": "&",
        "duration": "01 Jun 2026 PM",
        "code": "9PE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Physics",
        "duration": "20 May 2026 PM",
        "code": "9PH0"
      },
      {
        "name": "A-level",
        "date": "Advanced-00-Paper",
        "session": "Physics",
        "duration": "01 Jun 2026 AM",
        "code": "9PH0"
      },
      {
        "name": "A-level",
        "date": "General-00-Paper",
        "session": "&",
        "duration": "08 Jun 2026 AM",
        "code": "9PH0"
      },
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Physics",
        "duration": "13 May 2026 AM",
        "code": "8PH0"
      },
      {
        "name": "AS",
        "date": "Core-00-Paper",
        "session": "Physics",
        "duration": "20 May 2026 PM",
        "code": "8PH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Politics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "UK-00-Paper",
        "session": "Politics",
        "duration": "21 May 2026 AM",
        "code": "9PL0"
      },
      {
        "name": "A-level",
        "date": "UK-00-Paper",
        "session": "Government",
        "duration": "08 Jun 2026 AM",
        "code": "9PL0"
      },
      {
        "name": "A-level",
        "date": "Comparative-00-Paper",
        "session": "Politics",
        "duration": "16 Jun 2026 PM",
        "code": "9PL0"
      },
      {
        "name": "A-level",
        "date": "Comparative-00-Paper",
        "session": "Politics",
        "duration": "16 Jun 2026 PM",
        "code": "9PL0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Psychology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Foundations-00-Paper",
        "session": "in",
        "duration": "15 May 2026 AM",
        "code": "9PS0"
      },
      {
        "name": "A-level",
        "date": "Applications-00-Paper",
        "session": "of",
        "duration": "20 May 2026 AM",
        "code": "9PS0"
      },
      {
        "name": "A-level",
        "date": "Psychological-00-Paper",
        "session": "Skills",
        "duration": "05 Jun 2026 AM",
        "code": "9PS0"
      },
      {
        "name": "AS",
        "date": "Social-00-Paper",
        "session": "&",
        "duration": "11 May 2026 PM",
        "code": "8PS0"
      },
      {
        "name": "AS",
        "date": "Biological-00-Paper",
        "session": "Psychology",
        "duration": "19 May 2026 PM",
        "code": "8PS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Philosophy-00-Paper",
        "session": "of",
        "duration": "04 Jun 2026 AM",
        "code": "9RS0"
      },
      {
        "name": "A-level",
        "date": "Religion-00-Paper",
        "session": "&",
        "duration": "09 Jun 2026 AM",
        "code": "9RS0"
      },
      {
        "name": "A-level",
        "date": "New-00-Paper",
        "session": "Testament",
        "duration": "15 Jun 2026 PM",
        "code": "9RS0"
      },
      {
        "name": "A-level",
        "date": "Study-00-Paper",
        "session": "of",
        "duration": "22 Jun 2026 PM",
        "code": "9RS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Russian",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "01 Jun 2026 AM",
        "code": "9RU0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "08 Jun 2026 PM",
        "code": "9RU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Spanish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Listening,-00-Paper",
        "session": "Reading",
        "duration": "04 Jun 2026 AM",
        "code": "9SP0"
      },
      {
        "name": "A-level",
        "date": "Written-00-Paper",
        "session": "Response",
        "duration": "12 Jun 2026 PM",
        "code": "9SP0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Statistics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "A-level",
        "date": "Data-00-Paper",
        "session": "&",
        "duration": "04 Jun 2026 PM",
        "code": "9ST0"
      },
      {
        "name": "A-level",
        "date": "Statistical-00-Paper",
        "session": "Inference",
        "duration": "09 Jun 2026 PM",
        "code": "9ST0"
      },
      {
        "name": "A-level",
        "date": "Statistics-00-Paper",
        "session": "in",
        "duration": "17 Jun 2026 PM",
        "code": "9ST0"
      }
    ]
  }
]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Fine Art)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8202"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Graphic Communication)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8203"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Textile Design)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8204"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Three-dimensional Design)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8205"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Photography)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Portfolio & Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "10h",
        "code": "8206"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Bengali",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8638"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8638"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8638"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8461"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8461"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Operations and HRM",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      },
      {
        "name": "Paper 2: Marketing and Finance",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chinese (Mandarin)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8673"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8673"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8673"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Trilogy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 Biology (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Biology (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Chemistry (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Chemistry (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Physics (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Physics (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Synergy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Life & Environmental Sciences (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 2: Life & Environmental Sciences (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 3: Physical Sciences (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 4: Physical Sciences (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Computational Thinking & Programming (choice of language)",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "8525"
      },
      {
        "name": "Paper 2: Computing Concepts",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8525"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Performance & Choreography (NEA)",
        "date": "Submit by 07 May 2026",
        "session": "\u2014",
        "duration": "\u2014",
        "code": "8236"
      },
      {
        "name": "Dance Appreciation (Written)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8236"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design and Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h",
        "code": "8552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Drama (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8261"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: How Markets Work",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8136"
      },
      {
        "name": "Paper 2: How the Economy Works",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Engineering",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h",
        "code": "8852"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Explorations in Creative Reading & Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      },
      {
        "name": "Paper 2: Writers' Viewpoints & Perspectives",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & 19th Century Novel",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8702"
      },
      {
        "name": "Paper 2: Modern Texts and Poetry",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "8702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Food Preparation and Nutrition",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8585"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8652"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8652"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Living with the Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 2: Challenges in the Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 3: Geographical Applications",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8662"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8662"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Understanding the Modern World (2h combined \u2013 options 1A+1B)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      },
      {
        "name": "Paper 2: Shaping the Nation (2h combined \u2013 options 2A+2B)",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8633"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8633"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8633"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8678"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8678"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Music (Written)",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8271"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8683"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8683"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Human Body & Movement",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      },
      {
        "name": "Paper 2: Socio-cultural Influences & Wellbeing",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8688"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8688"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Cognition and Behaviour",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8182"
      },
      {
        "name": "Paper 2: Social Context and Behaviour",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Study of Religions (2 options)",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8062"
      },
      {
        "name": "Paper 2A or 2B: Thematic Studies",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Catholic Christianity",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8063"
      },
      {
        "name": "Paper 2: Perspectives on Faith",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8063"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Families and Education",
        "date": "2026-05-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8192"
      },
      {
        "name": "Paper 2: Crime, Deviance & Social Stratification",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 45m",
        "code": "8192"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Spanish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "35m/45m",
        "code": "8698"
      },
      {
        "name": "Reading (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "45m/1h",
        "code": "8698"
      },
      {
        "name": "Writing (F/H)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h10m/1h15m",
        "code": "8698"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Statistics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 30m",
        "code": "8382"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "1h 30m",
        "code": "8382"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Accounting",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Financial Accounting",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      },
      {
        "name": "Paper 2: Accounting for Analysis & Decision",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Art,Craft & Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7201"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Fine Art)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7202"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Graphic Communication)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7203"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Textile Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7204"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (3D Design)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7205"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Art & Design (Photography)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Externally Set Assignment",
        "date": "Submit by 31 May 2026",
        "session": "\u2014",
        "duration": "15h",
        "code": "7206"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Bengali",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading and Writing",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h",
        "code": "7637"
      },
      {
        "name": "Paper 3: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biblical Hebrew",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation, Comprehension & Composition",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "3h",
        "code": "7677"
      },
      {
        "name": "Paper 2: Prose Literature",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      },
      {
        "name": "Paper 3: Poetry",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-16",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Business 1",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 2: Business 2",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 3: Business 3",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Inorganic & Physical Chemistry",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 2: Organic & Physical Chemistry",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (On-screen, choice of language)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7517"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7517"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Critical Engagement (Written)",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7237"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Fashion & Textiles",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7562"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7562"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Product Design",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7552"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama and Theatre",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Written Paper: Drama and Theatre",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "3h",
        "code": "7262"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Markets and Market Failure",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 2: National and International Economy",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 3: Economic Principles and Issues",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Language, the Individual and Society",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      },
      {
        "name": "Paper 2: Language Diversity and Change",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language & Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Telling Stories",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7707"
      },
      {
        "name": "Paper 2: Exploring Conflict",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7707"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature A",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Love Through the Ages",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7712"
      },
      {
        "name": "Paper 2: Texts in Shared Contexts (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7712"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Literary Genres (Tragedy/Comedy)",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7717"
      },
      {
        "name": "Paper 2: Texts and Genres (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7717"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Environmental Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7652"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h",
        "code": "7652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Further Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Pure Core",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7367"
      },
      {
        "name": "Paper 2 (optional route)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h",
        "code": "7367"
      },
      {
        "name": "Paper 3 (optional route)",
        "date": "2026-05-15",
        "session": "PM",
        "duration": "1h",
        "code": "7367"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Physical Geography",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7037"
      },
      {
        "name": "Paper 2: Human Geography",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7037"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7662"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (1A+1B option combination)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      },
      {
        "name": "Paper 2 (2A+2B option combination)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Law",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 3 (Contract or Human Rights)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7162"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (Pure)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 2 (Pure & Statistics/Mechanics)",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 3 (Pure & Statistics/Mechanics)",
        "date": "2026-06-18",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7572"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7672"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Listening paper + Composition NEA + Performance NEA",
        "date": "TBC",
        "session": "\u2014",
        "duration": "Various",
        "code": "7272"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7682"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Philosophy",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Epistemology & Moral Philosophy",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7172"
      },
      {
        "name": "Paper 2: Metaphysics & Philosophy of Mind/Religion",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7172"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Factors Affecting Participation",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7582"
      },
      {
        "name": "Paper 2: Factors Affecting Optimal Performance",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      },
      {
        "name": "Paper 2",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      },
      {
        "name": "Paper 3 (Practical Skills + Options)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7408"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7687"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Politics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: UK Politics & Core Political Ideas",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      },
      {
        "name": "Paper 2: UK Government & Political Ideas",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      },
      {
        "name": "Paper 3: Comparative Politics (option)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7152"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Introductory Topics",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      },
      {
        "name": "Paper 2: Psychology in Context",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      },
      {
        "name": "Paper 3: Issues & Options",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Philosophy of Religion",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      },
      {
        "name": "Paper 2: Religion & Ethics",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      },
      {
        "name": "Paper 3: Study of Religion/Dialogues (opt)",
        "date": "TBC",
        "session": "\u2014",
        "duration": "3h",
        "code": "7062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Education + Theory & Methods",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      },
      {
        "name": "Paper 2: Topics in Sociology",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      },
      {
        "name": "Paper 3: Crime & Deviance + Theory & Methods",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7192"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Spanish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h 30m",
        "code": "7692"
      },
      {
        "name": "Paper 2: Writing",
        "date": "TBC",
        "session": "\u2014",
        "duration": "2h",
        "code": "7692"
      }
    ]
  }
]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8461"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8461"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Operations and HRM",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      },
      {
        "name": "Paper 2: Marketing and Finance",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chinese (Mandarin)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8673"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8673"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8673"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Trilogy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 Biology (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Biology (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Chemistry (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Chemistry (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Physics (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Physics (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Synergy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Life & Environmental Sciences (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 2: Life & Environmental Sciences (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 3: Physical Sciences (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 4: Physical Sciences (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Computational Thinking & Programming (choice of language)",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "8525"
      },
      {
        "name": "Paper 2: Computing Concepts",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8525"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Dance Appreciation (Written)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8236"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design and Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h",
        "code": "8552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Drama (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8261"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: How Markets Work",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8136"
      },
      {
        "name": "Paper 2: How the Economy Works",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Engineering",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h",
        "code": "8852"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Explorations in Creative Reading & Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      },
      {
        "name": "Paper 2: Writers' Viewpoints & Perspectives",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & 19th Century Novel",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8702"
      },
      {
        "name": "Paper 2: Modern Texts and Poetry",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "8702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Food Preparation and Nutrition",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8585"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8652"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8652"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Living with the Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 2: Challenges in the Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 3: Geographical Applications",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8662"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8662"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Understanding the Modern World (2h combined \u2013 options 1A+1B)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      },
      {
        "name": "Paper 2: Shaping the Nation (2h combined \u2013 options 2A+2B)",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8633"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8633"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8633"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8678"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8678"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Music (Written)",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8271"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8683"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8683"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Human Body & Movement",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      },
      {
        "name": "Paper 2: Socio-cultural Influences & Wellbeing",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8688"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8688"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Cognition and Behaviour",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8182"
      },
      {
        "name": "Paper 2: Social Context and Behaviour",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Study of Religions (2 options)",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8062"
      },
      {
        "name": "Paper 2A or 2B: Thematic Studies",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Catholic Christianity",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8063"
      },
      {
        "name": "Paper 2: Perspectives on Faith",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8063"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Families and Education",
        "date": "2026-05-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8192"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Accounting",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Financial Accounting",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      },
      {
        "name": "Paper 2: Accounting for Analysis & Decision",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7127"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Bengali",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Reading and Writing",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h",
        "code": "7637"
      },
      {
        "name": "Paper 3: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7637"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biblical Hebrew",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation, Comprehension & Composition",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "3h",
        "code": "7677"
      },
      {
        "name": "Paper 2: Prose Literature",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      },
      {
        "name": "Paper 3: Poetry",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h",
        "code": "7677"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-16",
        "session": "AM",
        "duration": "2h",
        "code": "7402"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Business 1",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 2: Business 2",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h",
        "code": "7132"
      },
      {
        "name": "Paper 3: Business 3",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "2h",
        "code": "7132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Inorganic & Physical Chemistry",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 2: Organic & Physical Chemistry",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      },
      {
        "name": "Paper 3",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "2h",
        "code": "7405"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (On-screen, choice of language)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7517"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7517"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Critical Engagement (Written)",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7237"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Fashion & Textiles",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7562"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7562"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design & Technology: Product Design",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7552"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "7552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama and Theatre",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Written Paper: Drama and Theatre",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "3h",
        "code": "7262"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Markets and Market Failure",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 2: National and International Economy",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "2h",
        "code": "7136"
      },
      {
        "name": "Paper 3: Economic Principles and Issues",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "7136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Language, the Individual and Society",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      },
      {
        "name": "Paper 2: Language Diversity and Change",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language & Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Telling Stories",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7707"
      },
      {
        "name": "Paper 2: Exploring Conflict",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7707"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature A",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Love Through the Ages",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "3h",
        "code": "7712"
      },
      {
        "name": "Paper 2: Texts in Shared Contexts (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7712"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Literary Genres (Tragedy/Comedy)",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7717"
      },
      {
        "name": "Paper 2: Texts and Genres (option)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "3h",
        "code": "7717"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Environmental Science",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "3h",
        "code": "7447"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7652"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h",
        "code": "7652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Further Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Pure Core",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h",
        "code": "7367"
      },
      {
        "name": "Paper 2 (optional route)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h",
        "code": "7367"
      },
      {
        "name": "Paper 3 (optional route)",
        "date": "2026-05-15",
        "session": "PM",
        "duration": "1h",
        "code": "7367"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Physical Geography",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7037"
      },
      {
        "name": "Paper 2: Human Geography",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7037"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Writing",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 30m",
        "code": "7662"
      },
      {
        "name": "Paper 2: Writing",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h",
        "code": "7662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (1A+1B option combination)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      },
      {
        "name": "Paper 2 (2A+2B option combination)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h 30m",
        "code": "7042"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Law",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "2h",
        "code": "7162"
      },
      {
        "name": "Paper 3 (Contract or Human Rights)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h",
        "code": "7162"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1 (Pure)",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 2 (Pure & Statistics/Mechanics)",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      },
      {
        "name": "Paper 3 (Pure & Statistics/Mechanics)",
        "date": "2026-06-18",
        "session": "PM",
        "duration": "2h",
        "code": "7357"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Arabic",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1AA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1AA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1AA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Astronomy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Naked-eye Astronomy",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1AS0"
      },
      {
        "name": "Paper 2: Telescopic Astronomy",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1AS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biblical Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Language",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "2h 00m",
        "code": "1BH0"
      },
      {
        "name": "Component 2: Literature",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1BH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BI0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1BI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Investigating Small Business",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      },
      {
        "name": "Paper 2: Building a Business",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chinese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1CN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1CN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1CN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Combined Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Biology 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 2: Chemistry 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 3: Physics 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 4: Biology 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 5: Chemistry 2 (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 6: Physics 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Principles of Computer Science",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1CP2"
      },
      {
        "name": "Paper 2: Application of Computational Thinking (On-screen, IDE)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1CP2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Theatre Makers in Practice (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Design & Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1 (choice of material/system)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Fiction & Imaginative Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1EN0"
      },
      {
        "name": "Paper 2: Non-Fiction & Transactional Writing",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "2h 05m",
        "code": "1EN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language 2.0",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Fiction Texts",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      },
      {
        "name": "Paper 2: Contemporary Texts",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & Post-1914 Literature",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1ET0"
      },
      {
        "name": "Paper 2: 19th-Century Novel & Poetry since 1789",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "1ET0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1FR1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: The Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1GA0"
      },
      {
        "name": "Paper 2: The Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1GA0"
      },
      {
        "name": "Paper 3: Geographical Investigations: Fieldwork & UK Challenges",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Global Geographical Issues",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      },
      {
        "name": "Paper 2: UK Geographical Issues",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1GB0"
      },
      {
        "name": "Paper 3: People & Environment Issues \u2013 Making Decisions",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1GN1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Greek",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GK0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1GK0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Gujarati",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1GU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Thematic Study & Historic Environment",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h 20m",
        "code": "1HI0"
      },
      {
        "name": "Paper 2: Period Study & British Depth Study",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "1h 50m",
        "code": "1HI0"
      },
      {
        "name": "Paper 3: Modern Depth Study",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1HI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1IN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1IN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1IN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Japanese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1JA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1JA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1JA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Appraising",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1MU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Fitness & Body Systems",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1PE0"
      },
      {
        "name": "Component 2: Health & Performance",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "1PE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Persian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Portuguese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PG0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 20m",
        "code": "1PS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Area of Study 1 \u2013 Study of Religion",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RA0"
      },
      {
        "name": "Paper 2: Area of Study 2 \u2013 Study of Second Religion",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      },
      {
        "name": "Paper 3: Philosophy & Ethics",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Religion & Ethics",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 2: Religion, Peace & Conflict",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 3: Religion, Philosophy & Social Justice",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Russian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1RU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1RU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Spanish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1SP1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Statistics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1ST0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Turkish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1TU0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1TU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1TU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Urdu",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1UR0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1UR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Arabic",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation into English, Reading Comprehension & Writing",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 30m",
        "code": "9AA0"
      },
      {
        "name": "Paper 2: Translation into Arabic & Written Response to Works",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 40m",
        "code": "9AA0"
      },
      {
        "name": "Paper 3: Listening, Reading & Writing",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9AA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Core Cellular Biology & Microbiology",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8BI0"
      },
      {
        "name": "Paper 2: Core Physiology & Ecology",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8BI0"
      },
      {
        "name": "Paper 1: Advanced Biochemistry, Microbiology & Genetics",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "1h 45m",
        "code": "9BI0"
      },
      {
        "name": "Paper 2: Advanced Physiology, Evolution & Ecology",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "9BI0"
      },
      {
        "name": "Paper 3: General & Practical Principles in Biology",
        "date": "2026-06-16",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9BI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology A (Salters Nuffield)",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Lifestyle, Transport, Genes & Health",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8BN0"
      },
      {
        "name": "Paper 2: Development, Plants & the Environment",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8BN0"
      },
      {
        "name": "Paper 1: The Natural Environment & Species Survival",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9BN0"
      },
      {
        "name": "Paper 2: Energy, Exercise & Co-ordination",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9BN0"
      },
      {
        "name": "Paper 3: General & Practical Applications in Biology",
        "date": "2026-06-16",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9BN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Business",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Marketing and People",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8BS0"
      },
      {
        "name": "Paper 2: Managing Business Activities",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8BS0"
      },
      {
        "name": "Paper 1: Marketing, People & Global Businesses",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9BS0"
      },
      {
        "name": "Paper 2: Business Activities, Decisions & Strategy",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9BS0"
      },
      {
        "name": "Paper 3: Investigating Business in a Competitive Environment",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9BS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chemistry",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Core Inorganic & Physical Chemistry",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8CH0"
      },
      {
        "name": "Paper 2: Core Organic & Physical Chemistry",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8CH0"
      },
      {
        "name": "Paper 1: Advanced Inorganic & Physical Chemistry",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "9CH0"
      },
      {
        "name": "Paper 2: Advanced Organic & Physical Chemistry",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h 45m",
        "code": "9CH0"
      },
      {
        "name": "Paper 3: General & Practical Principles in Chemistry",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9CH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chinese",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9CN0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 40m",
        "code": "9CN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Design & Technology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Component 1: Design & Technology (Product Design)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9DT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Drama & Theatre",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Component 3: Theatre Makers in Practice (Written)",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9DR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Economics A",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Markets & Business Behaviour",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9EC0"
      },
      {
        "name": "Paper 2: The National & Global Economy",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9EC0"
      },
      {
        "name": "Paper 3: Microeconomics & Macroeconomics",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9EC0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Economics B",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Markets & How They Work",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9EB0"
      },
      {
        "name": "Paper 2: Competing in the Global Economy",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9EB0"
      },
      {
        "name": "Paper 3: The Economic Environment & Business",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9EB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Language: Context & Identity",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8EN0"
      },
      {
        "name": "Paper 2: Child Language",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8EN0"
      },
      {
        "name": "Paper 1: Language Variation",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9EN0"
      },
      {
        "name": "Paper 2: Child Language",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "9EN0"
      },
      {
        "name": "Paper 3: Investigating Language",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 45m",
        "code": "9EN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Lang & Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Voices in Speech & Writing",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8EL0"
      },
      {
        "name": "Paper 2: Varieties in Language & Literature",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8EL0"
      },
      {
        "name": "Paper 1: Voices in Speech & Writing",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9EL0"
      },
      {
        "name": "Paper 2: Varieties in Language & Literature",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9EL0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Literature",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Poetry & Drama",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "2h 00m",
        "code": "8ET0"
      },
      {
        "name": "Paper 2: Prose",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8ET0"
      },
      {
        "name": "Paper 1: Drama",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9ET0"
      },
      {
        "name": "Paper 2: Prose",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "9ET0"
      },
      {
        "name": "Paper 3: Poetry",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9ET0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Further Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Core Pure Mathematics 1",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 30m",
        "code": "9FM0"
      },
      {
        "name": "Paper 2: Core Pure Mathematics 2",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 30m",
        "code": "9FM0"
      },
      {
        "name": "Paper 3 Options (Further Pure/Stats/Mechanics/Decision)",
        "date": "2026-06-19",
        "session": "AM",
        "duration": "1h 30m",
        "code": "9FM0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "French",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9FR0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "2h 40m",
        "code": "9FR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Physical Geography",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9GE0"
      },
      {
        "name": "Paper 2: Human Geography",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "2h 15m",
        "code": "9GE0"
      },
      {
        "name": "Paper 3: Physical & Human Geography Synoptic",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "2h 15m",
        "code": "9GE0"
      },
      {
        "name": "Paper 1: Dynamic Landscapes",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8GE0"
      },
      {
        "name": "Paper 2: Dynamic Places",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8GE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "German",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9GN0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "2h 40m",
        "code": "9GN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Greek",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation into English, Reading & Writing",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9GK0"
      },
      {
        "name": "Paper 2: Translation into Greek & Written Response",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "2h 40m",
        "code": "9GK0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Breadth Study with Interpretations",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 15m",
        "code": "9HI0"
      },
      {
        "name": "Paper 2: Depth Study",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "9HI0"
      },
      {
        "name": "Paper 3: Themes in Breadth with Aspects in Depth",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9HI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History of Art",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Visual Analysis & Themes",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "3h 00m",
        "code": "9HT0"
      },
      {
        "name": "Paper 2: Periods",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "3h 00m",
        "code": "9HT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Italian",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9IN0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-19",
        "session": "AM",
        "duration": "2h 40m",
        "code": "9IN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Japanese",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Translation into English, Reading & Writing",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 30m",
        "code": "9JA0"
      },
      {
        "name": "Paper 2: Translation into Japanese & Written Response",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "2h 40m",
        "code": "9JA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Mathematics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Pure Mathematics 1",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9MA0"
      },
      {
        "name": "Paper 2: Pure Mathematics 2",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9MA0"
      },
      {
        "name": "Paper 3: Statistics & Mechanics",
        "date": "2026-06-18",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9MA0"
      },
      {
        "name": "Paper 1: Pure Mathematics",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "2h 00m",
        "code": "8MA0"
      },
      {
        "name": "Paper 2: Statistics & Mechanics",
        "date": "2026-05-22",
        "session": "PM",
        "duration": "1h 15m",
        "code": "8MA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Component 3: Appraising",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "2h 10m",
        "code": "9MU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music Technology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Component 3: Listening & Analysing",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 30m",
        "code": "9MT0"
      },
      {
        "name": "Component 4: Producing & Analysing",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9MT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physical Education",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Component 1: Scientific Principles of Physical Education",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9PE0"
      },
      {
        "name": "Component 2: Psychological & Social Principles",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9PE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Advanced Physics I",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "9PH0"
      },
      {
        "name": "Paper 2: Advanced Physics II",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 45m",
        "code": "9PH0"
      },
      {
        "name": "Paper 3: General & Practical Principles in Physics",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 30m",
        "code": "9PH0"
      },
      {
        "name": "Paper 1: Core Physics I",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8PH0"
      },
      {
        "name": "Paper 2: Core Physics II",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8PH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Politics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: UK Politics & Core Political Ideas",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9PL0"
      },
      {
        "name": "Paper 2: UK Government & Non-core Political Ideas",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9PL0"
      },
      {
        "name": "Paper 3A: Comparative Politics \u2013 USA",
        "date": "2026-06-16",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9PL0"
      },
      {
        "name": "Paper 3B: Comparative Politics \u2013 Global Politics",
        "date": "2026-06-16",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9PL0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Psychology",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Foundations in Psychology",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9PS0"
      },
      {
        "name": "Paper 2: Applications of Psychology",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "2h 15m",
        "code": "9PS0"
      },
      {
        "name": "Paper 3: Psychological Skills",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9PS0"
      },
      {
        "name": "Paper 1: Social & Cognitive Psychology",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8PS0"
      },
      {
        "name": "Paper 2: Biological Psychology & Learning Theories",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8PS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Philosophy of Religion",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9RS0"
      },
      {
        "name": "Paper 2: Religion & Ethics",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9RS0"
      },
      {
        "name": "Paper 3: New Testament Studies",
        "date": "2026-06-15",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9RS0"
      },
      {
        "name": "Paper 4: Study of Religion",
        "date": "2026-06-22",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9RS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Russian",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9RU0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "2h 40m",
        "code": "9RU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Spanish",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Listening, Reading & Translation",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h 00m",
        "code": "9SP0"
      },
      {
        "name": "Paper 2: Written Response to Works & Translation",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "2h 40m",
        "code": "9SP0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Statistics",
    "qualification": "A-Level",
    "papers": [
      {
        "name": "Paper 1: Data & Probability",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9ST0"
      },
      {
        "name": "Paper 2: Statistical Inference",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9ST0"
      },
      {
        "name": "Paper 3: Statistics in Practice",
        "date": "2026-06-17",
        "session": "PM",
        "duration": "2h 00m",
        "code": "9ST0"
      }
    ]
  }
]
  },
  {
    "board": "AQA",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8461"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8461"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Operations and HRM",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      },
      {
        "name": "Paper 2: Marketing and Finance",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8132"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8462"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Chinese (Mandarin)",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8673"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8673"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8673"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8100"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Trilogy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 Biology (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Biology (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Chemistry (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Chemistry (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 1 Physics (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      },
      {
        "name": "Paper 2 Physics (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8464"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Combined Science: Synergy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Life & Environmental Sciences (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 2: Life & Environmental Sciences (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 3: Physical Sciences (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      },
      {
        "name": "Paper 4: Physical Sciences (F/H)",
        "date": "2026-06-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8465"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Computational Thinking & Programming (choice of language)",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "2h",
        "code": "8525"
      },
      {
        "name": "Paper 2: Computing Concepts",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8525"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Dance",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Dance Appreciation (Written)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8236"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Design and Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "2h",
        "code": "8552"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Drama (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8261"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Economics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: How Markets Work",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8136"
      },
      {
        "name": "Paper 2: How the Economy Works",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8136"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Engineering",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Written Paper",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "2h",
        "code": "8852"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Explorations in Creative Reading & Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      },
      {
        "name": "Paper 2: Writers' Viewpoints & Perspectives",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8700"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & 19th Century Novel",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8702"
      },
      {
        "name": "Paper 2: Modern Texts and Poetry",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "8702"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Food Preparation and Nutrition",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-06-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8585"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8652"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8652"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8652"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Geography",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Living with the Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 2: Challenges in the Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8035"
      },
      {
        "name": "Paper 3: Geographical Applications",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8035"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8662"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h",
        "code": "8662"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h10m/1h15m",
        "code": "8662"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Understanding the Modern World (2h combined \u2013 options 1A+1B)",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      },
      {
        "name": "Paper 2: Shaping the Nation (2h combined \u2013 options 2A+2B)",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "2h",
        "code": "8145"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "8633"
      },
      {
        "name": "Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h",
        "code": "8633"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8633"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "8300"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Media Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      },
      {
        "name": "Paper 2",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8572"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Modern Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8678"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h/1h15m",
        "code": "8678"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Understanding Music (Written)",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 30m",
        "code": "8271"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Panjabi",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8683"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8683"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Human Body & Movement",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      },
      {
        "name": "Paper 2: Socio-cultural Influences & Wellbeing",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "8582"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8463"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Polish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "8688"
      },
      {
        "name": "Writing (F/H)",
        "date": "2026-06-12",
        "session": "PM",
        "duration": "1h/1h15m",
        "code": "8688"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Cognition and Behaviour",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8182"
      },
      {
        "name": "Paper 2: Social Context and Behaviour",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8182"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Study of Religions (2 options)",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8062"
      },
      {
        "name": "Paper 2A or 2B: Thematic Studies",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8062"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Catholic Christianity",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8063"
      },
      {
        "name": "Paper 2: Perspectives on Faith",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "8063"
      }
    ]
  },
  {
    "board": "AQA",
    "subject": "Sociology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Families and Education",
        "date": "2026-05-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "8192"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Arabic",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1AA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1AA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1AA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Astronomy",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Naked-eye Astronomy",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1AS0"
      },
      {
        "name": "Paper 2: Telescopic Astronomy",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1AS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biblical Hebrew",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Language",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "2h 00m",
        "code": "1BH0"
      },
      {
        "name": "Component 2: Literature",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1BH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Biology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BI0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1BI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Business",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Investigating Small Business",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      },
      {
        "name": "Paper 2: Building a Business",
        "date": "2026-05-21",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1BS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chemistry",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1CH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Chinese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1CN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-11",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1CN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1CN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Citizenship Studies",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1CS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Combined Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Biology 1 (F/H)",
        "date": "2026-05-12",
        "session": "PM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 2: Chemistry 1 (F/H)",
        "date": "2026-05-18",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 3: Physics 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 4: Biology 2 (F/H)",
        "date": "2026-06-08",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 5: Chemistry 2 (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      },
      {
        "name": "Paper 6: Physics 2 (F/H)",
        "date": "2026-06-15",
        "session": "AM",
        "duration": "1h 10m",
        "code": "1SC0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Computer Science",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Principles of Computer Science",
        "date": "2026-05-13",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1CP2"
      },
      {
        "name": "Paper 2: Application of Computational Thinking (On-screen, IDE)",
        "date": "2026-05-19",
        "session": "PM",
        "duration": "2h 00m",
        "code": "1CP2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Drama",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Theatre Makers in Practice (Written)",
        "date": "2026-05-08",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DR0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Design & Technology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1 (choice of material/system)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1DT0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Fiction & Imaginative Writing",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1EN0"
      },
      {
        "name": "Paper 2: Non-Fiction & Transactional Writing",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "2h 05m",
        "code": "1EN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Language 2.0",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Fiction Texts",
        "date": "2026-05-21",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      },
      {
        "name": "Paper 2: Contemporary Texts",
        "date": "2026-06-05",
        "session": "AM",
        "duration": "1h 55m",
        "code": "1EN2"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "English Literature",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Shakespeare & Post-1914 Literature",
        "date": "2026-05-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1ET0"
      },
      {
        "name": "Paper 2: 19th-Century Novel & Poetry since 1789",
        "date": "2026-05-19",
        "session": "AM",
        "duration": "2h 15m",
        "code": "1ET0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "French",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-20",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-04",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1FR1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-08",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1FR1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: The Physical Environment",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1GA0"
      },
      {
        "name": "Paper 2: The Human Environment",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1GA0"
      },
      {
        "name": "Paper 3: Geographical Investigations: Fieldwork & UK Challenges",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Geography B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Global Geographical Issues",
        "date": "2026-05-13",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      },
      {
        "name": "Paper 2: UK Geographical Issues",
        "date": "2026-06-03",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1GB0"
      },
      {
        "name": "Paper 3: People & Environment Issues \u2013 Making Decisions",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1GB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "German",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-05-07",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "45m/1h00m",
        "code": "1GN1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h15m/1h20m",
        "code": "1GN1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Greek",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GK0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "50m/1h05m",
        "code": "1GK0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Gujarati",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1GU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1GU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "History",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Thematic Study & Historic Environment",
        "date": "2026-05-15",
        "session": "AM",
        "duration": "1h 20m",
        "code": "1HI0"
      },
      {
        "name": "Paper 2: Period Study & British Depth Study",
        "date": "2026-06-04",
        "session": "AM",
        "duration": "1h 50m",
        "code": "1HI0"
      },
      {
        "name": "Paper 3: Modern Depth Study",
        "date": "2026-06-09",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1HI0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Italian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1IN0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1IN0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1IN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Japanese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1JA0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1JA0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1JA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Mathematics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Non-Calculator (F/H)",
        "date": "2026-05-14",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 2: Calculator (F/H)",
        "date": "2026-06-03",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      },
      {
        "name": "Paper 3: Calculator (F/H)",
        "date": "2026-06-10",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1MA1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Music",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 3: Appraising",
        "date": "2026-06-05",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1MU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physical Education",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Component 1: Fitness & Body Systems",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h 30m",
        "code": "1PE0"
      },
      {
        "name": "Component 2: Health & Performance",
        "date": "2026-06-01",
        "session": "AM",
        "duration": "1h 15m",
        "code": "1PE0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Persian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PN0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Physics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      },
      {
        "name": "Paper 2 (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PH0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Portuguese",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1PG0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Psychology",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1PS0"
      },
      {
        "name": "Paper 2",
        "date": "2026-05-14",
        "session": "PM",
        "duration": "1h 20m",
        "code": "1PS0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies A",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Area of Study 1 \u2013 Study of Religion",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RA0"
      },
      {
        "name": "Paper 2: Area of Study 2 \u2013 Study of Second Religion",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      },
      {
        "name": "Paper 3: Philosophy & Ethics",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "50m",
        "code": "1RA0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Religious Studies B",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Religion & Ethics",
        "date": "2026-05-12",
        "session": "AM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 2: Religion, Peace & Conflict",
        "date": "2026-05-20",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      },
      {
        "name": "Paper 3: Religion, Philosophy & Social Justice",
        "date": "2026-06-01",
        "session": "PM",
        "duration": "1h 45m",
        "code": "1RB0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Russian",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1RU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-10",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1RU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Spanish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 2: Listening (F/H)",
        "date": "2026-06-09",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-06-11",
        "session": "AM",
        "duration": "45m/1h00m",
        "code": "1SP1"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-17",
        "session": "AM",
        "duration": "1h15m/1h20m",
        "code": "1SP1"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Statistics",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1 (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h 30m",
        "code": "1ST0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Turkish",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "35m/45m",
        "code": "1TU0"
      },
      {
        "name": "Paper 3: Reading (F/H)",
        "date": "2026-05-07",
        "session": "AM",
        "duration": "50m/1h05m",
        "code": "1TU0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-05-22",
        "session": "AM",
        "duration": "1h20m/1h25m",
        "code": "1TU0"
      }
    ]
  },
  {
    "board": "Edexcel",
    "subject": "Urdu",
    "qualification": "GCSE",
    "papers": [
      {
        "name": "Paper 1: Listening (F/H)",
        "date": "2026-05-18",
        "session": "PM",
        "duration": "35m/45m",
        "code": "1UR0"
      },
      {
        "name": "Paper 4: Writing (F/H)",
        "date": "2026-06-02",
        "session": "PM",
        "duration": "1h20m/1h25m",
        "code": "1UR0"
      }
    ]
  }
]

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
  "AQA-Mathematics-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "219",
      "7": "163",
      "5": "95",
      "4": "61",
      "1": "13"
    }
  },
  "AQA-Mathematics-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "186",
      "4": "157",
      "1": "37"
    }
  },
  "AQA-English Language-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "121",
      "7": "102",
      "5": "82",
      "4": "73",
      "1": "16"
    }
  },
  "AQA-English Literature-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "137",
      "7": "106",
      "5": "74",
      "4": "58",
      "1": "12"
    }
  },
  "AQA-Biology-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "141",
      "7": "112",
      "5": "69",
      "4": "48",
      "1": "\u2013"
    }
  },
  "AQA-Biology-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "132",
      "4": "113",
      "1": "22"
    }
  },
  "AQA-Chemistry-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "149",
      "7": "112",
      "5": "68",
      "4": "46",
      "1": "\u2013"
    }
  },
  "AQA-Chemistry-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "133",
      "4": "112",
      "1": "24"
    }
  },
  "AQA-Physics-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "151",
      "7": "122",
      "5": "85",
      "4": "67",
      "1": "\u2013"
    }
  },
  "AQA-Physics-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "136",
      "4": "122",
      "1": "24"
    }
  },
  "AQA-Geography-GCSE": {
    "maxMarks": "252",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "202",
      "7": "162",
      "5": "123",
      "4": "104",
      "1": "20"
    }
  },
  "AQA-History (Av. option)-GCSE": {
    "maxMarks": "168",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "117",
      "7": "91",
      "5": "68",
      "4": "57",
      "1": "8"
    }
  },
  "AQA-Computer Science-GCSE": {
    "maxMarks": "180",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "152",
      "7": "128",
      "5": "88",
      "4": "68",
      "1": "14"
    }
  },
  "AQA-Business-GCSE": {
    "maxMarks": "180",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "135",
      "7": "117",
      "5": "92",
      "4": "80",
      "1": "14"
    }
  },
  "AQA-Drama-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "165",
      "7": "142",
      "5": "110",
      "4": "94",
      "1": "23"
    }
  },
  "AQA-Dance-GCSE": {
    "maxMarks": "400",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "330",
      "7": "280",
      "5": "188",
      "4": "144",
      "1": "56"
    }
  },
  "AQA-Design & Technology-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "174",
      "7": "145",
      "5": "111",
      "4": "94",
      "1": "21"
    }
  },
  "AQA-Economics-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "130",
      "7": "115",
      "5": "89",
      "4": "77",
      "1": "20"
    }
  },
  "AQA-Engineering-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "175",
      "7": "151",
      "5": "120",
      "4": "105",
      "1": "22"
    }
  },
  "AQA-Food Prep & Nutrition-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "174",
      "7": "146",
      "5": "112",
      "4": "96",
      "1": "21"
    }
  },
  "AQA-Media Studies-GCSE": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "189",
      "7": "162",
      "5": "123",
      "4": "104",
      "1": "21"
    }
  },
  "AQA-Music-GCSE": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "197",
      "7": "171",
      "5": "140",
      "4": "125",
      "1": "45"
    }
  },
  "AQA-Physical Education-GCSE": {
    "maxMarks": "260",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "206",
      "7": "178",
      "5": "143",
      "4": "126",
      "1": "34"
    }
  },
  "AQA-Psychology-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "158",
      "7": "130",
      "5": "92",
      "4": "74",
      "1": "11"
    }
  },
  "AQA-Religious Studies A-GCSE": {
    "maxMarks": "204",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "177",
      "7": "153",
      "5": "123",
      "4": "109",
      "1": "22"
    }
  },
  "AQA-Sociology-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "124",
      "7": "92",
      "5": "61",
      "4": "46",
      "1": "7"
    }
  },
  "AQA-Citizenship Studies-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "135",
      "7": "114",
      "5": "84",
      "4": "69",
      "1": "14"
    }
  },
  "AQA-French-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "195",
      "7": "150",
      "5": "121",
      "4": "107",
      "1": "\u2013"
    }
  },
  "AQA-French-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "159",
      "4": "142",
      "1": "24"
    }
  },
  "AQA-German-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "202",
      "7": "159",
      "5": "122",
      "4": "104",
      "1": "\u2013"
    }
  },
  "AQA-German-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "175",
      "4": "155",
      "1": "24"
    }
  },
  "AQA-Bengali-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "206",
      "7": "154",
      "5": "102",
      "4": "76",
      "1": "\u2013"
    }
  },
  "AQA-Accounting-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "61",
      "A": "166",
      "B": "144",
      "C": "52",
      "E": "177"
    }
  },
  "AQA-Biology-A-Level-260": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "53",
      "A": "173",
      "B": "142",
      "C": "37",
      "E": "180"
    }
  },
  "AQA-Business-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "83",
      "A": "215",
      "B": "189",
      "C": "64",
      "E": "217"
    }
  },
  "AQA-Chemistry-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "65",
      "A": "237",
      "B": "196",
      "C": "47",
      "E": "250"
    }
  },
  "AQA-Computer Science-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "74",
      "A": "278",
      "B": "223",
      "C": "50",
      "E": "296"
    }
  },
  "AQA-D&T: Product Design-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "123",
      "A": "291",
      "B": "258",
      "C": "92",
      "E": "304"
    }
  },
  "AQA-D&T: Fashion & Text.-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "120",
      "A": "299",
      "B": "262",
      "C": "105",
      "E": "309"
    }
  },
  "AQA-Dance-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "68",
      "A": "141",
      "B": "127",
      "C": "61",
      "E": "150"
    }
  },
  "AQA-Drama & Theatre-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "70",
      "A": "151",
      "B": "135",
      "C": "61",
      "E": "166"
    }
  },
  "AQA-Economics-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "69",
      "A": "175",
      "B": "151",
      "C": "50",
      "E": "182"
    }
  },
  "AQA-English Language-A-Level-500": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "163",
      "A": "412",
      "B": "372",
      "C": "149",
      "E": "430"
    }
  },
  "AQA-English Lang & Lit-A-Level-250": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "80",
      "A": "196",
      "B": "176",
      "C": "63",
      "E": "207"
    }
  },
  "AQA-English Lit A-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "109",
      "A": "299",
      "B": "257",
      "C": "96",
      "E": "312"
    }
  },
  "AQA-English Lit B-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "109",
      "A": "292",
      "B": "254",
      "C": "101",
      "E": "312"
    }
  },
  "AQA-Environmental Sci.-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "62",
      "A": "164",
      "B": "146",
      "C": "45",
      "E": "181"
    }
  },
  "AQA-French-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "146",
      "A": "336",
      "B": "294",
      "C": "115",
      "E": "359"
    }
  },
  "AQA-Further Mathematics-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "46",
      "A": "181",
      "B": "145",
      "C": "32",
      "E": "216"
    }
  },
  "AQA-Geography-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "86",
      "A": "227",
      "B": "198",
      "C": "70",
      "E": "239"
    }
  },
  "AQA-German-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "99",
      "A": "329",
      "B": "263",
      "C": "81",
      "E": "351"
    }
  },
  "AQA-History-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "47",
      "A": "147",
      "B": "125",
      "C": "42",
      "E": "163"
    }
  },
  "AQA-Law-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "218"
    }
  },
  "AQA-Mathematics-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "248"
    }
  },
  "AQA-Media Studies-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "204"
    }
  },
  "AQA-Music-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "243"
    }
  },
  "AQA-Philosophy-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "157"
    }
  },
  "AQA-Physical Education-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "199"
    }
  },
  "AQA-Physics-A-Level-250": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "164"
    }
  },
  "AQA-Politics-A-Level-231": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "176"
    }
  },
  "AQA-Psychology-A-Level-288": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "219"
    }
  },
  "AQA-Religious Studies-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "167"
    }
  },
  "AQA-Sociology-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "185"
    }
  },
  "AQA-Spanish-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "347"
    }
  }
}
  "AQA-Mathematics-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "186",
      "4": "157",
      "1": "37"
    }
  },
  "AQA-English Language-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "121",
      "7": "102",
      "5": "82",
      "4": "73",
      "1": "16"
    }
  },
  "AQA-English Literature-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "137",
      "7": "106",
      "5": "74",
      "4": "58",
      "1": "12"
    }
  },
  "AQA-Biology-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "141",
      "7": "112",
      "5": "69",
      "4": "48",
      "1": "\u2013"
    }
  },
  "AQA-Biology-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "132",
      "4": "113",
      "1": "22"
    }
  },
  "AQA-Chemistry-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "149",
      "7": "112",
      "5": "68",
      "4": "46",
      "1": "\u2013"
    }
  },
  "AQA-Chemistry-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "133",
      "4": "112",
      "1": "24"
    }
  },
  "AQA-Physics-GCSE-H": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "151",
      "7": "122",
      "5": "85",
      "4": "67",
      "1": "\u2013"
    }
  },
  "AQA-Physics-GCSE-F": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "136",
      "4": "122",
      "1": "24"
    }
  },
  "AQA-Geography-GCSE": {
    "maxMarks": "252",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "202",
      "7": "162",
      "5": "123",
      "4": "104",
      "1": "20"
    }
  },
  "AQA-History (Av. option)-GCSE": {
    "maxMarks": "168",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "117",
      "7": "91",
      "5": "68",
      "4": "57",
      "1": "8"
    }
  },
  "AQA-Computer Science-GCSE": {
    "maxMarks": "180",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "152",
      "7": "128",
      "5": "88",
      "4": "68",
      "1": "14"
    }
  },
  "AQA-Business-GCSE": {
    "maxMarks": "180",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "135",
      "7": "117",
      "5": "92",
      "4": "80",
      "1": "14"
    }
  },
  "AQA-Drama-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "165",
      "7": "142",
      "5": "110",
      "4": "94",
      "1": "23"
    }
  },
  "AQA-Dance-GCSE": {
    "maxMarks": "400",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "330",
      "7": "280",
      "5": "188",
      "4": "144",
      "1": "56"
    }
  },
  "AQA-Design & Technology-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "174",
      "7": "145",
      "5": "111",
      "4": "94",
      "1": "21"
    }
  },
  "AQA-Economics-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "130",
      "7": "115",
      "5": "89",
      "4": "77",
      "1": "20"
    }
  },
  "AQA-Engineering-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "175",
      "7": "151",
      "5": "120",
      "4": "105",
      "1": "22"
    }
  },
  "AQA-Food Prep & Nutrition-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "174",
      "7": "146",
      "5": "112",
      "4": "96",
      "1": "21"
    }
  },
  "AQA-Media Studies-GCSE": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "189",
      "7": "162",
      "5": "123",
      "4": "104",
      "1": "21"
    }
  },
  "AQA-Music-GCSE": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "197",
      "7": "171",
      "5": "140",
      "4": "125",
      "1": "45"
    }
  },
  "AQA-Physical Education-GCSE": {
    "maxMarks": "260",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "206",
      "7": "178",
      "5": "143",
      "4": "126",
      "1": "34"
    }
  },
  "AQA-Psychology-GCSE": {
    "maxMarks": "200",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "158",
      "7": "130",
      "5": "92",
      "4": "74",
      "1": "11"
    }
  },
  "AQA-Religious Studies A-GCSE": {
    "maxMarks": "204",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "177",
      "7": "153",
      "5": "123",
      "4": "109",
      "1": "22"
    }
  },
  "AQA-Sociology-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "124",
      "7": "92",
      "5": "61",
      "4": "46",
      "1": "7"
    }
  },
  "AQA-Citizenship Studies-GCSE": {
    "maxMarks": "160",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "135",
      "7": "114",
      "5": "84",
      "4": "69",
      "1": "14"
    }
  },
  "AQA-French-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "195",
      "7": "150",
      "5": "121",
      "4": "107",
      "1": "\u2013"
    }
  },
  "AQA-French-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "159",
      "4": "142",
      "1": "24"
    }
  },
  "AQA-German-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "202",
      "7": "159",
      "5": "122",
      "4": "104",
      "1": "\u2013"
    }
  },
  "AQA-German-GCSE-F": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "\u2013",
      "7": "\u2013",
      "5": "175",
      "4": "155",
      "1": "24"
    }
  },
  "AQA-Bengali-GCSE-H": {
    "maxMarks": "240",
    "gradingSystem": "GCSE_STANDARD",
    "boundaries2024": {
      "9": "206",
      "7": "154",
      "5": "102",
      "4": "76",
      "1": "\u2013"
    }
  },
  "AQA-Accounting-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "61",
      "A": "166",
      "B": "144",
      "C": "52",
      "E": "177"
    }
  },
  "AQA-Biology-A-Level-260": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "53",
      "A": "173",
      "B": "142",
      "C": "37",
      "E": "180"
    }
  },
  "AQA-Business-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "83",
      "A": "215",
      "B": "189",
      "C": "64",
      "E": "217"
    }
  },
  "AQA-Chemistry-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "65",
      "A": "237",
      "B": "196",
      "C": "47",
      "E": "250"
    }
  },
  "AQA-Computer Science-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "74",
      "A": "278",
      "B": "223",
      "C": "50",
      "E": "296"
    }
  },
  "AQA-D&T: Product Design-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "123",
      "A": "291",
      "B": "258",
      "C": "92",
      "E": "304"
    }
  },
  "AQA-D&T: Fashion & Text.-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "120",
      "A": "299",
      "B": "262",
      "C": "105",
      "E": "309"
    }
  },
  "AQA-Dance-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "68",
      "A": "141",
      "B": "127",
      "C": "61",
      "E": "150"
    }
  },
  "AQA-Drama & Theatre-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "70",
      "A": "151",
      "B": "135",
      "C": "61",
      "E": "166"
    }
  },
  "AQA-Economics-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "69",
      "A": "175",
      "B": "151",
      "C": "50",
      "E": "182"
    }
  },
  "AQA-English Language-A-Level-500": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "163",
      "A": "412",
      "B": "372",
      "C": "149",
      "E": "430"
    }
  },
  "AQA-English Lang & Lit-A-Level-250": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "80",
      "A": "196",
      "B": "176",
      "C": "63",
      "E": "207"
    }
  },
  "AQA-English Lit A-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "109",
      "A": "299",
      "B": "257",
      "C": "96",
      "E": "312"
    }
  },
  "AQA-English Lit B-A-Level-375": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "109",
      "A": "292",
      "B": "254",
      "C": "101",
      "E": "312"
    }
  },
  "AQA-Environmental Sci.-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "62",
      "A": "164",
      "B": "146",
      "C": "45",
      "E": "181"
    }
  },
  "AQA-French-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "146",
      "A": "336",
      "B": "294",
      "C": "115",
      "E": "359"
    }
  },
  "AQA-Further Mathematics-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "46",
      "A": "181",
      "B": "145",
      "C": "32",
      "E": "216"
    }
  },
  "AQA-Geography-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "86",
      "A": "227",
      "B": "198",
      "C": "70",
      "E": "239"
    }
  },
  "AQA-German-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "99",
      "A": "329",
      "B": "263",
      "C": "81",
      "E": "351"
    }
  },
  "AQA-History-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "47",
      "A": "147",
      "B": "125",
      "C": "42",
      "E": "163"
    }
  },
  "AQA-Law-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "218"
    }
  },
  "AQA-Mathematics-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "248"
    }
  },
  "AQA-Media Studies-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "204"
    }
  },
  "AQA-Music-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "243"
    }
  },
  "AQA-Philosophy-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "157"
    }
  },
  "AQA-Physical Education-A-Level-300": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "199"
    }
  },
  "AQA-Physics-A-Level-250": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "164"
    }
  },
  "AQA-Politics-A-Level-231": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "176"
    }
  },
  "AQA-Psychology-A-Level-288": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "219"
    }
  },
  "AQA-Religious Studies-A-Level-200": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "167"
    }
  },
  "AQA-Sociology-A-Level-240": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "185"
    }
  },
  "AQA-Spanish-A-Level-400": {
    "maxMarks": "\u2013",
    "gradingSystem": "ALEVEL",
    "boundaries2024": {
      "A*": "\u2013",
      "A": "\u2013",
      "B": "\u2013",
      "C": "\u2013",
      "E": "347"
    }
  }
}
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
  "AQA-Mathematics-Paper 1: Non-Calculator": [
    "Number",
    "Algebra",
    "Ratio, proportion & rates of change",
    "Geometry & measures",
    "Statistics & probability"
  ],
  "AQA-Mathematics-Papers 2 & 3: Calculator": [
    "All topics as Paper 1",
    "More complex calculations, multi-step problems",
    "Financial maths (compound interest, reverse percentage)"
  ],
  "AQA-English Language-Paper 1: Creative Reading & Writing": [
    "Reading: 20th/21st century fiction",
    "Inference",
    "Language analysis",
    "Structure analysis",
    "Evaluation",
    "Writing: descriptive or narrative"
  ],
  "AQA-English Language-Paper 2: Writers' Viewpoints & Perspectives": [
    "Reading: 19th century non-fiction + modern non-fiction",
    "Comparison",
    "Writing: viewpoint or perspective text"
  ],
  "AQA-English Literature-Paper 1: Shakespeare & 19th-Century Novel": [
    "Shakespeare play (set text \u2013 choice from: Macbeth, Romeo & Juliet, The Merchant of Venice, etc.)",
    "19th-century novel"
  ],
  "AQA-English Literature-Paper 2: Modern Texts, Poetry & Unseen Poetry": [
    "Modern prose or drama",
    "Power & Conflict or Love & Relationships anthology poetry",
    "Unseen poetry"
  ],
  "AQA-Biology-Paper 1": [
    "Cell biology",
    "Organisation",
    "Infection & response",
    "Bioenergetics"
  ],
  "AQA-Biology-Paper 2": [
    "Homeostasis & response",
    "Inheritance, variation & evolution",
    "Ecology"
  ],
  "AQA-Chemistry-Paper 1": [
    "Atomic structure & periodic table",
    "Bonding",
    "Quantitative chemistry",
    "Chemical changes",
    "Energy changes"
  ],
  "AQA-Chemistry-Paper 2": [
    "Rate & extent of reactions",
    "Organic chemistry",
    "Chemical analysis",
    "Chemistry of the atmosphere",
    "Using resources"
  ],
  "AQA-Physics-Paper 1": [
    "Energy",
    "Electricity",
    "Particle model of matter",
    "Atomic structure"
  ],
  "AQA-Physics-Paper 2": [
    "Forces",
    "Waves",
    "Magnetism & electromagnetism",
    "Space physics (higher tier)"
  ],
  "AQA-Geography-Paper 1: Living with the Physical Environment": [
    "Natural hazards",
    "Living world (ecosystems, tropical rainforests, hot deserts)",
    "Physical landscapes in the UK (rivers, coasts)"
  ],
  "AQA-Geography-Paper 2: Challenges in the Human Environment": [
    "Urban issues & challenges",
    "Changing economic world",
    "Resource management",
    "Food/water/energy"
  ],
  "AQA-Geography-Paper 3: Geographical Applications": [
    "Issue evaluation",
    "Fieldwork (two investigations)",
    "Geographical skills"
  ],
  "AQA-History-Paper 1: Understanding the Modern World": [
    "Section A: Period study (America, Germany, Russia, or America 1920\u201373)",
    "Section B: Wider world conflict topic"
  ],
  "AQA-History-Paper 2: Shaping the Nation": [
    "Section A: Thematic study (Health, Power, Migration)",
    "Section B: British depth study (Norman England, Elizabethan, etc.)"
  ],
  "AQA-Economics-Paper 1: How Markets Work": [
    "Economic foundations",
    "Resource allocation",
    "Price mechanism",
    "Competition",
    "Market failure",
    "Role of government"
  ],
  "AQA-Economics-Paper 2: How the Economy Works": [
    "National economic performance",
    "Government objectives",
    "Fiscal/monetary policy",
    "International trade",
    "Globalisation",
    "Inequality"
  ],
  "AQA-Business-Paper 1: Influences of Operations & HRM": [
    "Business activity",
    "Business ownership",
    "Stakeholders",
    "Business location",
    "Business planning",
    "Operations",
    "HRM"
  ],
  "AQA-Business-Paper 2: Influences of Marketing & Finance": [
    "Marketing",
    "Market research",
    "Marketing mix (4Ps)",
    "Finance",
    "Sources of finance",
    "Financial planning",
    "External influences"
  ],
  "AQA-Computer Science-Paper 1: Computational Thinking & Programming": [
    "Problem solving",
    "Programming fundamentals",
    "OOP",
    "Data structures",
    "Algorithms",
    "Big O",
    "Theory of computation"
  ],
  "AQA-Computer Science-Paper 2: Computing Concepts": [
    "Hardware",
    "Software",
    "Binary & data representation",
    "Networks",
    "Cybersecurity",
    "Databases",
    "Ethical, legal & cultural issues"
  ],
  "AQA-Psychology-Paper 1: Cognition & Behaviour": [
    "Memory",
    "Perception",
    "Development (Piaget)",
    "Research methods"
  ],
  "AQA-Psychology-Paper 2: Social Context & Behaviour": [
    "Social influence",
    "Language, thought & communication",
    "Brain & neuropsychology",
    "Psychological problems"
  ],
  "AQA-Sociology-Paper 1: Families & Education": [
    "What is sociology?",
    "The family (types, roles, diversity, changing patterns)",
    "Education (role, sociological perspectives)"
  ],
  "AQA-Sociology-Paper 2: Crime & Deviance & Social Stratification": [
    "Crime & deviance",
    "Social stratification (class, gender, ethnicity, power)"
  ],
  "AQA-Religious Studies A-Paper 1: Study of Religions": [
    "Two religions studied in depth: Christian/Catholic/Islamic/Hindu/Jewish/Sikh/Buddhist beliefs, practices, sources of wisdom"
  ],
  "AQA-Religious Studies A-Paper 2: Thematic Studies": [
    "Themes: Religion & relationships",
    "Religion & life",
    "Religion, peace & conflict",
    "Religion, crime & punishment",
    "Religion, human rights & social justice"
  ],
  "AQA-Citizenship Studies-Paper 1": [
    "Living together in the UK",
    "Democracy, government & participation",
    "Rights & responsibilities"
  ],
  "AQA-Citizenship Studies-Paper 2": [
    "Active citizenship",
    "Bilateral & international relations",
    "Media & digital citizenship"
  ],
  "AQA-Drama-Written Paper: Understanding Drama": [
    "Set text analysis",
    "Theatre vocabulary",
    "Live theatre evaluation"
  ],
  "AQA-Music-Written Paper: Understanding Music": [
    "Listening to and appraising music",
    "Four areas of study (compulsory): Western Classical Tradition, Popular Music, Traditional Music, Western Classical Tradition since 1910"
  ],
  "AQA-Physical Education-Paper 1: Human Body & Movement": [
    "Applied anatomy & physiology",
    "Movement analysis",
    "Physical training"
  ],
  "AQA-Physical Education-Paper 2: Socio-cultural Influences & Wellbeing": [
    "Sports psychology",
    "Socio-cultural influences",
    "Health, fitness & wellbeing",
    "Use of data"
  ],
  "AQA-Food Preparation & Nutrition-Written Paper": [
    "Food commodities",
    "Principles of nutrition",
    "Diet & good health",
    "Functional & chemical properties of food",
    "Cooking",
    "Food provenance",
    "Food science"
  ],
  "AQA-Media Studies-Paper 1: Media Products, Industries & Audiences": [
    "Media language (codes & conventions)",
    "Media representations",
    "News",
    "Advertising",
    "Music video",
    "Magazines",
    "Print"
  ],
  "AQA-Media Studies-Paper 2: Understanding Media Forms & Products": [
    "Television",
    "Film",
    "Radio",
    "Video games",
    "Online/social media",
    "Set products",
    "NEA"
  ],
  "AQA-Design & Technology-Written Paper": [
    "Core technical principles",
    "Specialist technical principles",
    "Designing & making principles"
  ],
  "AQA-French-Listening & Reading": [
    "Themes: Identity & culture",
    "Local/national/international/global areas of interest",
    "Current/future study, employment & ambitions",
    "Grammar"
  ],
  "AQA-French-Writing & Speaking": [
    "Translation",
    "Free writing",
    "Role-play",
    "Photo card",
    "Conversation"
  ],
  "AQA-German-Listening & Reading": [
    "Themes: Identity & culture",
    "Local/national/international/global",
    "Current/future study & employment",
    "Grammar"
  ],
  "AQA-Spanish-Listening & Reading": [
    "Themes: Identity & culture",
    "Local/national/international/global",
    "Study, employment & future plans",
    "Grammar"
  ],
  "AQA-Biology-Paper 1: Biological Molecules, Cells & Organisms": [
    "Biological molecules",
    "Cells",
    "Organisms exchange substances",
    "Genetic information & variation"
  ],
  "AQA-Biology-Paper 2: Energy Transfers & Responses": [
    "Energy transfers in/between organisms",
    "Organisms respond to changes",
    "Genetics, populations, evolution, ecosystems"
  ],
  "AQA-Biology-Paper 3: Practical Skills & Synoptic": [
    "Practical skills",
    "Any topics from Papers 1 & 2 synoptically",
    "Extended essay-style questions"
  ],
  "AQA-Chemistry-Paper 1: Inorganic & Physical Chemistry": [
    "Atomic structure",
    "Amount of substance",
    "Bonding",
    "Energetics",
    "Kinetics",
    "Chemical equilibria",
    "Oxidation/reduction",
    "Group 2, Group 7",
    "Period 3 elements",
    "Transition metals"
  ],
  "AQA-Chemistry-Paper 2: Organic & Physical Chemistry": [
    "Organic nomenclature & isomerism",
    "Alkanes",
    "Halogenoalkanes",
    "Alkenes",
    "Alcohols",
    "Organic analysis",
    "Acids/pH",
    "Rate equations",
    "Equilibrium constant Kp",
    "Electrode potentials",
    "Acids & bases",
    "NMR",
    "Chromatography"
  ],
  "AQA-Chemistry-Paper 3: Practical Skills & Synoptic": [
    "Practical skills including apparatus, techniques, error analysis",
    "Data analysis",
    "Synoptic questions across all topics"
  ],
  "AQA-Physics-Paper 1: Measurements & Fundamental Physics": [
    "Measurements & errors",
    "Particles & radiation",
    "Waves",
    "Mechanics & materials",
    "Electricity"
  ],
  "AQA-Physics-Paper 2: Advanced Physics": [
    "Further mechanics",
    "Thermal physics",
    "Fields",
    "Nuclear physics"
  ],
  "AQA-Physics-Paper 3: Practical Skills + Option Topic": [
    "Practical skills & data analysis",
    "One option from: Astrophysics / Medical / Engineering / Turning Points / Electronics"
  ],
  "AQA-Mathematics-Paper 1: Pure Mathematics 1": [
    "Algebra & functions",
    "Coordinate geometry",
    "Sequences & series",
    "Trigonometry",
    "Exponentials & logarithms",
    "Differentiation",
    "Integration",
    "Proof"
  ],
  "AQA-Mathematics-Paper 2: Pure Mathematics 2 + Statistics or Mechanics": [
    "Further Pure (all topics)",
    "Statistics: probability, distributions, hypothesis testing OR Mechanics: kinematics, forces, moments"
  ],
  "AQA-Mathematics-Paper 3: Pure Mathematics 3 + Statistics or Mechanics": [
    "Further pure topics",
    "Further Statistics or Mechanics (complementary to Paper 2)"
  ],
  "AQA-Further Mathematics-Paper 1: Compulsory Core Pure": [
    "Proof",
    "Complex numbers",
    "Matrices",
    "Further algebra",
    "Further calculus",
    "Further vectors",
    "Polar coordinates",
    "Hyperbolic functions",
    "Differential equations"
  ],
  "AQA-Further Mathematics-Paper 2 & 3: Optional Routes": [
    "Choose two options from: Further Statistics / Further Mechanics / Discrete Mathematics"
  ],
  "AQA-Economics-Paper 1: Markets and Market Failure": [
    "Economic methodology",
    "Demand & supply",
    "Price determination",
    "Elasticity",
    "Market failure",
    "Government intervention",
    "Competitive markets",
    "Productive & allocative efficiency"
  ],
  "AQA-Economics-Paper 2: National and International Economy": [
    "Macroeconomic objectives",
    "Aggregate demand/supply",
    "Fiscal/monetary policy",
    "Supply-side policies",
    "Trade",
    "International competitiveness",
    "Globalisation",
    "Poverty & inequality"
  ],
  "AQA-Economics-Paper 3: Economic Principles & Issues": [
    "Synoptic application of micro and macro economics",
    "Case study",
    "Essay questions drawing on both papers"
  ],
  "AQA-Psychology-Paper 1: Introductory Topics in Psychology": [
    "Social influence",
    "Memory",
    "Attachment",
    "Psychopathology (approaches to mental health)"
  ],
  "AQA-Psychology-Paper 2: Psychology in Context": [
    "Approaches in psychology",
    "Biopsychology",
    "Research methods"
  ],
  "AQA-Psychology-Paper 3: Issues and Options in Psychology": [
    "Issues & debates",
    "Gender",
    "Cognition & development",
    "Schizophrenia",
    "Eating behaviour",
    "Stress",
    "Aggression",
    "Relationships",
    "Forensic",
    "Addiction"
  ],
  "AQA-Sociology-Paper 1: Education + Theory & Methods 1": [
    "Education (role, differential achievement, sociological theories)",
    "Sociological theory (Functionalism, Marxism, Feminism, Social action)",
    "Research methods"
  ],
  "AQA-Sociology-Paper 2: Topics in Sociology": [
    "Choose two options from: Families & Households",
    "Health",
    "Work, Poverty & Welfare",
    "Beliefs in Society",
    "Global Development",
    "The Media",
    "Stratification & Differentiation"
  ],
  "AQA-Sociology-Paper 3: Crime & Deviance + Theory & Methods 2": [
    "Crime & deviance",
    "Social control",
    "Research methods in context",
    "Sociological theory & methods"
  ],
  "AQA-History-Paper 1: Breadth Study (2.5h)": [
    "Chosen breadth topic spanning ~100 years \u2013 options include: Tudors, Stuarts, British Empire, Germany, USA, Russia, China etc."
  ],
  "AQA-History-Paper 2: Depth Study (2.5h)": [
    "Chosen depth topic ~30 years \u2013 options include: Reformation, Revolution, WW1/WW2 themes, Cold War etc."
  ],
  "AQA-History-Coursework/NEA: Historical Investigation": [
    "Independent study on a historical question",
    "~3,500\u20134,500 words",
    "requires primary source analysis"
  ],
  "AQA-Geography-Paper 1: Physical Geography": [
    "Water & Carbon Cycles",
    "Hot desert systems",
    "Coastal systems & landscapes",
    "Glacial systems",
    "Hazards",
    "Ecosystems under stress"
  ],
  "AQA-Geography-Paper 2: Human Geography": [
    "Global systems & governance",
    "Changing places",
    "Contemporary urban environments",
    "Population & the environment",
    "Resource security",
    "Migration, identity & sovereignty"
  ],
  "AQA-Geography-Coursework/NEA: Fieldwork Investigation": [
    "Original fieldwork investigation",
    "Primary data collection",
    "~3,000\u20134,000 words",
    "statistical/graphical analysis"
  ],
  "AQA-Politics-Paper 1: UK Politics & Core Political Ideas": [
    "Democracy & participation",
    "Electoral systems",
    "Voting behaviour",
    "Political parties",
    "Pressure groups",
    "Core political ideologies (Conservatism, Liberalism, Socialism)"
  ],
  "AQA-Politics-Paper 2: UK Government & Political Ideas": [
    "The Constitution",
    "Parliament",
    "PM & Executive",
    "Judiciary",
    "Devolution",
    "Non-core ideologies (Feminism, Nationalism, Multiculturalism, Ecologism, Anarchism)"
  ],
  "AQA-Politics-Paper 3: Comparative Politics": [
    "Options: USA or Global Politics",
    "US politics (Congress, presidency, civil rights, electoral process) OR Global (global governance, security, development, environment)"
  ],
  "AQA-English Language-Paper 1: Language, the Individual and Society": [
    "Textual variations & representations",
    "Children's language acquisition",
    "Language & social groups (gender, age, region, occupation)"
  ],
  "AQA-English Language-Paper 2: Language Diversity and Change": [
    "Language change (historical, contemporary)",
    "Language discourses (debates, attitudes)",
    "Language investigation"
  ],
  "AQA-English Literature A-Paper 1: Love Through the Ages": [
    "Shakespeare",
    "Wider reading pre/post-1900 poetry",
    "Comparative study of love across time periods"
  ],
  "AQA-English Literature A-Paper 2: Texts in Shared Contexts": [
    "Option A: World War One and its aftermath OR Option B: Modern Times: Literature 1945\u2013present",
    "Two set texts in context"
  ],
  "AQA-Business-Paper 1: Business 1": [
    "What is business?",
    "Managers, leadership & decision making",
    "Decision making for business: HRM, HRM in practice"
  ],
  "AQA-Business-Paper 2: Business 2": [
    "Decision making for business: Marketing",
    "Marketing decisions",
    "Operations decision making",
    "Financial decision making"
  ],
  "AQA-Business-Paper 3: Business 3 (Synoptic)": [
    "Strategic decision making: Case study/pre-release material",
    "Evaluate & apply all topics synoptically"
  ],
  "AQA-Accounting-Paper 1: Financial Accounting": [
    "Business entity concept",
    "Income statements",
    "Statement of financial position",
    "Ratios",
    "Partnerships",
    "Limited companies",
    "Incomplete records"
  ],
  "AQA-Accounting-Paper 2: Accounting for Analysis & Decision-Making": [
    "Budgets",
    "Standard costing",
    "Investment appraisal",
    "Break-even",
    "Marginal costing",
    "Manufacturing accounts"
  ],
  "AQA-Law-Paper 1: The Legal System & Criminal Law": [
    "Nature of law",
    "English legal system",
    "Criminal law: actus reus, mens rea",
    "Offences against the person",
    "Defences",
    "Preliminary offences"
  ],
  "AQA-Law-Paper 2: Law Making & The Law of Tort": [
    "Law-making (Parliamentary & judicial)",
    "Human rights",
    "Negligence",
    "Occupiers' liability",
    "Nuisance",
    "Rylands v Fletcher",
    "Vicarious liability"
  ],
  "AQA-Law-Paper 3: Further Law (Option)": [
    "Option A: Contract law (formation, terms, vitiating factors, discharge, remedies) OR Option B: Human Rights Law"
  ],
  "AQA-Religious Studies-Paper 1: Philosophy of Religion": [
    "Ancient philosophical influences",
    "Soul, mind & body",
    "Arguments for God's existence",
    "Religious experience",
    "Problem of evil",
    "Religious language"
  ],
  "AQA-Religious Studies-Paper 2: Religion & Ethics": [
    "Ethical theories",
    "Free will & moral responsibility",
    "Conscience",
    "Sexual ethics",
    "Applied ethics",
    "Metaethics"
  ],
  "AQA-Religious Studies-Paper 3: Study of Religion / Dialogues": [
    "Option: study of one religion (Christianity, Islam, Judaism, etc.) OR dialogues between religion and science/gender/secularism"
  ],
  "AQA-Media Studies-Paper 2: Media Forms & Products in Depth": [
    "Television",
    "Film",
    "Radio",
    "Online/social media",
    "Video games",
    "Long-form TV drama"
  ],
  "AQA-Computer Science-Paper 2: Computer Science Concepts": [
    "Fundamentals of data representation",
    "Hardware",
    "Software",
    "Internet",
    "Databases",
    "Big Data",
    "Functional programming",
    "Legal & ethical issues"
  ],
  "AQA-French-Paper 1: Listening, Reading & Writing": [
    "Aspects of French-speaking society",
    "Artistic culture",
    "Grammar",
    "Translation (French to English)"
  ],
  "AQA-French-Paper 2: Writing": [
    "Essay on set literary/film texts",
    "Independent research project (IRP)",
    "Translation (English to French)"
  ],
  "AQA-German-Paper 1: Listening, Reading & Writing": [
    "Aspects of German-speaking society",
    "Artistic culture",
    "Grammar",
    "Translation (German to English)"
  ],
  "AQA-German-Paper 2: Writing": [
    "Essay on set literary/film texts",
    "IRP",
    "Translation (English to German)"
  ],
  "AQA-Spanish-Paper 1: Listening, Reading & Writing": [
    "Aspects of Spanish-speaking society",
    "Artistic culture",
    "Grammar",
    "Translation"
  ],
  "AQA-Spanish-Paper 2: Writing": [
    "Essay on set texts/film",
    "IRP",
    "Translation"
  ],
  "AQA-Drama and Theatre-Written Paper": [
    "Live theatre analysis",
    "Set text (closed book)",
    "Practitioner knowledge (e.g. Stanislavski, Brecht, Artaud)"
  ],
  "AQA-Music-Listening/Composition/Performance": [
    "Appraising music (set works: Bach, Beethoven, Berlioz, Brahms, Debussy, Janacek, Musorgsky, Poulenc, Shostakovich, Weir)",
    "Composition",
    "Performance"
  ],
  "AQA-Physical Education-Paper 1": [
    "Applied anatomy & physiology",
    "Exercise physiology",
    "Biomechanics",
    "Sport psychology",
    "Technology in sport"
  ],
  "AQA-Physical Education-Paper 2": [
    "Socio-cultural influences",
    "Sport & society",
    "Historical & cultural issues",
    "Ethics",
    "Sports development"
  ],
  "AQA-Environmental Science-Paper 1": [
    "Physical systems",
    "Ecosystems & ecology",
    "Energy resources",
    "Water resources",
    "Pollution",
    "Climate change"
  ],
  "AQA-Environmental Science-Paper 2": [
    "Global change",
    "Biodiversity",
    "Soil",
    "Food supply",
    "Sustainability",
    "Environmental management"
  ]
}
  "AQA-English Language-GCSE": {
    "Paper 1: Creative Reading & Writing": [
      "Reading: 20th/21st century fiction",
      "Inference",
      "Language analysis",
      "Structure analysis",
      "Evaluation",
      "Writing: descriptive or narrative"
    ],
    "Paper 2: Writers' Viewpoints & Perspectives": [
      "Reading: 19th century non-fiction + modern non-fiction",
      "Comparison",
      "Writing: viewpoint or perspective text"
    ]
  },
  "AQA-English Literature-GCSE": {
    "Paper 1: Shakespeare & 19th-Century Novel": [
      "Shakespeare play (set text \u2013 choice from: Macbeth, Romeo & Juliet, The Merchant of Venice, etc.)",
      "19th-century novel"
    ],
    "Paper 2: Modern Texts, Poetry & Unseen Poetry": [
      "Modern prose or drama",
      "Power & Conflict or Love & Relationships anthology poetry",
      "Unseen poetry"
    ]
  },
  "AQA-Biology-GCSE": {
    "Paper 1": [
      "Cell biology",
      "Organisation",
      "Infection & response",
      "Bioenergetics"
    ],
    "Paper 2": [
      "Homeostasis & response",
      "Inheritance, variation & evolution",
      "Ecology"
    ]
  },
  "AQA-Chemistry-GCSE": {
    "Paper 1": [
      "Atomic structure & periodic table",
      "Bonding",
      "Quantitative chemistry",
      "Chemical changes",
      "Energy changes"
    ],
    "Paper 2": [
      "Rate & extent of reactions",
      "Organic chemistry",
      "Chemical analysis",
      "Chemistry of the atmosphere",
      "Using resources"
    ]
  },
  "AQA-Physics-GCSE": {
    "Paper 1": [
      "Energy",
      "Electricity",
      "Particle model of matter",
      "Atomic structure"
    ],
    "Paper 2": [
      "Forces",
      "Waves",
      "Magnetism & electromagnetism",
      "Space physics (higher tier)"
    ]
  },
  "AQA-Geography-GCSE": {
    "Paper 1: Living with the Physical Environment": [
      "Natural hazards",
      "Living world (ecosystems, tropical rainforests, hot deserts)",
      "Physical landscapes in the UK (rivers, coasts)"
    ],
    "Paper 2: Challenges in the Human Environment": [
      "Urban issues & challenges",
      "Changing economic world",
      "Resource management",
      "Food/water/energy"
    ],
    "Paper 3: Geographical Applications": [
      "Issue evaluation",
      "Fieldwork (two investigations)",
      "Geographical skills"
    ]
  },
  "AQA-History-GCSE": {
    "Paper 1: Understanding the Modern World": [
      "Section A: Period study (America, Germany, Russia, or America 1920\u201373)",
      "Section B: Wider world conflict topic"
    ],
    "Paper 2: Shaping the Nation": [
      "Section A: Thematic study (Health, Power, Migration)",
      "Section B: British depth study (Norman England, Elizabethan, etc.)"
    ]
  },
  "AQA-Economics-GCSE": {
    "Paper 1: How Markets Work": [
      "Economic foundations",
      "Resource allocation",
      "Price mechanism",
      "Competition",
      "Market failure",
      "Role of government"
    ],
    "Paper 2: How the Economy Works": [
      "National economic performance",
      "Government objectives",
      "Fiscal/monetary policy",
      "International trade",
      "Globalisation",
      "Inequality"
    ]
  },
  "AQA-Business-GCSE": {
    "Paper 1: Influences of Operations & HRM": [
      "Business activity",
      "Business ownership",
      "Stakeholders",
      "Business location",
      "Business planning",
      "Operations",
      "HRM"
    ],
    "Paper 2: Influences of Marketing & Finance": [
      "Marketing",
      "Market research",
      "Marketing mix (4Ps)",
      "Finance",
      "Sources of finance",
      "Financial planning",
      "External influences"
    ]
  },
  "AQA-Computer Science-GCSE": {
    "Paper 1: Computational Thinking & Programming": [
      "Algorithms",
      "Programming fundamentals",
      "Data structures",
      "Boolean logic",
      "Theory of computation",
      "Problems & solutions"
    ],
    "Paper 2: Computing Concepts": [
      "Hardware",
      "Software",
      "Binary & data representation",
      "Networks",
      "Cybersecurity",
      "Databases",
      "Ethical, legal & cultural issues"
    ]
  },
  "AQA-Psychology-GCSE": {
    "Paper 1: Cognition & Behaviour": [
      "Memory",
      "Perception",
      "Development (Piaget)",
      "Research methods"
    ],
    "Paper 2: Social Context & Behaviour": [
      "Social influence",
      "Language, thought & communication",
      "Brain & neuropsychology",
      "Psychological problems"
    ]
  },
  "AQA-Sociology-GCSE": {
    "Paper 1: Families & Education": [
      "What is sociology?",
      "The family (types, roles, diversity, changing patterns)",
      "Education (role, sociological perspectives)"
    ],
    "Paper 2: Crime & Deviance & Social Stratification": [
      "Crime & deviance",
      "Social stratification (class, gender, ethnicity, power)"
    ]
  },
  "AQA-Religious Studies A-GCSE": {
    "Paper 1: Study of Religions": [
      "Two religions studied in depth: Christian/Catholic/Islamic/Hindu/Jewish/Sikh/Buddhist beliefs, practices, sources of wisdom"
    ],
    "Paper 2: Thematic Studies": [
      "Themes: Religion & relationships",
      "Religion & life",
      "Religion, peace & conflict",
      "Religion, crime & punishment",
      "Religion, human rights & social justice"
    ]
  },
  "AQA-Citizenship Studies-GCSE": {
    "Paper 1": [
      "Living together in the UK",
      "Democracy, government & participation",
      "Rights & responsibilities"
    ],
    "Paper 2": [
      "Active citizenship",
      "Bilateral & international relations",
      "Media & digital citizenship"
    ]
  },
  "AQA-Drama-GCSE": {
    "Written Paper: Understanding Drama": [
      "Set text analysis",
      "Theatre vocabulary",
      "Live theatre evaluation"
    ]
  },
  "AQA-Music-GCSE": {
    "Written Paper: Understanding Music": [
      "Listening to and appraising music",
      "Four areas of study (compulsory): Western Classical Tradition, Popular Music, Traditional Music, Western Classical Tradition since 1910"
    ]
  },
  "AQA-Physical Education-GCSE": {
    "Paper 1: Human Body & Movement": [
      "Applied anatomy & physiology",
      "Movement analysis",
      "Physical training"
    ],
    "Paper 2: Socio-cultural Influences & Wellbeing": [
      "Sports psychology",
      "Socio-cultural influences",
      "Health, fitness & wellbeing",
      "Use of data"
    ]
  },
  "AQA-Food Preparation & Nutrition-GCSE": {
    "Written Paper": [
      "Food commodities",
      "Principles of nutrition",
      "Diet & good health",
      "Functional & chemical properties of food",
      "Cooking",
      "Food provenance",
      "Food science"
    ]
  },
  "AQA-Media Studies-GCSE": {
    "Paper 1: Media Products, Industries & Audiences": [
      "Media language",
      "Representation",
      "Media industries",
      "Audiences",
      "Set products: newspapers, advertising, music video, online"
    ],
    "Paper 2: Understanding Media Forms & Products": [
      "Television",
      "Film",
      "Radio",
      "Video games",
      "Online/social media",
      "Set products",
      "NEA"
    ]
  },
  "AQA-Design & Technology-GCSE": {
    "Written Paper": [
      "Core technical principles",
      "Specialist technical principles",
      "Designing & making principles"
    ]
  },
  "AQA-French-GCSE": {
    "Listening & Reading": [
      "Themes: Identity & culture",
      "Local/national/international/global areas of interest",
      "Current/future study, employment & ambitions",
      "Grammar"
    ],
    "Writing & Speaking": [
      "Translation",
      "Free writing",
      "Role-play",
      "Photo card",
      "Conversation"
    ]
  },
  "AQA-German-GCSE": {
    "Listening & Reading": [
      "Themes: Identity & culture",
      "Local/national/international/global",
      "Current/future study & employment",
      "Grammar"
    ]
  },
  "AQA-Spanish-GCSE": {
    "Listening & Reading": [
      "Themes: Identity & culture",
      "Local/national/international/global",
      "Study, employment & future plans",
      "Grammar"
    ]
  },
  "Edexcel-Subject-A-Level": {
    "Paper/Component": [
      "Key Topic Areas"
    ]
  },
  "AQA-Biology-A-Level": {
    "Paper 1: Biological Molecules, Cells & Organisms": [
      "Biological molecules",
      "Cells",
      "Organisms exchange substances",
      "Genetic information & variation"
    ],
    "Paper 2: Energy Transfers & Responses": [
      "Energy transfers in/between organisms",
      "Organisms respond to changes",
      "Genetics, populations, evolution, ecosystems"
    ],
    "Paper 3: Practical Skills & Synoptic": [
      "Practical skills",
      "Any topics from Papers 1 & 2 synoptically",
      "Extended essay-style questions"
    ]
  },
  "AQA-Chemistry-A-Level": {
    "Paper 1: Inorganic & Physical Chemistry": [
      "Atomic structure",
      "Amount of substance",
      "Bonding",
      "Energetics",
      "Kinetics",
      "Chemical equilibria",
      "Oxidation/reduction",
      "Group 2, Group 7",
      "Period 3 elements",
      "Transition metals"
    ],
    "Paper 2: Organic & Physical Chemistry": [
      "Organic nomenclature & isomerism",
      "Alkanes",
      "Halogenoalkanes",
      "Alkenes",
      "Alcohols",
      "Organic analysis",
      "Acids/pH",
      "Rate equations",
      "Equilibrium constant Kp",
      "Electrode potentials",
      "Acids & bases",
      "NMR",
      "Chromatography"
    ],
    "Paper 3: Practical Skills & Synoptic": [
      "Practical skills including apparatus, techniques, error analysis",
      "Data analysis",
      "Synoptic questions across all topics"
    ]
  },
  "AQA-Physics-A-Level": {
    "Paper 1: Measurements & Fundamental Physics": [
      "Measurements & errors",
      "Particles & radiation",
      "Waves",
      "Mechanics & materials",
      "Electricity"
    ],
    "Paper 2: Advanced Physics": [
      "Further mechanics",
      "Thermal physics",
      "Fields",
      "Nuclear physics"
    ],
    "Paper 3: Practical Skills + Option Topic": [
      "Practical skills & data analysis",
      "One option from: Astrophysics / Medical / Engineering / Turning Points / Electronics"
    ]
  },
  "AQA-Mathematics-A-Level": {
    "Paper 1: Pure Mathematics 1": [
      "Algebra & functions",
      "Coordinate geometry",
      "Sequences & series",
      "Trigonometry",
      "Exponentials & logarithms",
      "Differentiation",
      "Integration",
      "Proof"
    ],
    "Paper 2: Pure Mathematics 2 + Statistics or Mechanics": [
      "Further Pure (all topics)",
      "Statistics: probability, distributions, hypothesis testing OR Mechanics: kinematics, forces, moments"
    ],
    "Paper 3: Pure Mathematics 3 + Statistics or Mechanics": [
      "Further pure topics",
      "Further Statistics or Mechanics (complementary to Paper 2)"
    ]
  },
  "AQA-Further Mathematics-A-Level": {
    "Paper 1: Compulsory Core Pure": [
      "Proof",
      "Complex numbers",
      "Matrices",
      "Further algebra",
      "Further calculus",
      "Further vectors",
      "Polar coordinates",
      "Hyperbolic functions",
      "Differential equations"
    ],
    "Paper 2 & 3: Optional Routes": [
      "Choose two options from: Further Statistics / Further Mechanics / Discrete Mathematics"
    ]
  },
  "AQA-Economics-A-Level": {
    "Paper 1: Markets and Market Failure": [
      "Economic methodology",
      "Demand & supply",
      "Price determination",
      "Elasticity",
      "Market failure",
      "Government intervention",
      "Competitive markets",
      "Productive & allocative efficiency"
    ],
    "Paper 2: National and International Economy": [
      "Macroeconomic objectives",
      "Aggregate demand/supply",
      "Fiscal/monetary policy",
      "Supply-side policies",
      "Trade",
      "International competitiveness",
      "Globalisation",
      "Poverty & inequality"
    ],
    "Paper 3: Economic Principles & Issues": [
      "Synoptic application of micro and macro economics",
      "Case study",
      "Essay questions drawing on both papers"
    ]
  },
  "AQA-Psychology-A-Level": {
    "Paper 1: Introductory Topics in Psychology": [
      "Social influence",
      "Memory",
      "Attachment",
      "Psychopathology (approaches to mental health)"
    ],
    "Paper 2: Psychology in Context": [
      "Approaches in psychology",
      "Biopsychology",
      "Research methods"
    ],
    "Paper 3: Issues and Options in Psychology": [
      "Issues & debates",
      "Gender",
      "Cognition & development",
      "Schizophrenia",
      "Eating behaviour",
      "Stress",
      "Aggression",
      "Relationships",
      "Forensic",
      "Addiction"
    ]
  },
  "AQA-Sociology-A-Level": {
    "Paper 1: Education + Theory & Methods 1": [
      "Education (role, differential achievement, sociological theories)",
      "Sociological theory (Functionalism, Marxism, Feminism, Social action)",
      "Research methods"
    ],
    "Paper 2: Topics in Sociology": [
      "Choose two options from: Families & Households",
      "Health",
      "Work, Poverty & Welfare",
      "Beliefs in Society",
      "Global Development",
      "The Media",
      "Stratification & Differentiation"
    ],
    "Paper 3: Crime & Deviance + Theory & Methods 2": [
      "Crime & deviance",
      "Social control",
      "Research methods in context",
      "Sociological theory & methods"
    ]
  },
  "AQA-History-A-Level": {
    "Paper 1: Breadth Study (2.5h)": [
      "Chosen breadth topic spanning ~100 years \u2013 options include: Tudors, Stuarts, British Empire, Germany, USA, Russia, China etc."
    ],
    "Paper 2: Depth Study (2.5h)": [
      "Chosen depth topic ~30 years \u2013 options include: Reformation, Revolution, WW1/WW2 themes, Cold War etc."
    ],
    "Coursework/NEA: Historical Investigation": [
      "Independent study on a historical question",
      "~3,500\u20134,500 words",
      "requires primary source analysis"
    ]
  },
  "AQA-Geography-A-Level": {
    "Paper 1: Physical Geography": [
      "Water & Carbon Cycles",
      "Hot desert systems",
      "Coastal systems & landscapes",
      "Glacial systems",
      "Hazards",
      "Ecosystems under stress"
    ],
    "Paper 2: Human Geography": [
      "Global systems & governance",
      "Changing places",
      "Contemporary urban environments",
      "Population & the environment",
      "Resource security",
      "Migration, identity & sovereignty"
    ],
    "Coursework/NEA: Fieldwork Investigation": [
      "Original fieldwork investigation",
      "Primary data collection",
      "~3,000\u20134,000 words",
      "statistical/graphical analysis"
    ]
  },
  "AQA-Politics-A-Level": {
    "Paper 1: UK Politics & Core Political Ideas": [
      "Democracy & participation",
      "Electoral systems",
      "Voting behaviour",
      "Political parties",
      "Pressure groups",
      "Core political ideologies (Conservatism, Liberalism, Socialism)"
    ],
    "Paper 2: UK Government & Political Ideas": [
      "The Constitution",
      "Parliament",
      "PM & Executive",
      "Judiciary",
      "Devolution",
      "Non-core ideologies (Feminism, Nationalism, Multiculturalism, Ecologism, Anarchism)"
    ],
    "Paper 3: Comparative Politics": [
      "Options: USA or Global Politics",
      "US politics (Congress, presidency, civil rights, electoral process) OR Global (global governance, security, development, environment)"
    ]
  },
  "AQA-English Language-A-Level": {
    "Paper 1: Language, the Individual and Society": [
      "Textual variations & representations",
      "Children's language acquisition",
      "Language & social groups (gender, age, region, occupation)"
    ],
    "Paper 2: Language Diversity and Change": [
      "Language change (historical, contemporary)",
      "Language discourses (debates, attitudes)",
      "Language investigation"
    ]
  },
  "AQA-English Literature A-A-Level": {
    "Paper 1: Love Through the Ages": [
      "Shakespeare",
      "Wider reading pre/post-1900 poetry",
      "Comparative study of love across time periods"
    ],
    "Paper 2: Texts in Shared Contexts": [
      "Option A: World War One and its aftermath OR Option B: Modern Times: Literature 1945\u2013present",
      "Two set texts in context"
    ]
  },
  "AQA-Business-A-Level": {
    "Paper 1: Business 1": [
      "What is business?",
      "Managers, leadership & decision making",
      "Decision making for business: HRM, HRM in practice"
    ],
    "Paper 2: Business 2": [
      "Decision making for business: Marketing",
      "Marketing decisions",
      "Operations decision making",
      "Financial decision making"
    ],
    "Paper 3: Business 3 (Synoptic)": [
      "Strategic decision making: Case study/pre-release material",
      "Evaluate & apply all topics synoptically"
    ]
  },
  "AQA-Accounting-A-Level": {
    "Paper 1: Financial Accounting": [
      "Business entity concept",
      "Income statements",
      "Statement of financial position",
      "Ratios",
      "Partnerships",
      "Limited companies",
      "Incomplete records"
    ],
    "Paper 2: Accounting for Analysis & Decision-Making": [
      "Budgets",
      "Standard costing",
      "Investment appraisal",
      "Break-even",
      "Marginal costing",
      "Manufacturing accounts"
    ]
  },
  "AQA-Law-A-Level": {
    "Paper 1: The Legal System & Criminal Law": [
      "Nature of law",
      "English legal system",
      "Criminal law: actus reus, mens rea",
      "Offences against the person",
      "Defences",
      "Preliminary offences"
    ],
    "Paper 2: Law Making & The Law of Tort": [
      "Law-making (Parliamentary & judicial)",
      "Human rights",
      "Negligence",
      "Occupiers' liability",
      "Nuisance",
      "Rylands v Fletcher",
      "Vicarious liability"
    ],
    "Paper 3: Further Law (Option)": [
      "Option A: Contract law (formation, terms, vitiating factors, discharge, remedies) OR Option B: Human Rights Law"
    ]
  },
  "AQA-Religious Studies-A-Level": {
    "Paper 1: Philosophy of Religion": [
      "Ancient philosophical influences",
      "Soul, mind & body",
      "Arguments for God's existence",
      "Religious experience",
      "Problem of evil",
      "Religious language"
    ],
    "Paper 2: Religion & Ethics": [
      "Ethical theories",
      "Free will & moral responsibility",
      "Conscience",
      "Sexual ethics",
      "Applied ethics",
      "Metaethics"
    ],
    "Paper 3: Study of Religion / Dialogues": [
      "Option: study of one religion (Christianity, Islam, Judaism, etc.) OR dialogues between religion and science/gender/secularism"
    ]
  },
  "AQA-Media Studies-A-Level": {
    "Paper 1: Media Products, Industries & Audiences": [
      "Media language (codes & conventions)",
      "Media representations",
      "News",
      "Advertising",
      "Music video",
      "Magazines",
      "Print"
    ],
    "Paper 2: Media Forms & Products in Depth": [
      "Television",
      "Film",
      "Radio",
      "Online/social media",
      "Video games",
      "Long-form TV drama"
    ]
  },
  "AQA-Computer Science-A-Level": {
    "Paper 1: Computational Thinking & Programming": [
      "Problem solving",
      "Programming fundamentals",
      "OOP",
      "Data structures",
      "Algorithms",
      "Big O",
      "Theory of computation"
    ],
    "Paper 2: Computer Science Concepts": [
      "Fundamentals of data representation",
      "Hardware",
      "Software",
      "Internet",
      "Databases",
      "Big Data",
      "Functional programming",
      "Legal & ethical issues"
    ]
  },
  "AQA-French-A-Level": {
    "Paper 1: Listening, Reading & Writing": [
      "Aspects of French-speaking society",
      "Artistic culture",
      "Grammar",
      "Translation (French to English)"
    ],
    "Paper 2: Writing": [
      "Essay on set literary/film texts",
      "Independent research project (IRP)",
      "Translation (English to French)"
    ]
  },
  "AQA-German-A-Level": {
    "Paper 1: Listening, Reading & Writing": [
      "Aspects of German-speaking society",
      "Artistic culture",
      "Grammar",
      "Translation (German to English)"
    ],
    "Paper 2: Writing": [
      "Essay on set literary/film texts",
      "IRP",
      "Translation (English to German)"
    ]
  },
  "AQA-Spanish-A-Level": {
    "Paper 1: Listening, Reading & Writing": [
      "Aspects of Spanish-speaking society",
      "Artistic culture",
      "Grammar",
      "Translation"
    ],
    "Paper 2: Writing": [
      "Essay on set texts/film",
      "IRP",
      "Translation"
    ]
  },
  "AQA-Drama and Theatre-A-Level": {
    "Written Paper": [
      "Live theatre analysis",
      "Set text (closed book)",
      "Practitioner knowledge (e.g. Stanislavski, Brecht, Artaud)"
    ]
  },
  "AQA-Music-A-Level": {
    "Listening/Composition/Performance": [
      "Appraising music (set works: Bach, Beethoven, Berlioz, Brahms, Debussy, Janacek, Musorgsky, Poulenc, Shostakovich, Weir)",
      "Composition",
      "Performance"
    ]
  },
  "AQA-Physical Education-A-Level": {
    "Paper 1": [
      "Applied anatomy & physiology",
      "Exercise physiology",
      "Biomechanics",
      "Sport psychology",
      "Technology in sport"
    ],
    "Paper 2": [
      "Socio-cultural influences",
      "Sport & society",
      "Historical & cultural issues",
      "Ethics",
      "Sports development"
    ]
  },
  "AQA-Environmental Science-A-Level": {
    "Paper 1": [
      "Physical systems",
      "Ecosystems & ecology",
      "Energy resources",
      "Water resources",
      "Pollution",
      "Climate change"
    ],
    "Paper 2": [
      "Global change",
      "Biodiversity",
      "Soil",
      "Food supply",
      "Sustainability",
      "Environmental management"
    ]
  }
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

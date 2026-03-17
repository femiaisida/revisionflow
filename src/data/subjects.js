// src/data/subjects.js

export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CCEA', 'Cambridge']

export const GCSE_SUBJECTS = [
  'Biology', 'Chemistry', 'Physics', 'Combined Science',
  'Mathematics', 'Further Mathematics',
  'English Language', 'English Literature',
  'History', 'Geography',
  'Computer Science', 'Engineering', 'Design & Technology',
  'Art & Design', 'Music', 'Drama', 'PE',
  'French', 'German', 'Spanish', 'Mandarin', 'Latin',
  'Religious Studies', 'Sociology', 'Psychology',
  'Business Studies', 'Economics',
  'Food Technology', 'Media Studies', 'Film Studies',
]

export const ALEVEL_SUBJECTS = [
  'Biology', 'Chemistry', 'Physics',
  'Mathematics', 'Further Mathematics', 'Statistics',
  'English Language', 'English Literature', 'English Lang & Lit',
  'History', 'Geography',
  'Computer Science', 'Engineering',
  'Art & Design', 'Music', 'Drama & Theatre',
  'French', 'German', 'Spanish', 'Mandarin', 'Latin', 'Classical Greek',
  'Religious Studies', 'Philosophy', 'Sociology', 'Psychology',
  'Business', 'Economics', 'Accounting',
  'Law', 'Politics', 'Government & Politics',
  'Media Studies', 'Film Studies', 'Photography',
  'Design & Technology', 'Product Design',
  'Physical Education', 'Sport Science',
]

export const SUBJECT_COLOURS = {
  'Biology':            '#2E7D32',
  'Chemistry':          '#E65100',
  'Physics':            '#4A148C',
  'Combined Science':   '#1B5E20',
  'Mathematics':        '#1565C0',
  'Further Mathematics':'#0D47A1',
  'English Language':   '#00695C',
  'English Literature': '#4E342E',
  'History':            '#5D4037',
  'Geography':          '#558B2F',
  'Computer Science':   '#1B5E20',
  'French':             '#1A237E',
  'German':             '#6A1B9A',
  'Spanish':            '#B71C1C',
  'Business Studies':   '#AD1457',
  'Economics':          '#E65100',
  'Psychology':         '#006064',
  'Sociology':          '#37474F',
  'Religious Studies':  '#4E342E',
  'Music':              '#880E4F',
  'Drama':              '#311B92',
  'Art & Design':       '#BF360C',
  'PE':                 '#1B5E20',
  'default':            '#7c3aed',
}

export const GRADE_BOUNDARIES_GCSE = {
  // Example AQA Maths Higher 2023 — format: [grade9, grade8, grade7, grade6, grade5, grade4, grade3, grade2, grade1]
  // Full dataset would be loaded from Firestore; this is the seed structure
  'AQA-Mathematics-Higher-2023': { maxMarks: 240, boundaries: [176,152,124,100,80,64,44,28,12] },
  'AQA-Mathematics-Foundation-2023': { maxMarks: 240, boundaries: [null,null,null,null,151,120,89,58,27] },
  'AQA-English Language-2023': { maxMarks: 160, boundaries: [114,103,91,79,67,55,42,29,16] },
  'AQA-English Literature-2023': { maxMarks: 160, boundaries: [123,110,96,82,67,53,39,25,11] },
}

export const PAPER_STRUCTURES = {
  // Format: { board, subject, tier, year, paper, totalMarks, questions: [{num, marks}] }
  // Seeded examples — more are added by admin and community via Firestore
  'AQA-Mathematics-Higher-2024-P1': {
    board: 'AQA', subject: 'Mathematics', tier: 'Higher', year: 2024, paper: 1,
    totalMarks: 80,
    questions: Array.from({length: 27}, (_, i) => ({ num: i+1, marks: i < 10 ? 2 : i < 20 ? 3 : 4 })),
  },
  'AQA-Mathematics-Higher-2024-P2': {
    board: 'AQA', subject: 'Mathematics', tier: 'Higher', year: 2024, paper: 2,
    totalMarks: 80,
    questions: Array.from({length: 25}, (_, i) => ({ num: i+1, marks: i < 8 ? 2 : i < 18 ? 3 : 5 })),
  },
}

export const XP_REWARDS = {
  sessionCompleted: 50,
  paperCompleted: 100,
  streakDay: 25,
  streakWeek: 100,
  streakMonth: 500,
  friendAdded: 20,
  onboardingComplete: 200,
  topicConfidenceUpdated: 10,
  mistakeLogged: 15,
  noteAdded: 10,
}

export const LEVELS = Array.from({ length: 50 }, (_, i) => ({
  level: i + 1,
  xpRequired: Math.floor(100 * Math.pow(1.15, i)),
  title: [
    'Newcomer','Studier','Consistent','Rising','Focused',
    'Dedicated','Diligent','Scholar','High Achiever','Master',
  ][Math.floor(i / 5)] || 'Legend',
}))

export const BADGES = [
  { id: 'first_session',    name: 'First Step',      desc: 'Complete your first revision session',     icon: '🎯', xp: 50 },
  { id: 'streak_3',         name: 'Hat Trick',        desc: '3-day revision streak',                    icon: '🔥', xp: 75 },
  { id: 'streak_7',         name: 'Week Warrior',     desc: '7-day revision streak',                    icon: '💪', xp: 150 },
  { id: 'streak_30',        name: 'Monthly Master',   desc: '30-day revision streak',                   icon: '🏆', xp: 500 },
  { id: 'paper_10',         name: 'Paper Pusher',     desc: 'Complete 10 past papers',                  icon: '📝', xp: 100 },
  { id: 'paper_50',         name: 'Exam Expert',      desc: 'Complete 50 past papers',                  icon: '🎓', xp: 300 },
  { id: 'all_subjects',     name: 'Balanced Scholar', desc: 'Revise all your subjects in one week',     icon: '⚖️', xp: 200 },
  { id: 'session_100',      name: 'Centurion',        desc: '100 revision sessions completed',          icon: '💯', xp: 400 },
  { id: 'friend_5',         name: 'Study Squad',      desc: 'Add 5 friends',                           icon: '👥', xp: 100 },
  { id: 'grade_9',          name: 'Grade Master',     desc: 'Score a grade 9 on a past paper',          icon: '⭐', xp: 200 },
  { id: 'perfect_paper',    name: 'Perfectionist',    desc: 'Score 100% on a past paper',              icon: '💎', xp: 500 },
  { id: 'mistake_log_20',   name: 'Error Analyst',    desc: 'Log 20 mistakes in your mistake tracker', icon: '🔍', xp: 100 },
  { id: 'calendar_import',  name: 'Planner',          desc: 'Import a revision calendar',               icon: '📅', xp: 50 },
  { id: 'ai_plan',          name: 'AI Student',       desc: 'Generate an AI study plan',               icon: '🤖', xp: 75 },
]

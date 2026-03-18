// src/data/subjects.js
export const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'CCEA', 'Cambridge']

export const GCSE_SUBJECTS = [
  'Biology', 'Chemistry', 'Physics', 'Combined Science: Trilogy', 'Combined Science: Synergy',
  'Mathematics', 'Further Mathematics',
  'English Language', 'English Literature',
  'History', 'Geography',
  'Computer Science', 'Engineering', 'Design & Technology',
  'Art & Design', 'Music', 'Drama',
  'Physical Education',
  'French', 'German', 'Spanish', 'Mandarin Chinese', 'Arabic', 'Polish', 'Urdu',
  'Religious Studies', 'Sociology', 'Psychology',
  'Business Studies', 'Economics',
  'Media Studies', 'Film Studies',
  'Food Preparation & Nutrition',
  'Statistics',
]

export const ALEVEL_SUBJECTS = [
  'Biology', 'Chemistry', 'Physics',
  'Mathematics', 'Further Mathematics', 'Statistics',
  'English Language', 'English Literature', 'English Language & Literature',
  'History', 'Geography',
  'Computer Science', 'Engineering',
  'Art & Design', 'Music', 'Drama & Theatre Studies',
  'Physical Education',
  'French', 'German', 'Spanish', 'Mandarin Chinese', 'Arabic', 'Latin', 'Classical Greek',
  'Religious Studies', 'Philosophy', 'Sociology', 'Psychology',
  'Business', 'Economics', 'Accounting',
  'Law', 'Politics',
  'Media Studies', 'Film Studies', 'Photography',
  'Design & Technology', 'Product Design',
  'Environmental Science',
]

export const BTEC_L2_SUBJECTS = [
  'BTEC Tech Award: Health & Social Care',
  'BTEC Tech Award: Sport',
  'BTEC Tech Award: Creative Media Production',
  'BTEC Tech Award: Engineering',
  'BTEC Tech Award: Performing Arts',
  'BTEC Tech Award: Business',
  'BTEC Tech Award: Hospitality',
  'BTEC Tech Award: IT',
  'BTEC Tech Award: Animal Care',
  'BTEC Tech Award: Child Development',
  'BTEC Tech Award: Music Practice',
]

export const BTEC_L3_SUBJECTS = [
  'BTEC National: Business',
  'BTEC National: IT',
  'BTEC National: Health & Social Care',
  'BTEC National: Sport',
  'BTEC National: Engineering',
  'BTEC National: Performing Arts',
  'BTEC National: Art & Design',
  'BTEC National: Media Production',
  'BTEC National: Science',
  'BTEC National: Applied Science',
  'BTEC National: Law',
  'BTEC National: Criminology',
  'BTEC National: Psychology',
  'BTEC National: Travel & Tourism',
  'BTEC National: Construction',
  'BTEC National: Public Services',
  'BTEC National: Childcare & Education',
]

export const GRADE_OPTIONS = {
  GCSE:              ['9','8','7','6','5','4','3','2','1','U'],
  'Combined Science':['9-9','9-8','8-8','8-7','7-7','7-6','6-6','6-5','5-5','5-4','4-4','4-3','3-3','U'],
  'A-Level':         ['A*','A','B','C','D','E','U'],
  'BTEC-L2':         ['D*','D','M','P','U'],
  'BTEC-L3':         ['D*D*','D*D','DD','DM','MM','MP','PP','U'],
}

export function getGradeOptions(subjectName, qualification) {
  if (!subjectName) return GRADE_OPTIONS.GCSE
  if (subjectName.startsWith('BTEC National')) return GRADE_OPTIONS['BTEC-L3']
  if (subjectName.startsWith('BTEC Tech Award')) return GRADE_OPTIONS['BTEC-L2']
  if (subjectName.includes('Combined Science')) return GRADE_OPTIONS['Combined Science']
  if (qualification === 'A-Level') return GRADE_OPTIONS['A-Level']
  return GRADE_OPTIONS.GCSE
}

export function getSubjectList(qualification) {
  if (qualification === 'A-Level') return ALEVEL_SUBJECTS
  if (qualification === 'BTEC-L2') return BTEC_L2_SUBJECTS
  if (qualification === 'BTEC-L3') return BTEC_L3_SUBJECTS
  return GCSE_SUBJECTS
}

export const SUBJECT_COLOURS = {
  'Biology':'#27ae60','Chemistry':'#8e44ad','Physics':'#2980b9',
  'Combined Science: Trilogy':'#16a085','Combined Science: Synergy':'#1abc9c',
  'Mathematics':'#e74c3c','Further Mathematics':'#c0392b','Statistics':'#e67e22',
  'English Language':'#f39c12','English Literature':'#d35400',
  'History':'#795548','Geography':'#4caf50',
  'Computer Science':'#3498db','Engineering':'#607d8b','Design & Technology':'#9c27b0',
  'Art & Design':'#e91e63','Music':'#673ab7','Drama':'#ff5722','Drama & Theatre Studies':'#ff5722',
  'Physical Education':'#ff9800',
  'French':'#1565c0','German':'#b71c1c','Spanish':'#e65100',
  'Mandarin Chinese':'#c62828','Arabic':'#1b5e20','Polish':'#283593','Urdu':'#4a148c',
  'Latin':'#5d4037','Classical Greek':'#4e342e',
  'Religious Studies':'#795548','Philosophy':'#6d4c41','Sociology':'#546e7a','Psychology':'#6d4c41',
  'Business Studies':'#00897b','Business':'#00897b','Economics':'#00acc1','Accounting':'#0097a7',
  'Law':'#37474f','Politics':'#1a237e',
  'Media Studies':'#ad1457','Film Studies':'#880e4f','Photography':'#6a1b9a',
  'Food Preparation & Nutrition':'#558b2f',
  'Product Design':'#7b1fa2','Environmental Science':'#2e7d32',
  'default':'#546e7a',
}

export function subjectColour(name) {
  if (!name) return SUBJECT_COLOURS.default
  if (name.startsWith('BTEC')) return '#e65100'
  return SUBJECT_COLOURS[name] || SUBJECT_COLOURS.default
}

export function isTiered(subjectName) {
  const tiered = ['Mathematics','Further Mathematics','Biology','Chemistry','Physics',
    'Combined Science: Trilogy','Combined Science: Synergy','Statistics']
  return tiered.includes(subjectName)
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

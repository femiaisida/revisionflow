// src/system/badges.js
// Derives which badges a user has earned from their profile data.
// The BADGE_LIST (with icons, names, descriptions) lives in src/data/badges.js

export function calculateBadges(user) {
  if (!user) return []
  const earned = []

  const streak       = user.streak        || 0
  const xp           = user.xp            || 0
  const friends      = user.friends       || []
  const totalSessions= user.totalSessions || 0
  const totalPapers  = user.totalPapers   || 0

  // Streaks
  if (streak >= 3)   earned.push('streak_3')
  if (streak >= 7)   earned.push('streak_7')
  if (streak >= 14)  earned.push('streak_14')
  if (streak >= 30)  earned.push('streak_30')
  if (streak >= 100) earned.push('streak_100')

  // XP milestones (kept for backward compat — not shown as "XP badge")
  // Sessions
  if (totalSessions >= 1)  earned.push('first_session')
  if (totalSessions >= 10) earned.push('ten_sessions')

  // Papers
  if (totalPapers >= 1)  earned.push('first_paper')
  if (totalPapers >= 10) earned.push('ten_papers')
  if (totalPapers >= 50) earned.push('fifty_papers')

  // Social
  if (friends.length >= 1) earned.push('first_friend')
  if (friends.length >= 3) earned.push('three_friends')

  // Merge with badges stored on user doc (awarded dynamically via checkAndAwardBadge)
  const stored = user.badges || []
  const merged = Array.from(new Set([...earned, ...stored]))

  return merged
}

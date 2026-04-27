// src/system/gamification.js
// XP thresholds: level 1 needs 100 XP, level 2 needs 200, etc. (linear, not exponential)
// This prevents bizarre jumps like level 17 from a small XP award.

export function getXPThreshold(level) {
  return level * 100
}

export function calculateLevel(totalXP) {
  if (!totalXP || totalXP < 0) return { level: 1, currentXP: 0, nextLevelXP: 100 }

  let level = 1
  let xp    = totalXP

  while (xp >= getXPThreshold(level)) {
    xp -= getXPThreshold(level)
    level++
  }

  return {
    level,
    currentXP:   Math.floor(xp),
    nextLevelXP: getXPThreshold(level),
  }
}

// XP amounts awarded per action
export const XP_REWARDS = {
  session_complete: 20,
  paper_attempt:    30,
  add_topic:        10,
  resolve_mistake:  15,
  daily_quest:      25,
  add_friend:       10,
  referral_join:   100,
  referral_reward: 200,
  ai_plan:          20,
  flashcards:       15,
}

// src/system/dashboard.js
import { calculateLevel } from './gamification'
import { calculateBadges } from './badges'

export function buildDashboard(user) {
  if (!user) return null
  const levelData = calculateLevel(user.xp || 0)
  const badges    = calculateBadges(user)

  return {
    ...user,
    level:      levelData.level,
    currentXP:  levelData.currentXP,
    nextLevelXP:levelData.nextLevelXP,
    xpProgress: levelData.nextLevelXP > 0
      ? Math.round((levelData.currentXP / levelData.nextLevelXP) * 100)
      : 0,
    badgeCount:   badges.length,
    earnedBadges: badges,
  }
}

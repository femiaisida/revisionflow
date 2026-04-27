import { calculateLevel } from "./gamification";
import { calculateBadges } from "./badges";

export function buildDashboard(user) {
  const levelData = calculateLevel(user.xp);
  const badges = calculateBadges(user);

  return {
    ...user,
    level: levelData.level,
    currentXP: levelData.currentXP,
    nextLevelXP: levelData.nextLevelXP,
    badgeCount: badges.length,
  };
}

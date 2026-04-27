export function calculateBadges(user) {
  const badges = [];

  if (user.streak >= 7) badges.push("7_day_streak");
  if (user.xp >= 1000) badges.push("xp_1000");
  if (user.level >= 10) badges.push("level_10");

  return badges;
}

export function getXPThreshold(level) {
  return Math.floor(100 * Math.pow(level, 1.5));
}

export function calculateLevel(totalXP) {
  let level = 1;
  let xp = totalXP;

  while (xp >= getXPThreshold(level)) {
    xp -= getXPThreshold(level);
    level++;
  }

  return {
    level,
    currentXP: xp,
    nextLevelXP: getXPThreshold(level),
  };
}

export function updateStreak(lastLoginDate, streak) {
  const today = new Date().toDateString();

  if (lastLoginDate === today) return streak;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastLoginDate === yesterday.toDateString()) {
    return streak + 1;
  }

  return 1;
}

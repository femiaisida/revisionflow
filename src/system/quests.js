export function updateQuests(quests, action) {
  const updated = { ...quests };

  if (action === "complete_task") {
    updated.daily = (updated.daily || 0) + 1;
  }

  return updated;
}

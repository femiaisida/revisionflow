// src/utils/notifications.js

export async function requestNotificationPermission() {
  if (!('Notification' in window)) return false
  if (Notification.permission === 'granted') return true
  if (Notification.permission === 'denied') return false
  const result = await Notification.requestPermission()
  return result === 'granted'
}

export function sendNotification(title, body, options = {}) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return
  const n = new Notification(title, {
    body,
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    tag: options.tag || 'revisionflow',
    requireInteraction: options.requireInteraction || false,
    ...options,
  })
  if (options.onClick) n.onclick = options.onClick
  return n
}

export function scheduleSessionReminder(session, minutesBefore = 5) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return null
  const sessionTime = session.startTime ? new Date(session.startTime) : null
  if (!sessionTime) return null
  const reminderTime = new Date(sessionTime.getTime() - minutesBefore * 60000)
  const now = new Date()
  const delay = reminderTime.getTime() - now.getTime()
  if (delay <= 0) return null
  const timeoutId = setTimeout(() => {
    sendNotification(
      `Revision session starting in ${minutesBefore} minutes`,
      session.title || `${session.subject} – ${session.type}`,
      { tag: `session-${session.id}`, requireInteraction: true }
    )
  }, delay)
  return timeoutId
}

export function cancelReminder(timeoutId) {
  if (timeoutId) clearTimeout(timeoutId)
}

export function sendTimerNotification(label) {
  sendNotification('⏱ Timer complete!', label || 'Your revision timer has finished.', {
    tag: 'timer-complete',
    requireInteraction: true,
  })
}

// ── Daily revision reminder ────────────────────────────────────────────────────
// Schedules a daily browser notification at a user-set time.
// Uses setTimeout chained to a 24h loop — works while tab is open.
// For true background notifications, a push server would be needed.

let dailyReminderTimeout = null

export function scheduleDailyReminder(timeStr, getSessionCount) {
  // timeStr format: "HH:MM" e.g. "17:00"
  clearDailyReminder()

  function scheduleNext() {
    const now = new Date()
    const [hh, mm] = timeStr.split(':').map(Number)
    const next = new Date()
    next.setHours(hh, mm, 0, 0)
    if (next <= now) next.setDate(next.getDate() + 1)

    const delay = next.getTime() - now.getTime()
    dailyReminderTimeout = setTimeout(async () => {
      const count = await getSessionCount()
      if ('Notification' in window && Notification.permission === 'granted') {
        const body = count > 0
          ? `You have ${count} revision session${count !== 1 ? 's' : ''} scheduled today. Keep the streak going! 🔥`
          : "No sessions scheduled today — consider adding one to stay on track."
        new Notification('RevisionFlow — Time to revise! 📚', { body, icon: '/icons/icon-192.png' })
      }
      scheduleNext() // reschedule for tomorrow
    }, delay)
  }

  scheduleNext()
}

export function clearDailyReminder() {
  if (dailyReminderTimeout) {
    clearTimeout(dailyReminderTimeout)
    dailyReminderTimeout = null
  }
}

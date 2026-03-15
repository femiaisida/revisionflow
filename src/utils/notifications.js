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

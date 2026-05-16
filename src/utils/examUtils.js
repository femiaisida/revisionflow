// src/utils/examUtils.js
// Shared utilities for exam date filtering used across Dashboard,
// EmergencyBanner, ExamDates, and upcoming exams sections.

/**
 * Returns true if an exam should be considered "done" and hidden.
 * An exam is done if:
 * - It was yesterday or earlier, OR
 * - It is today AND it is past 14:00 (2pm) local time
 */
export function isExamDone(examDateStr) {
  if (!examDateStr) return false
  const parts   = String(examDateStr).slice(0, 10).split('-').map(Number)
  const examDay = new Date(parts[0], parts[1] - 1, parts[2]) // local midnight on exam day
  const now     = new Date()
  const today   = new Date(); today.setHours(0, 0, 0, 0)

  // Exam was before today
  if (examDay < today) return true

  // Exam is today — hide after 2pm
  if (examDay.getTime() === today.getTime()) {
    return now.getHours() >= 14
  }

  return false
}

/**
 * Returns days until exam (positive = future, 0 = today, negative = past)
 * Always compares date-only — no time contamination.
 */
export function daysUntilExam(examDateStr) {
  if (!examDateStr) return null
  const parts   = String(examDateStr).slice(0, 10).split('-').map(Number)
  const examDay = new Date(parts[0], parts[1] - 1, parts[2])
  const today   = new Date(); today.setHours(0, 0, 0, 0)
  return Math.round((examDay - today) / 86400000)
}

/**
 * Filters an array of exam objects, removing done ones.
 * Each exam object must have an examDate field (YYYY-MM-DD).
 */
export function filterUpcomingExams(exams) {
  return (exams || []).filter(e => e.examDate && !isExamDone(e.examDate))
}

/**
 * Returns a human-readable countdown label.
 */
export function countdownLabel(examDateStr) {
  const days = daysUntilExam(examDateStr)
  if (days === null)  return '—'
  if (days < 0)       return 'Done'
  if (days === 0)     return 'TODAY'
  if (days === 1)     return 'Tomorrow'
  if (days < 7)       return days + ' days'
  if (days < 14)      return '1 week'
  if (days < 21)      return '2 weeks'
  return Math.ceil(days / 7) + ' weeks'
}

/**
 * Returns urgency level for colour coding.
 */
export function countdownUrgency(examDateStr) {
  if (isExamDone(examDateStr)) return 'done'
  const days = daysUntilExam(examDateStr)
  if (days === null)  return 'done'
  if (days <= 7)      return 'urgent'
  if (days <= 21)     return 'soon'
  return 'normal'
}

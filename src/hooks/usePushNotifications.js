import { useEffect } from 'react'
import { requestNotificationPermission } from '../utils/notifications'

export function usePushNotifications() {
  useEffect(() => {
    const asked = localStorage.getItem('rf-notif-asked')
    if (!asked) {
      setTimeout(() => {
        requestNotificationPermission().then(granted => {
          localStorage.setItem('rf-notif-asked', '1')
        })
      }, 3000)
    }
  }, [])
}

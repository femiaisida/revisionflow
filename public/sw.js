// RevisionFlow Service Worker v3
// Strategy: network-first for API calls, cache-first for static assets
// Offline: serves cached app shell + cached page data when offline

const CACHE_STATIC  = 'rf-static-v3'
const CACHE_DYNAMIC = 'rf-dynamic-v3'

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
]

// On install — cache static shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_STATIC).then(c => c.addAll(STATIC_ASSETS))
  )
  self.skipWaiting()
})

// On activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_STATIC && k !== CACHE_DYNAMIC)
          .map(k => caches.delete(k))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)

  // Skip non-GET and cross-origin Firebase/Google API calls
  if (e.request.method !== 'GET') return
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('securetoken.googleapis.com') ||
    url.hostname.includes('apis.google.com')
  ) return

  // Navigation requests (HTML) — network first, fall back to cached index.html
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone()
          caches.open(CACHE_DYNAMIC).then(c => c.put(e.request, clone))
          return res
        })
        .catch(() => caches.match('/index.html'))
    )
    return
  }

  // Static assets (JS, CSS, fonts, images) — cache first, update in background
  if (
    url.pathname.match(/\.(js|css|woff2?|ttf|png|jpg|svg|ico)$/) ||
    url.pathname.startsWith('/assets/')
  ) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const network = fetch(e.request).then(res => {
          caches.open(CACHE_STATIC).then(c => c.put(e.request, res.clone()))
          return res
        }).catch(() => cached)
        return cached || network
      })
    )
    return
  }

  // Everything else — network first, cache as fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          caches.open(CACHE_DYNAMIC).then(c => c.put(e.request, res.clone()))
        }
        return res
      })
      .catch(() => caches.match(e.request))
  )
})

// Handle background sync for offline queued actions
self.addEventListener('sync', e => {
  if (e.tag === 'sync-sessions') {
    e.waitUntil(syncOfflineData())
  }
})

async function syncOfflineData() {
  // Placeholder — offline queue sync handled in app layer
}

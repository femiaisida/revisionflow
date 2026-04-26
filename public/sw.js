const CACHE_VERSION = 'v5'
const CACHE_STATIC = `rf-static-${CACHE_VERSION}`
const CACHE_DYNAMIC = `rf-dynamic-${CACHE_VERSION}`
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_STATIC).then((cache) => cache.addAll(STATIC_ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter((key) => ![CACHE_STATIC, CACHE_DYNAMIC].includes(key)).map((key) => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('securetoken.googleapis.com') ||
    url.hostname.includes('apis.google.com') ||
    url.hostname.includes('generativelanguage.googleapis.com') ||
    url.hostname.includes('api.mistral.ai')
  ) {
    return
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone()
          caches.open(CACHE_DYNAMIC).then((cache) => cache.put(event.request, clone))
          return response
        })
        .catch(async () => (await caches.match('/index.html')) || Response.error())
    )
    return
  }

  const isStaticAsset = url.pathname.match(/\.(js|css|woff2?|ttf|png|jpg|svg|ico|webp)$/) || url.pathname.startsWith('/assets/')

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request)
          .then((response) => {
            if (response.ok && response.status < 400) {
              const clone = response.clone()
              caches.open(CACHE_STATIC).then((cache) => cache.put(event.request, clone))
            }
            return response
          })
          .catch(() => cached)

        return cached || networkFetch
      })
    )
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && response.status < 400) {
          const clone = response.clone()
          caches.open(CACHE_DYNAMIC).then((cache) => cache.put(event.request, clone))
        }
        return response
      })
      .catch(() => caches.match(event.request))
  )
})

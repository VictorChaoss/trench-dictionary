const CACHE_NAME = 'trench-dict-v6';

// Static assets that never change — cache-first is fine
const STATIC_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.woff', '.woff2'];

// ---- INSTALL ----
self.addEventListener('install', event => {
  // Skip waiting immediately so this SW activates right away
  self.skipWaiting();
});

// ---- ACTIVATE: wipe all old caches ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// ---- FETCH ----
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. API calls — always network, no cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify({ error: 'Offline' }), {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // 2. JS / HTML / CSS — network-first so updates are always instant
  const isCodeFile = ['.js', '.html', '.css'].some(ext => url.pathname.endsWith(ext))
                  || url.pathname === '/' || url.pathname === '';
  if (isCodeFile) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request)) // fallback to cache if offline
    );
    return;
  }

  // 3. Images / fonts — cache-first (they don't change)
  const isStatic = STATIC_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
                || url.hostname.includes('fonts.googleapis.com')
                || url.hostname.includes('fonts.gstatic.com');
  if (isStatic) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // 4. Everything else — network with cache fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

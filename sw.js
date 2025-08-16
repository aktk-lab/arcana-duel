const BASE = '/arcana-duel';
const CACHE = 'arcana-cache-v3';
const ASSETS = [
  `${BASE}/`,
  `${BASE}/index.html?v=3`,
  `${BASE}/manifest.webmanifest`,
  `${BASE}/sw.js`
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin === location.origin && u.pathname.startsWith(BASE)) {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        if (e.request.method === 'GET' && resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }))
    );
  }
});

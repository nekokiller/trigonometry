/*
 * Service Worker - 三角函數計時比賽 v2
 * Cache-First 策略，所有資源啟動時預先快取，網路失效時離線可用
 */

const CACHE_VERSION = 'trig-quiz-v2-20260526';
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 安裝：開啟 cache 並預先快取所有資源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 啟用：清除舊版 cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION)
            .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// fetch：Cache First，cache miss 才打 network
self.addEventListener('fetch', event => {
  // 只處理同源 GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // 只 cache 同源成功的回應
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // 網路失敗且無快取 → 回傳 index.html 作為 fallback (SPA route fallback)
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

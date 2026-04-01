const CACHE_NAME = 'movie-v1';
const ASSETS = ['/', '/index.html', '/detalhes.html', '/style.css', '/script.js', '/detalhes.js', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
const cacheName = 'innohep-dosing-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css', // Update with your CSS file path
  '/script.js',  // Update with your JS file path
  // Add other assets like images, fonts, etc.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

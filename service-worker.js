---
---
const BASEURL = '{{ site.baseurl }}';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('recipes-cache-v1').then(function(cache) {
      return cache.addAll([
        BASEURL + '/',
        BASEURL + '/index.html',
        BASEURL + '/recipes.json',
        BASEURL + '/assets/css/style.css',
        // Add more assets or pages as needed
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
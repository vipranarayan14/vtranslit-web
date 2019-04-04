self.addEventListener('install', function(e) {

  e.waitUntil(
    caches.open('vtranslit').then(function(cache) {

      return cache.addAll([
        './',
        'index.html',
        'index.html?homescreen=1',
        './?homescreen=1',
        'styles.e2d9.css',
        'scripts.e2d9.js',
        'assets/images/copy-32.png',
        'assets/fonts/SakalBharati.ttf'
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

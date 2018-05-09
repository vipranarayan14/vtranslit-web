self.addEventListener('install', function (e) {

  e.waitUntil(

    caches.open('vtranslit').then(function (cache) {

      return cache.addAll([
        './',
        './index.html',
        './index.html?homescreen=1',
        './?homescreen=1',
        'dist/assets/icons/favicon.ico',
        '/dist/assets/icons/favicon-16x16.png',
        'dist/assets/icons/favicon-32x32.png',
        'dist/styles.css',
        'dist/scripts.js',
        'dist/assets/images/copy-32.png',
        'dist/assets/fonts/SakalBharati.ttf',
      ]);

    })

  );

});

self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (response) {

      return response || fetch(event.request);

    })

  );

});

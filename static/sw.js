const CACHE_NAME= 'limboCache';
const urlsToCache = [
    '/',
    '/notes',

]

self.addEventListener('install', (evt) => {
    evt.waitUntil(caches.open('l1')
        .then((cache) => {
            console.log('Opened Cache');
            return cache.addAll(urlsToCache)
        }))
})

self.addEventListener('activate', (evt) => {
    evt.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request).then(response => {
            return response
        })
    )
})

// importScripts(
//     "https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"
//   );
//   if (workbox) {
//     workbox.setConfig({
//       debug: false,
//     });
//     const wkb = {
//       ...workbox.core,
//       ...workbox.recipes,
//     };
//     const {
//       clientsClaim,
//       pageCache,
//       staticResourceCache,
//       googleFontsCache,
//       imageCache,
//     } = wkb;
  
//     imageCache();
//     pageCache();
//     googleFontsCache();
//     staticResourceCache({
//       cacheName: "limboCache",
//     });
//     clientsClaim();
//   } else {
//     console.error("Boo! Workbox failed to load");
//   }
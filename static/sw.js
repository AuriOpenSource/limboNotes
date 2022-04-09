const CACHE_NAME= 'limboCache';
const urlsToCache = [
    '/',
    '/notes'
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
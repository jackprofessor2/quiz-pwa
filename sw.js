let cacheName = 'myQuiz-v1';
let filesToCache = [
    './',
    'server.js',
	'package.json',
	'manifest.json',
    'index.html',
    'cadastro-professor.html',
    'cadastro-aluno.html',
    'cadastro-questao.html',
    'css/style.css',
    'js/vendors/array.observe.polyfill.js',
    'js/vendors/object.observe.polyfill.js',
    'js/layout.js',
    'images/icons/icon-128x128.png',
    'images/icons/icon-144x144.png',
    'images/icons/icon-152x152.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-256x256.png',
    'images/icons/icon-512x512.png'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );

    return;
});

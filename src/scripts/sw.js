import 'regenerator-runtime';
import CacheHelper from './utils/helper-cache';

const assetsToCache = [
  './',
  './images/icon/icon-192x192.png',
  './images/icon/icon-512x512.png',
  './index.html',
  './favicon.png',
  './images/icon/icon-152x152.png',
  './app.bundle.js',
  './images/icon/icon-384x384.png',
  './app.webmanifest',
  './images/icon/favicon.png',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

/* 노을진 시티 — 최소 서비스 워커 (캐시 없이 네트워크 그대로) */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){ event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* 네트워크 요청을 그대로 통과시킵니다 */ });

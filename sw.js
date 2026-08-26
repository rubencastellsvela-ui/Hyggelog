// Service worker mínimo: solo necesario para que Chrome considere la
// app "instalable" de verdad (icono en la pantalla de apps, sin barra
// de navegador). No cachea nada ni cambia el comportamiento de la app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});

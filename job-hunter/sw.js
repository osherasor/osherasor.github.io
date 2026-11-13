// Job Hunter: the smallest service worker that lets the browser offer "add to home screen" / "install".
// It does not cache anything: every request goes to the network as usual.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});

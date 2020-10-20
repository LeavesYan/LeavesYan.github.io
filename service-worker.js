/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b176a30cf07c7abaee9bb5b286364533"
  },
  {
    "url": "about/friends.html",
    "revision": "80066c0339b7bb9ffa9725c06e684c1d"
  },
  {
    "url": "about/index.html",
    "revision": "00dcfa1e0b51ca5c065e14d9412b1f12"
  },
  {
    "url": "assets/css/0.styles.e000d377.css",
    "revision": "a99f650adacedf7373d6ec40d08cca5f"
  },
  {
    "url": "assets/img/head.jpg",
    "revision": "31103aecda1260c0aadc9ed600503a58"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.44675d33.js",
    "revision": "8ef3335fd2ee7251556b46a3cb52dde3"
  },
  {
    "url": "assets/js/11.cfa44bb8.js",
    "revision": "ec6c7c2d993f1687bb4f054c6008251d"
  },
  {
    "url": "assets/js/12.ea3e571d.js",
    "revision": "256010194e415f58165c925ea76ba942"
  },
  {
    "url": "assets/js/13.a80c6550.js",
    "revision": "8b1e88fcd1a44c7060deebd50a8d8e77"
  },
  {
    "url": "assets/js/2.d0343db7.js",
    "revision": "8ee659956143be3b94cfea321bb19d4c"
  },
  {
    "url": "assets/js/3.9da8572f.js",
    "revision": "900c5ddb675d304b2404d81dfd5a52eb"
  },
  {
    "url": "assets/js/4.ae2dc645.js",
    "revision": "e8db80fd13560906507604563d3cd40c"
  },
  {
    "url": "assets/js/5.89a41289.js",
    "revision": "4c5501095af4fe636fbef33ed6ef61be"
  },
  {
    "url": "assets/js/6.02740b1b.js",
    "revision": "f15d08de27a0e8ca04032171fa2f8d33"
  },
  {
    "url": "assets/js/7.6e132098.js",
    "revision": "813570e04304b4e6d9c3da0494d9c8d2"
  },
  {
    "url": "assets/js/8.40599e83.js",
    "revision": "5a227307f5761f15433b93eb108c4412"
  },
  {
    "url": "assets/js/9.91f1e873.js",
    "revision": "55a791ac9f582bc7973c4f65765692d6"
  },
  {
    "url": "assets/js/app.48985284.js",
    "revision": "8fd8fdeb52d1c57617a62314502ce789"
  },
  {
    "url": "index.html",
    "revision": "77b0ca0a0adaa402ed96d8d03696c162"
  },
  {
    "url": "language/chinese.html",
    "revision": "534b0448b059889cca20d03997d23d57"
  },
  {
    "url": "language/japanese.html",
    "revision": "27055e60a5831f87b34f193d580d4da8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

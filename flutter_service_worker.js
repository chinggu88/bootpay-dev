'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9298d60066d226481d39df7aaf7e2ccd",
"version.json": "ab38402283ab6a89db9674670528e3ec",
"index.html": "f40a161a66c79080ba4a5a33a3ef1b27",
"/": "f40a161a66c79080ba4a5a33a3ef1b27",
"main.dart.js": "769f7b1a79f4b9a9e18e9d757826772c",
".well-known/apple-app-site-association": "20deb82aec3859dce838d808cfb54ebd",
".well-known/assetlinks.json": "b14c77829ae3f22161a549b4024f06e2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "eda845a12439acb4bce2ee38e7119e12",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed54f63c4b12aefb2099abd2cd40e2d2",
"bootpay_api.js": "487d7c5584a1f646dbb41bb90c7252d1",
".git/config": "6011a74ece82e2e16ba1c04625de7d27",
".git/objects/50/3cb441be0b3b39e8d5f819426bd6a78b1562ce": "c6bc70903087959b8d2bcb57306a7d77",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/56/c7bfaadb17c4bc7540be6432eb18fc11e8d660": "8624356b07c6107f2a38e5aaf2275b8d",
".git/objects/51/4307c0f07e1cadf4e5dec49979f2d9a40166c2": "35a152802d363cbf2c24f508f24f3235",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/dec654fb0a9f6397512362a94f12b0eacaaffb": "8f8cb6d38e629f4a656a66a9fbdd07c5",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/afc77cb22e4d4b471215bc66503b2438f58953": "cd65e7d2d6a45b68e18f7f5914c66144",
".git/objects/05/6fbf1515b23d17adcbdcfce99d894078162455": "21cae11d424358400848f3c92ad1668c",
".git/objects/02/dbb9fadbfc74df65c6d1268782cf90ba17d900": "56104a2557d21d9f359dc888b0544b3d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/ab/59601cb43b12a8704946f277b8d958f343ffb0": "93563a09d2f6b32fdc0e97afc73e02f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/f41fea41a246343cd3b1d9ed0d84b461cb7671": "0d18a16c0f4fcb174a1303f9b565fc0d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/3a006b07da64b1314fc23e00bc0be8c8f11eef": "d5c9bef8cc347bf4d7f99701b0bec2da",
".git/objects/20/836c6115e6029bc71ebc685d5a3f73a2637a30": "3b5f0ccf3c39c8f0aa70666fd084d2e3",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/40f5eb7314f698369099d11b56fbc255e2ad60": "60551ec73846f485f3e616106a55c198",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/8df8c9bd0ba0e06e4e77ae0b080f07730f0fc0": "0b501a62a8b3d5322ea6ef006665e194",
".git/objects/7c/1600f33c844a8249dfef4bcecb0a8f2b7ad5d5": "7966bc9eae1f5eb49ac540a1d8c108ee",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/8aa28a9609961cf2249e145f4e88016db5dd86": "224ebe5af9c0a718d991d95e67456742",
".git/objects/28/412b099bffbd6827a8b28cbf35308c9e458a3c": "10af263d35c1a9685f7b3a48368bff55",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/4247ff1ecee2b88752c76208529b2fc5fb9536": "cb2a750b74a93d1e406a8b5d6c3d07b9",
".git/objects/2a/5e1c80e145345e151fecc024e6e18d61bf5884": "cad4de574e8baf381efd47435a41b8ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/886d7f9ad5b8669601c6a256c42594f079543a": "696573b73594aa853f4e5a58a4dc7f56",
".git/objects/6e/72b03fa28d941af5d2d23c1d4f06657a078c58": "331917be71a5f823047c2b66ac5f8015",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/99/83092d0aefb6fdd9b58a1968695a6e5b32b108": "ca3992f41482400ee494546eccbd532b",
".git/objects/63/c7c006012645a2fcc700b9c6a6ac09e1113fe1": "3d4462d411b25e2be5d2f56274882c09",
".git/objects/64/459554ccbdf2d1e8518dfaf10fd8fe3a8c3317": "d17f462d49949a8690e5126ba43473ed",
".git/objects/64/f3e6298e767f615290dc53234fe4bb217acc86": "1e055626b35ba2c9bb3bba0fc8b304df",
".git/objects/64/79e76e36845a2ef2fb93232bb11bec3669f7bd": "66522ff4795e69874ec98274d3910a86",
".git/objects/90/47d77b11f9fb039eec4e3e0172260274cace33": "a8770de3372a69a77db1b7e9d137ed49",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/af/56a9e1d7fade29d538dee35e3bf156cfc4c1ec": "e8b0148e2620b39d26d354af329264ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/25d7efe6180c945b51b7cf3d5ec7373f79c427": "e65e2bd968db15e0eb212a5b5f0c7b41",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/6a88e59453ebc832e70766a0bbbf46ce9e5173": "9da69974cb1b6b5eca1d8d762684599a",
".git/objects/cb/75e958b3b4436c828af6f2cd212270612f287b": "930d7b21567a23acfed9a6b9c54330b5",
".git/objects/cb/01004aac4f0cf65e3d9ef2fcd77c1cfc3c82b1": "a1bcc4c3ca1fa9a37049e27561e36993",
".git/objects/ce/3b9448957762490904e0ef0d93864036d9cb9c": "b9fa605d6276453c625fdd704acdd923",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/fe5080a91c921f98f533c18cd0233813acf9bb": "2951bbd6b48820820a079344ac02429f",
".git/objects/24/e7bd14dc4a5e8ec8ab08a6c5defa585612cf44": "591248826e749ed65c1bed05fa9b407a",
".git/objects/8d/3d88b15126cc429975e9f7d06b361297445bed": "dccee5a0fb0d26b84f59ff1d76383264",
".git/objects/15/432af0062a2dd61faf7aac8ce20d97a3720d22": "ebef9316dae44090f00122128f1b35dc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/24941ead1ef34235b930a6d28aa6f5057006c7": "952a91b74b29556b63fc442bb46181ae",
".git/objects/2b/eb4680bc2d385fe3d35bcf9c49295655912e76": "6a10db048781f0cfa7c34efe2edfaf22",
".git/objects/8e/56cc70c73fe7e8619f1fa827c054b0e00ada4d": "7649730ce074decb2a3c63c73f86b62a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79d5d8d2bea4a19353277fb6a1f8c87b",
".git/logs/refs/heads/main": "554b2736ed8c27cec67680e5bb6fe6a9",
".git/logs/refs/remotes/origin/main": "36adcbce35e3f79b0c63112ebde0c800",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2f34543bf71e2baf077bf8170fe54ec4",
".git/refs/remotes/origin/main": "2f34543bf71e2baf077bf8170fe54ec4",
".git/index": "02e0ec4cae448580603ed7240bef2cf4",
".git/COMMIT_EDITMSG": "5f05a6f4f4df41db26c9415ef088536f",
".git/FETCH_HEAD": "b411941e73213ec669b42c802d92de0a",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "cd385744fd92c7fb3b3f95e2636ffe53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c4f8840eb0b8bc4a7439a8f7fff5c17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6e9f863d0492f0f28bab13c40e44f427",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

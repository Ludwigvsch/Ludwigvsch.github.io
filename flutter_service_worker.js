'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a5012d7a0bd8c861ed8eebf66b8b1ee9",
"/": "a5012d7a0bd8c861ed8eebf66b8b1ee9",
"main.dart.js": "e1f7d84d1fd4b1ee80a7a9ec4fc36c52",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78689a8f97a6d35b2d4a291131351508",
".git/config": "bbdf306cfb03fd5b5dbc912dc4d82a7d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/93/966c11a1d597fb3dd1809170e9ce995a669808": "546f93670b7c6c9973834c6d98aca4e7",
".git/objects/0e/16a8e5fafbf914b1fa50bb1ecac6bb77ecd810": "9c31234060505b7cfea049753e3874d7",
".git/objects/60/c2100d0ff581e6c30dcbe81478f8d8cf055fc8": "1f5af5734519e583a7fe8b4e4370ebe0",
".git/objects/60/b498ec97e711344989304eba463546c8483ecd": "df93cb2b475f51d43d0d02d7ccbb9bf6",
".git/objects/5a/e37c46734cabb1ccde3816cd5a67641d7700c2": "7ec398dfb717e7d9e4b8620fae6034b2",
".git/objects/5f/d34bfb8b17e95ef6f27ad9b360add0089c3133": "290ba7992313a6001a927bbfc727cc90",
".git/objects/33/be5e7b09e918ca13080e4e9dc97b113c4bed8a": "eb0d3dc06a9d54ecf5a516d46b45c3d0",
".git/objects/bd/134133d49fb297c366ac6f369290897fce27e1": "19ee37ff41914fe5b3f201cdd4849e96",
".git/objects/ab/fd3bf23c04d841ff944188b4f390f7cea11d10": "bb58aecac1231f86fa56c0ced44ed99e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/e3/7e4a55088d1ef876b1780ac05548f5b72f5c04": "d2457c982020ed5a3a2a8ba85121adb0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/b2549f0674b0431d99ef64d6453465554f20ff": "f5480dae037e636b2fa47db53d0dd8b9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/d0cbe1d2a242f3182c9c7a10acc92222439cd7": "6f4160ba043ed6bfcdb0463a2fca4b5a",
".git/objects/17/a3299fd610b023f4172eba3bb6aaaa308adbac": "371dc9900549583f13c9f88f9f051a34",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/daf3cdfeced03e7c2277bd806fbf6277bc3b51": "75af38c31d8b379213b32e37aa99d12c",
".git/objects/81/f3a0f000810e4511c80d39425d25fe293799ae": "f5a2e2ea7917159a29589d20b1704cc9",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/97f24f398e6b492aa4e1c89487b0475e7214f0": "b78b096ea307691baa6d4661e91f52a9",
".git/objects/2a/7a184b4ff78fb6b9bc4e28a4101e88abe2ef08": "d33dc6ad6bd42d4ac21efbe611739d97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/7ff9f3c3545d203e4dbe3c0b4acbefb334e4d9": "ceaa3d41520d0e3ad7319daab7586da9",
".git/objects/36/10d72138d06324823080cd069126dc035b7ccd": "9d7f826a668ba7eee974d5046c604254",
".git/objects/36/01d96b8a48d12e7bc2d92393f31ff9a67acc78": "dbbb8bdad25a3219e7e443fd0c23fac3",
".git/objects/54/301acb59a0f23b114442388e88f49a829aa127": "1bd2b6e6ae74d8fbddfb593528f23535",
".git/objects/08/1af6c521815bb7c54725b862b9b0c299308b8a": "de0fd7aa33532a21c8d933350e4eee39",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/28ad311f10a42dc2f67dc097539087709bb259": "df1a3316a234c7b97a8a53d0ca10f7e5",
".git/objects/d4/d7a6a8a6972a1b60d9c9a33539e83b2895d20c": "f5dc781df7ecf2a0a9acfce1becfbdaa",
".git/objects/aa/0fe046c775eccf2eeee5c75ecee4c9bba77bf1": "4bf03949e6d8dc0b2484b4a2ac82b2f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d8ba6340673162b0a120920c6d66bcb68837f4": "2ed04780b515953a7a63f1edc297b316",
".git/objects/fa/5d5917e525d37687cb726d7f9a0ef7b7d35af0": "b402e07a4088da9b39f77d0d753bc0fa",
".git/objects/f6/29e8995e67b758dbfb304092f94b0810a06cf7": "a94c9fdb0ef08d5cc752dc27ffba1d28",
".git/objects/2c/8e89e0f17a40924150a61bc193529c3f9aec96": "cbb447ed985bc302fb7e2974c57f4dc6",
".git/objects/41/dc54693d1b54d627145cf1d04529387c86c9f8": "9470b10664b6429e0b97d1ae2d01d010",
".git/objects/1e/506f56741fece22f3355d4d04b3763c28d9bc5": "f986627e312a54bb4e8fa2b6f281bb94",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/9f3a3b4618e46680e63d4126eb3540fafcb4a9": "4959d9d9ec369a4a95ab60d88e247b25",
".git/objects/49/72874408268790399b923e7085d88909147c2c": "17ca5979755c57a92d39086a5e91e241",
".git/objects/40/2d4350ffc8d578dc641f38885b64516af4147a": "da2b645460513236db14c01d48d17be6",
".git/objects/47/6c098cb44ee05ebed393d1f036a519fe045bd1": "3256ea25e98915b7c602aeb2d72a7888",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d1c098efa7167aab5f9dca93ac38c38",
".git/logs/refs/heads/master": "0d1c098efa7167aab5f9dca93ac38c38",
".git/logs/refs/remotes/origin/master": "6e07de6cc186a9bb3d2454b22229ae0b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "49c7a7e9c760a159a6627a503d14f082",
".git/refs/remotes/origin/master": "49c7a7e9c760a159a6627a503d14f082",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "919210e71f3294bc01e483805867f644",
"assets/LICENSE": "07951b3d4cac8eef58a5690e147442d9",
"assets/images/GitHub.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/images/Unknown.png": "1679e29d49b5795cc04d21cf2143543f",
"assets/images/shoppinglist_main.jpg": "25d8cf15f82ac5fa9ef1aae1d95771eb",
"assets/images/twitter.png": "a569d8c69fd4409491ab09d595912a6c",
"assets/images/linkedin.jpeg": "2342bf10b089dce419b74883978d0b6f",
"assets/images/youtube-logo.jpeg": "d3e103a53aa688dc5e4d34fe475ba8d1",
"assets/AssetManifest.json": "0515085921e27389f9720699e00a9ce8",
"assets/FontManifest.json": "32fc703c4c14a104dab6db1b164a07ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Manrope/Manrope-VariableFont_wght.ttf": "980b9f32a3f482b7db688fa8df0488cd",
"assets/fonts/Manrope/BodoniXT.ttf": "ed9d90991a45b334269ca082c1228f22"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
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
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});


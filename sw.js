// Keeps the book on the phone so the installed app opens without a connection.
// The page, data and fonts are stored as one set and replaced together when the book changes (VERSION).
// Pictures are stored one by one under their content hash, so an updated picture is fetched again
// and an unchanged one never is. In the installed app the page asks for all of them once ('warm').
// Every file is checked against the hash it should have before it is kept, so a copy that is still
// stale somewhere on the way (a cache, the CDN right after a change) is never stored as the new one.
const VERSION = 'a37ac655b315';
const CORE = {
"index.html": "57bac551f6",
"data.js": "ec85c75705",
"credits.js": "599cab4b02",
"manifest.webmanifest": "c4e202738e",
"icons/favicon-32.png": "f1b949d692",
"icons/icon-192.png": "0dd8b9f44d",
"icons/maskable-192.png": "3637b31c02",
"fonts/fonts.css": "b319fceefa",
"fonts/lalezar-arabic-400-normal.woff2": "661cc9e7a8",
"fonts/lalezar-latin-400-normal.woff2": "226ae39f52",
"fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2": "6010e7fd0d",
"fonts/ibm-plex-sans-arabic-latin-400-normal.woff2": "9ed8dcb02e",
"fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2": "90aef64fea",
"fonts/ibm-plex-sans-arabic-latin-500-normal.woff2": "be6a3b2e37",
"fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2": "16734a5adb",
"fonts/ibm-plex-sans-arabic-latin-600-normal.woff2": "63f4757271",
"fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2": "04c730b429",
"fonts/ibm-plex-sans-arabic-latin-700-normal.woff2": "ae2d59f91e",
"fonts/anton-latin-400-normal.woff2": "d0fa07ff63"
};
const IMGS = {
"img/arayes-beef-pita.webp": "3d6e0d1378",
"img/beef-aubergine-bake.webp": "30230caedd",
"img/beef-bean-chili.webp": "249767d4a9",
"img/beef-broccoli-rice.webp": "fd233d8346",
"img/beef-kofta-bulgur-box.webp": "1006294f83",
"img/beef-lasagna.webp": "7d5eb19ae0",
"img/beef-lentil-bolognese.webp": "a5a3c8cd1b",
"img/beef-rice-stuffed-peppers.webp": "098030fe87",
"img/blackened-salmon-bowl.webp": "8220364004",
"img/buffalo-chicken-sweet-potato.webp": "113fe528e8",
"img/burger-bowl.webp": "3b1833353a",
"img/butter-chicken.webp": "68735fc052",
"img/chermoula-tuna-couscous.webp": "575d3e0092",
"img/chicken-biryani.webp": "7810340cd3",
"img/chicken-cabbage-skillet.webp": "53340c1fed",
"img/chicken-fajita-bowl.webp": "13799477f6",
"img/chicken-fried-rice.webp": "fcafb702f8",
"img/chicken-kabsa.webp": "54745a7bfb",
"img/chicken-meatballs-tomato-orzo.webp": "84ac3c646f",
"img/chicken-salad-wraps.webp": "dd58498e48",
"img/chicken-souvlaki-box.webp": "8cb080d288",
"img/chicken-tikka-raita.webp": "70737915f9",
"img/harissa-chicken-traybake.webp": "24e4be35bb",
"img/harissa-salmon-couscous.webp": "cee4195026",
"img/honey-garlic-salmon-rice.webp": "7edf7cb9ed",
"img/kibbeh-air-fried.webp": "99c823093d",
"img/kofta-potato-tomato-bake.webp": "e4d546b99f",
"img/lemon-chicken-soup.webp": "bee8073f5d",
"img/lemon-cod-white-beans.webp": "f5d800663d",
"img/lemon-dill-salmon-potatoes.webp": "f0d38882c4",
"img/lemon-herb-chicken-quinoa.webp": "fd066bb525",
"img/lemony-tuna-pasta-salad.webp": "09343bec30",
"img/lentil-roasted-vegetable-salad.webp": "9a12ce1855",
"img/mediterranean-salmon-traybake.webp": "94bbfe6e2a",
"img/mezze-protein-box.webp": "65b74b923f",
"img/peri-peri-chicken-rice.webp": "4f60f25733",
"img/pulled-chicken-burrito-bowl.webp": "709dfc3800",
"img/red-lentil-spinach-dal.webp": "520d015aac",
"img/salmon-cakes-dill-yogurt.webp": "f7df5e6a89",
"img/salmon-lemon-pea-pasta.webp": "ba4de8f405",
"img/salmon-rice-bowl.webp": "35429849cc",
"img/sauce-amba.webp": "feca6f9a7f",
"img/sauce-bbq.webp": "767544dcca",
"img/sauce-buffalo.webp": "ef5f184a6d",
"img/sauce-burger-sauce.webp": "c559849cb7",
"img/sauce-caesar.webp": "227be487d2",
"img/sauce-cheese-sauce.webp": "259878113d",
"img/sauce-chimichurri.webp": "d963140d83",
"img/sauce-chipotle.webp": "2621adb3d0",
"img/sauce-green-shatta.webp": "e7de99830d",
"img/sauce-honey-mustard.webp": "2b5b012cae",
"img/sauce-italian.webp": "54975a26f6",
"img/sauce-ketchup.webp": "48a02d8934",
"img/sauce-light-mayo.webp": "e0ed72849d",
"img/sauce-peri-peri.webp": "f1e51a51a9",
"img/sauce-pesto.webp": "dbf6a8280c",
"img/sauce-ranch.webp": "bc39ecbff2",
"img/sauce-red-shatta.webp": "da8b7d233d",
"img/sauce-satay.webp": "7bf9f72ef7",
"img/sauce-spicy-mayo.webp": "27d46f65c2",
"img/sauce-sweet-chili.webp": "581d5241b1",
"img/sauce-sweet-sour.webp": "b20f61610c",
"img/sauce-tahini.webp": "615b2ed395",
"img/sauce-tartar.webp": "13e8e31c69",
"img/sauce-teriyaki.webp": "78aad1ea72",
"img/sauce-toum.webp": "e4bc3588c9",
"img/sesame-ginger-chicken-noodles.webp": "c1a67a2460",
"img/sesame-tuna-soba-salad.webp": "afb40ad810",
"img/shakshuka.webp": "a2ab50e26b",
"img/shawarma-chicken-bowl.webp": "6a41ffe174",
"img/shish-tawook.webp": "5ab19996fb",
"img/soy-ginger-glazed-chicken.webp": "ade5221722",
"img/soy-sesame-beef-bowl.webp": "bb726f5b96",
"img/spiced-fish-taco-bowl.webp": "83c3b09cf0",
"img/spicy-tomato-fish-couscous.webp": "f7acfe7159",
"img/spicy-tuna-rice-bowl.webp": "ea90185a89",
"img/steak-sweet-potato-chimichurri.webp": "c1ad9a8cbf",
"img/tomato-coconut-chicken-curry.webp": "b2fd7118bb",
"img/tuna-nicoise-box.webp": "13998fc13a",
"img/tuna-stuffed-sweet-potato.webp": "9a3c9ee178",
"img/tuna-sweet-potato-cakes.webp": "f4018d3d87",
"img/tuna-white-bean-salad.webp": "0326d065c5",
"img/turkey-taco-lettuce-cups.webp": "5d289e8ba3",
"img/vegetable-frittata-squares.webp": "9f2b01d1ae",
"img/zaatar-chicken-cauliflower.webp": "a171c456ad"
};
const CORE_CACHE = 'prepbook-core-' + VERSION;
const IMG_CACHE = 'prepbook-img';
const SCOPE = self.registration.scope;

function rel(url) { const u = new URL(url); return (u.origin + u.pathname).slice(SCOPE.length); }
function imgKey(path) { return new URL(path + '?h=' + IMGS[path], SCOPE).href; }
async function hashOf(res) {
  const d = new Uint8Array(await crypto.subtle.digest('SHA-256', await res.clone().arrayBuffer()));
  return Array.from(d, x => x.toString(16).padStart(2, '0')).join('').slice(0, 10);
}

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE_CACHE);
    try {
      await Promise.all(Object.keys(CORE).map(async p => {
        const res = await fetch(p, { cache: 'reload' });
        if (!res.ok || await hashOf(res) !== CORE[p]) throw new Error('not the new copy yet: ' + p);
        await c.put(p, res);
      }));
    } catch (err) {
      await caches.delete(CORE_CACHE);   // keep the old version; the phone tries again next time
      throw err;
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('prepbook-core-') && k !== CORE_CACHE) await caches.delete(k);
    const ic = await caches.open(IMG_CACHE);
    for (const r of await ic.keys()) if (!IMGS[rel(r.url)]) await ic.delete(r);   // pictures no longer in the book
    await self.clients.claim();
  })());
});

async function fromCore(path, req) {
  const hit = await (await caches.open(CORE_CACHE)).match(path);
  if (hit) return hit;
  try { return await fetch(req); } catch (err) { return Response.error(); }
}

async function picture(path) {
  const c = await caches.open(IMG_CACHE);
  const key = imgKey(path);
  const hit = await c.match(key);
  if (hit) return hit;
  try {
    const res = await fetch(path, { cache: 'reload' });
    if (res.ok && await hashOf(res) === IMGS[path]) {
      await c.put(key, res.clone());
      for (const old of await c.keys(path, { ignoreSearch: true })) if (old.url !== key) await c.delete(old);
    }
    return res;
  } catch (err) {
    return (await c.match(path, { ignoreSearch: true })) || Response.error();   // offline: an older copy beats a blank
  }
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(SCOPE)) return;
  const path = rel(req.url);
  if (IMGS[path]) { e.respondWith(picture(path)); return; }
  if (CORE[path] && path !== 'index.html') { e.respondWith(fromCore(path, req)); return; }
  // opening the book itself (any address in it that is not a file) gets the stored page
  if (req.mode === 'navigate' && (path === 'index.html' || !/\.[a-z0-9]+$/i.test(path))) e.respondWith(fromCore('index.html', req));
});

let warming = null;
function warm() {
  if (!warming) warming = (async () => {
    const c = await caches.open(IMG_CACHE), todo = [];
    for (const p of Object.keys(IMGS)) if (!(await c.match(imgKey(p)))) todo.push(p);
    let i = 0;
    const worker = async () => { while (i < todo.length) { const p = todo[i++]; try { await picture(p); } catch (err) {} } };
    await Promise.all([worker(), worker(), worker()]);
  })().finally(() => { warming = null; });
  return warming;
}

self.addEventListener('message', e => { if (e.data === 'warm') e.waitUntil(warm()); });

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const errors = [];
const required = [
  "index.html", "en/index.html", "ar/index.html", "work/index.html", "ar/work/index.html",
  "ways-to-work/index.html", "ar/ways-to-work/index.html", "workshops/index.html",
  "ar/workshops/index.html", "lab/index.html", "ar/lab/index.html", "contact/index.html",
  "ar/contact/index.html", "favicon.svg", "work/museum-of-echoes/index.html",
  "ar/work/museum-of-echoes/index.html", "archive/index.html", "ar/archive/index.html",
  "notebooklm/index.html", "ar/notebooklm/index.html", "privacy/index.html",
  "ar/privacy/index.html"
];
for (const route of required) if (!existsSync(join(dist, route))) errors.push(`Missing required output: ${route}`);

const htmlFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) htmlFiles.push(path);
  }
};
walk(dist);

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const rel = file.slice(dist.length + 1).replaceAll("\\", "/");
  if (!html.includes('rel="canonical"')) errors.push(`${rel}: missing canonical`);
  if (!html.includes('hreflang="en"') || !html.includes('hreflang="ar"')) errors.push(`${rel}: incomplete hreflang`);
  if (/C:\\Users\\|Tamer_Work|\.codex/i.test(html)) errors.push(`${rel}: local path leaked`);
  if (/<img(?![^>]*\balt=)[^>]*>/i.test(html)) errors.push(`${rel}: image without alt`);
  if (/<img(?![^>]*\bwidth=)[^>]*>/i.test(html)) errors.push(`${rel}: image without width`);
  if (/<img(?![^>]*\bheight=)[^>]*>/i.test(html)) errors.push(`${rel}: image without height`);
  const mainCount = (html.match(/<main\b/gi) || []).length;
  if (mainCount !== 1) errors.push(`${rel}: expected exactly one main landmark, found ${mainCount}`);
  for (const match of html.matchAll(/href="(\/Tamer-Portfolio\/[^"?#]*)/g)) {
    const url = match[1].replace("/Tamer-Portfolio/", "");
    const target = url === "" ? join(dist, "index.html") : url.endsWith("/") ? join(dist, url, "index.html") : join(dist, url);
    if (!existsSync(target)) errors.push(`${rel}: broken internal link ${match[1]}`);
  }
}

const home = readFileSync(join(dist, "index.html"), "utf8");
const homeAr = readFileSync(join(dist, "ar/index.html"), "utf8");
for (const [name, html] of [["English homepage", home], ["Arabic homepage", homeAr]]) {
  if (!html.includes("G-ZJ9VJPRX0M")) errors.push(`${name}: missing GA4 measurement ID`);
  if (!html.includes("data-analytics-consent")) errors.push(`${name}: missing analytics consent control`);
  if (/<script[^>]+src=["']https:\/\/www\.googletagmanager\.com/i.test(html)) errors.push(`${name}: Google tag must not load before consent`);
}
if (home.includes("autoplay")) errors.push("Homepage must not autoplay video");
if (!home.includes('preload="none"')) errors.push("Identity film must be intent-loaded");
const localAssetRefs = [...home.matchAll(/(?:src|href)="\/Tamer-Portfolio\/([^"?#]+\.(?:css|js|webp|png|jpg|svg|woff2?))/g)].map((m) => m[1]);
const uniqueAssets = [...new Set(localAssetRefs)];
const initialBytes = uniqueAssets.reduce((sum, asset) => {
  const path = join(dist, asset);
  return sum + (existsSync(path) ? statSync(path).size : 0);
}, statSync(join(dist, "index.html")).size);
if (initialBytes > 2 * 1024 * 1024) errors.push(`Homepage initial local payload exceeds 2 MB: ${initialBytes}`);

// Media regressions: legacy redirects must not erase actual published work.
for (const prefix of ["", "ar/"]) {
  for (const slug of ['the-messages-that-waited', 'ai-progress-film', 'a-moment-lost']) {
    const html=readFileSync(join(dist,prefix,`work/${slug}/index.html`),'utf8');
    if (!html.includes(`media/films/${slug}.mp4`) || !html.includes('id="watch-the-work"')) errors.push(`${prefix}${slug}: missing watchable film`);
    if (!existsSync(join(dist,`media/films/${slug}.mp4`))) errors.push(`Missing film asset ${slug}`);
    if (!html.includes('preload="none"')) errors.push(`${prefix}${slug}: eager video download`);
  }
  const tabaqat=readFileSync(join(dist,prefix,'work/tabaqat/index.html'),'utf8');
  if (!tabaqat.includes('https://tabaqat.teamo-palestine.workers.dev/') || !tabaqat.includes('tabaqat-tour.mp4')) errors.push(`${prefix}TABAQAT: live experience missing`);
  const literary = readFileSync(join(dist, prefix, "work/literary-reimaginings/index.html"), "utf8");
  for (const id of ["66JuIoZ6wGY", "0AmrDjtbvXE", "uChtaUHMguY", "qkhfHVbYxpY"]) {
    if (!literary.includes(`data-video-id="${id}"`)) errors.push(`${prefix}literary: missing player ${id}`);
    if (!existsSync(join(dist, "media/video-posters", id + ".jpg"))) errors.push(`Missing actual poster ${id}`);
  }
  if (/<iframe[^>]+\bsrc=/i.test(literary)) errors.push(`${prefix}literary: player must load on intent`);
  const archive = readFileSync(join(dist, prefix, "archive/index.html"), "utf8");
  for (const id of ["TcSlQomJ3F0", "VzHMr0Gw0Pg", "N7T1ouDs9bs", "E6Rt-agXCYM"]) {
    if (!archive.includes(`data-video-id="${id}"`)) errors.push(`${prefix}archive: missing music player ${id}`);
  }
  for (const route of ["archive/index.html", "work/knowledge-products/index.html"]) {
    const html = readFileSync(join(dist, prefix, route), "utf8");
    if (!html.includes("tpt-pushes-pulls-preview.mp4")) errors.push(`${prefix}${route}: missing educational video`);
    if (!html.includes("digital-prometheus/spread.jpg")) errors.push(`${prefix}${route}: missing internal deck preview`);
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML files. Homepage initial local payload: ${(initialBytes / 1024).toFixed(1)} KB.`);

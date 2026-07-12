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
  "notebooklm/index.html", "ar/notebooklm/index.html"
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
if (home.includes("autoplay")) errors.push("Homepage must not autoplay video");
if (!home.includes('preload="none"')) errors.push("Identity film must be intent-loaded");
const localAssetRefs = [...home.matchAll(/(?:src|href)="\/Tamer-Portfolio\/([^"?#]+\.(?:css|js|webp|png|jpg|svg|woff2?))/g)].map((m) => m[1]);
const uniqueAssets = [...new Set(localAssetRefs)];
const initialBytes = uniqueAssets.reduce((sum, asset) => {
  const path = join(dist, asset);
  return sum + (existsSync(path) ? statSync(path).size : 0);
}, statSync(join(dist, "index.html")).size);
if (initialBytes > 2 * 1024 * 1024) errors.push(`Homepage initial local payload exceeds 2 MB: ${initialBytes}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML files. Homepage initial local payload: ${(initialBytes / 1024).toFixed(1)} KB.`);

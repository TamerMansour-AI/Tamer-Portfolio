import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tamermansour-ai.github.io",
  base: "/Tamer-Portfolio/",
  outDir: "dist",
  integrations: [tailwind(), sitemap()]
});

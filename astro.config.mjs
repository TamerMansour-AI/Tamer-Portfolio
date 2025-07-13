import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.github.io/tamer-portfolio',
  base: '/',
  integrations: [tailwind(), sitemap()],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
});

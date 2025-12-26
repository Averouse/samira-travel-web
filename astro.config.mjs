// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: '[https://samiratravel-pangkalanbanteng.vercel.app](https://samiratravel-pangkalanbanteng.vercel.app)', // Ganti dengan URL asli nanti
  integrations: [tailwind()],
});
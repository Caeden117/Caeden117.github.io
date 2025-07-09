// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://Caeden117.github.io',

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [icon()]
});
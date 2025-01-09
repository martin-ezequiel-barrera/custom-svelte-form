import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static'; // Import adapter

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use adapter-static for static site generation
    adapter: adapter(),

    // You can adjust other options like base paths if necessary
    paths: {
      base: '', // Adjust if your app is in a subdirectory
    },
  },

  preprocess: vitePreprocess(),
};

export default config;

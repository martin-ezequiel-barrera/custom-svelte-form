// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // Use adapter-static for static hosting on platforms like Render
    adapter: adapter(),

    // This is important for static sites if you're deploying to a subdirectory
    paths: {
      base: '', // Leave empty for root-level deployment
    },

    // Optional settings to improve performance and reduce size
    build: {
      minify: true,
    },
  },
};

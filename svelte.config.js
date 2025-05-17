import adapter from '@sveltejs/adapter-static';
import { base_preview, base_prod } from "./src/app.config.js";

const base = process.env.APP_ENV === 'preview' ? base_preview : base_prod;
const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html'
    }),
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn'
    },
    paths: {
      base: production ? base : '',
      relative: false
    }
  }
};

export default config;

import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      // explicitly target Node 18 runtime to satisfy Vercel adapter
      runtime: 'nodejs18.x'
    }),
    // no custom base path needed on Vercel
    paths: {
      base: '',
      relative: false
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn'
    }
  }
};

export default config;

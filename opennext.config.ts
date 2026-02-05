export default {
  buildDir: '.vercel/output',
  middleware: [],
  functions: {
    api: {
      runtime: 'cloudflare-pages',
      maxDuration: 30,
    },
    default: {
      runtime: 'cloudflare-pages',
      maxDuration: 30,
    },
  },
  imageOptimization: {
    loader: 'cloudflare',
  },
};

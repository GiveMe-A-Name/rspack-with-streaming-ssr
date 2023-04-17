import appTools, { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  server: {
    ssr: { mode: 'stream' },
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
});

import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// Exercise the same Vite/MDX pipeline used by the application.
export default mergeConfig(
  viteConfig({ command: 'serve', mode: 'test' }),
  defineConfig({
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts'],
      restoreMocks: true,
      unstubEnvs: true,
    },
  }),
);

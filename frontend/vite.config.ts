import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const plugins: Plugin[] = [react()];
  try {
    const mod = await import('@emergentbase/visual-edits/vite');
    plugins.push(mod.default({ tailwindCdn: false }));
  } catch {
    // visual-edits unavailable — preview overlay disabled
  }
  const hmrPort = Number(env.WDS_SOCKET_PORT || 0);
  return {
    plugins,
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    server: {
      host: true,
      port: Number(env.PORT || 3000),
      strictPort: true,
      allowedHosts: true,
      hmr: hmrPort ? { protocol: 'wss', clientPort: hmrPort } : undefined,
    },
  };
});

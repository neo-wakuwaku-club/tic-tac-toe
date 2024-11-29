import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const config = defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../dist/',
  },
  plugins: [react()],
  publicDir: '../public/',
  root: './src/',
});

export default config;

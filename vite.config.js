import { defineConfig } from 'vite';

export default defineConfig({
 build: {
   target: 'es2022',
   outDir: 'dist',
   assetsDir: 'assets',
 },
 server: {
   port: 4200,
 },
});
import { defineConfig } from 'vite';

export default defineConfig({
  root: './dist', // Cambia a 'dist' si quieres que Vite use esta carpeta como raíz
  build: {
    outDir: './dist',
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Импорт плагина

export default defineConfig({
  base: './', // Важно для GitHub Pages
  plugins: [react(), tsconfigPaths()], // Используем плагин
  build: {
    outDir: './docs', // Меняем dist на docs
  },
});
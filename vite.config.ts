import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/docs/', // Укажите имя вашего репозитория
  plugins: [react()],
});
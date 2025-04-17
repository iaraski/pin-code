import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pincode/', // Укажите имя вашего репозитория
  plugins: [react()],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portofolio-Website-Rework-React/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
});
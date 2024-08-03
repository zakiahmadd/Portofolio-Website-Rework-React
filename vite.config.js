import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portofolio-Website-Rework-React/',
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    host: '0.0.0.0', // This allows access from any network interface
    port: 5173,      // You can change the port if needed
    strictPort: true, // Ensures the port is strictly used
  },
});
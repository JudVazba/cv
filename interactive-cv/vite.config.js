// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSingleFile() // Asegura la compilación en un solo archivo
  ],
  build: {
    // Esto asegura que el CSS y el JS se inyecten directamente en el HTML
    assetsInlineLimit: 100000000, 
    
    // Opciones para asegurar que el HTML se genera correctamente
    rollupOptions: {
      output: {
        // Asegura que no haya archivos externos JS o CSS si es posible
        inlineDynamicImports: true,
      },
    },
  },
});
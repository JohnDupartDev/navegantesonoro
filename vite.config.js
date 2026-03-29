import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

let faviconURL = '/image/QuiraLogo.svg';

export default defineConfig({
  server: {
    port: 5012,
  },
  // --- SECCIÓN DE BUILD ALINEADA PARA VERCEL Y MINDAR ---
  build: {
    target: 'esnext', // Genera código compatible con navegadores modernos
    chunkSizeWarningLimit: 2000, // Aumentamos el límite para manejar Three.js y MindAR
    rollupOptions: {
      output: {
        // Eliminamos manualChunks personalizado para evitar errores de "undefined (reading IMAGE)"
        // Esto asegura que el orden de carga de los scripts sea el correcto en producción.
        manualChunks: undefined,
      },
    },
  },
  // -------------------------------------------------------
  plugins: [
    react(),
    VitePWA({
      includeAssets: [faviconURL], // Solo assets críticos iniciales
      manifest: {
        name: 'Navegante Sonoro',
        short_name: 'Navegante Sonoro',
        description: 'Vive una experiencia única donde los sonidos cuentan historias.',
        lang: 'es',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/image/QuiraLogo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: '/image/QuiraLogo.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
      workbox: {
        // No agregamos mp3 o mp4 aquí para evitar colapsar la memoria del dispositivo
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'], 
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            // Cache para imágenes (JPG, PNG, SVG)
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
          {
            // Cache para Audios (MP3) - Estrategia StaleWhileRevalidate
            urlPattern: /\.(?:mp3|wav|ogg)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'audio-cache',
              expiration: {
                maxEntries: 10, 
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 días
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 365 * 24 * 60 * 60, // 1 año
              },
            },
          },
        ],
      },
    }),
  ],
});
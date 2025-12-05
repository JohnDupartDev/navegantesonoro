import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

let faviconURL = '/image/QuiraLogo.svg';

export default defineConfig({
  server: {
    port: 5012,
  },
  // --- NUEVA SECCIÓN DE OPTIMIZACIÓN (BUILD) ---
  build: {
    target: 'esnext', // Genera código más ligero para navegadores modernos
    chunkSizeWarningLimit: 1600, // Aumentamos el límite de advertencia (opcional)
    rollupOptions: {
      output: {
        // Esta función divide las librerías pesadas en archivos separados
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa React y el Router en su propio archivo "cacheable"
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // Si usas librerías de animación o 3D instaladas por npm, agrégalas aquí:
            if (id.includes('three') || id.includes('framer-motion')) {
              return 'anim-vendor';
            }
            // El resto de node_modules va a un archivo genérico
            return 'vendor';
          }
        },
      },
    },
  },
  // ---------------------------------------------
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
        // OJO: No agregues mp3 o mp4 aquí, o la app colapsará al intentar descargar todo.
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
            // Carga rápido si ya se escuchó, pero no bloquea la red
            urlPattern: /\.(?:mp3|wav|ogg)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'audio-cache',
              expiration: {
                maxEntries: 10, // Solo guardamos los últimos 10 audios para no llenar la memoria del celular
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
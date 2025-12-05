import sitemap from 'sitemap';
import fs from 'fs';

const { SitemapStream, streamToPromise } = sitemap;

const sitemapStream = new SitemapStream({ hostname: 'https://navegantesonoro.zipaquiradigital.com/'}); // Cambia esto por tu URL

// Añade las URLs que deseas incluir
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/comofunciona', changefreq: 'monthly', priority: 0.7 },
  { url: '/next', changefreq: 'monthly', priority: 0.7 },
  { url: '/estaciondeltren', changefreq: 'monthly', priority: 0.7 },
  { url: '/slider', changefreq: 'monthly', priority: 0.7 },
  { url: '/aliados', changefreq: 'monthly', priority: 0.7 },
  { url: '/capitulo1', changefreq: 'monthly', priority: 0.7 },
  { url: '/casanavas', changefreq: 'monthly', priority: 0.7 },
  { url: '/historia', changefreq: 'monthly', priority: 0.7 },
  { url: '/mapa', changefreq: 'monthly', priority: 0.7 },
  { url: '/micuenta', changefreq: 'monthly', priority: 0.7 },
];

// Agrega cada URL al stream
urls.forEach(url => sitemapStream.write(url));
sitemapStream.end();

// Genera el sitemap y guárdalo en un archivo
streamToPromise(sitemapStream).then(data => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}).catch(err => {
  console.error('Error al generar el sitemap:', err);
});

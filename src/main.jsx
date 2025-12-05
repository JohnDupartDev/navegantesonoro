/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// --- 1. IMPORTACIÓN DE COMPONENTES CON LAZY LOADING ---
// En lugar de importar todo de golpe, importamos solo cuando se necesita.

const Home = lazy(() => import('./routes/home.jsx'))
const Comofunciona = lazy(() => import('./routes/comofunciona.jsx'))
const Next = lazy(() => import('./routes/next.jsx'))
const Estaciondeltren = lazy(() => import('./routes/estaciondeltren.jsx'))
const Slider = lazy(() => import('./routes/slider.jsx'))
const Error404 = lazy(() => import('./routes/error404.jsx'))
const Aliados = lazy(() => import('./routes/Aliados.jsx'))
const MiCuenta = lazy(() => import('./routes/MiCuenta.jsx'))
const AuthPin = lazy(() => import('./routes/AuthPin.jsx'))
const Mapa = lazy(() => import('./routes/mapa.jsx'))
const CasaNavas = lazy(() => import('./routes/CasaNavas.jsx'))
const Independencia = lazy(() => import('./routes/Independencia.jsx'))
const Plaza = lazy(() => import('./routes/Plaza.jsx'))
const Comprar = lazy(() => import('./routes/Comprar.jsx'))
const Funzipa = lazy(() => import('./routes/Funzipa.jsx'))
const Catedral = lazy(() => import('./routes/Catedral.jsx'))
const Estacionesar = lazy(() => import('./routes/Estacionesar.jsx'))

// Capítulos
const Capitulo1 = lazy(() => import('./routes/Capitulo1.jsx'))
const Capitulo2 = lazy(() => import('./routes/Capitulo2.jsx'))
const Capitulo3 = lazy(() => import('./routes/Capitulo3.jsx'))
const Capitulo4 = lazy(() => import('./routes/Capitulo4.jsx'))
const Capitulo5 = lazy(() => import('./routes/Capitulo5.jsx'))
const Capitulo6 = lazy(() => import('./routes/Capitulo6.jsx'))

// --- 2. COMPONENTE DE CARGA (LOADING) ---
// Esto se muestra mientras el navegador descarga el "pedacito" de código de la nueva ruta.
// Puedes cambiar este <div> por tu componente <Loader /> si lo importas.
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#fff' }}>
    <p>Cargando experiencia...</p>
  </div>
);

// Helper para envolver rutas en Suspense automáticamente
const Load = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: Load(Home),
    errorElement: (
      <div>
        <h1>Uuups...no hay nada aquí</h1>
        <a href='https://navegantesonoro.com'>Volver</a>
      </div>
    ),
  },
  { path: '/comofunciona', element: Load(Comofunciona) },
  { path: '/next', element: Load(Next) },
  { path: '/estaciondeltren', element: Load(Estaciondeltren) },
  { path: '/casanavas', element: Load(CasaNavas) },
  { path: '/plaza', element: Load(Plaza) },
  { path: '/independencia', element: Load(Independencia) },
  { path: '/funzipa', element: Load(Funzipa) },
  { path: '/catedral', element: Load(Catedral) },
  { path: '/estacionesar', element: Load(Estacionesar) },
  { path: '/slider', element: Load(Slider) },
  { path: '/aliados', element: Load(Aliados) },
  
  // Capítulos
  { path: '/capitulo1', element: Load(Capitulo1) },
  { path: '/capitulo2', element: Load(Capitulo2) },
  { path: '/capitulo3', element: Load(Capitulo3) },
  { path: '/capitulo4', element: Load(Capitulo4) },
  { path: '/capitulo5', element: Load(Capitulo5) },
  { path: '/capitulo6', element: Load(Capitulo6) },
  
  { path: '/micuenta', element: Load(MiCuenta) },
  { path: '/comprar', element: Load(Comprar) },
  { path: '/mapa', element: Load(Mapa) },
  { path: '/authpin', element: Load(AuthPin) },
  { path: '*', element: Load(Error404) }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
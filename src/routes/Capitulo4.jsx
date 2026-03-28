/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

// CONFIGURACIÓN DE RUTAS ESTÁTICAS (Carpeta public/images/)
const path = "/images/";

// LOGOS DE ALIADOS
const logoCasaChorro = `${path}LogoCasadelChorro.jpg`;
const logoFrancachela = `${path}logofrancachela.jpg`;
const logoCacique = `${path}logocacique.jpg`;
const logoCamino = `${path}logocamino.jpg`;

// IMÁGENES DE GALERÍA
const menuChorro = `${path}menucasadelchorro.jpg`;

const franca = `${path}franca.jpg`;
const franca1 = `${path}franca1.jpg`;
const franca2 = `${path}franca2.jpg`;
const franca3 = `${path}franca3.jpg`;
const franca4 = `${path}franca4.jpg`;
const franca5 = `${path}franca5.jpg`;
const franca6 = `${path}franca6.jpg`;
const franca7 = `${path}franca7.jpg`;
const franca8 = `${path}franca8.jpg`;

const caci = `${path}caci.jpg`;
const caci1 = `${path}caci1.jpg`;
const caci2 = `${path}caci2.jpg`;
const caci3 = `${path}caci3.jpg`;
const caci4 = `${path}caci4.jpg`;
const caci5 = `${path}caci5.jpg`;
const caci6 = `${path}caci6.jpg`;
const casi7 = `${path}casi7.jpg`;
const caci8 = `${path}caci8.jpg`;
const caci9 = `${path}caci9.jpg`;

const hsal = `${path}hsal.jpg`;
const hsal1 = `${path}hsal1.jpg`;
const hsal2 = `${path}hsal2.jpg`;
const hsal3 = `${path}hsal3.jpg`;
const hsal4 = `${path}hsal4.jpg`;
const hsal5 = `${path}hsal5.jpg`;
const hsal6 = `${path}hsal6.jpg`;
const hsal7 = `${path}hsal7.jpg`;
const hsal8 = `${path}hsal8.jpg`;
const hsal9 = `${path}hsal9.jpg`;
const hsal10 = `${path}hsal10.jpg`;
const hsal11 = `${path}hsal11.jpg`;
const hsal12 = `${path}hsal12.jpg`;
const hsal13 = `${path}hsal13.jpg`;

// Iconos Sociales
const whatsappIcon = `${path}whastapp.svg`;
const instagramIcon = `${path}instagram.png`;
const facebookIcon = `${path}facebook.png`;

/* -------------------------------------------------------------------------- */
/* ESTILOS INLINE PARA UX TIPO APP (Glassmorphism & Mobile)                   */
/* -------------------------------------------------------------------------- */
const styles = {
  appContainer: {
    maxWidth: '500px', // Simula ancho de móvil
    margin: '0 auto',
    paddingBottom: '80px', // Espacio para el botón flotante inferior
  },
  glassCard: {
    background: 'rgba(33, 37, 41, 0.6)', // Fondo oscuro semitransparente
    backdropFilter: 'blur(12px)', // Efecto borroso (Blur) estilo iOS
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px', // Bordes muy redondeados
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },
  mainButton: {
    borderRadius: '50px', // Botón tipo píldora
    fontWeight: '700',
    padding: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(94, 22, 226, 0.4)',
    display: 'block',
    textAlign: 'center',
    width: '100%'
  },
  galleryImage: {
    height: '300px', 
    objectFit: 'cover',
    borderRadius: '16px'
  }
};

/* -------------------------------------------------------------------------- */
/* DATOS (DATA) - Mismo contenido, estructura limpia                          */
/* -------------------------------------------------------------------------- */
const ALIADOS_DATA = [
  {
    id: 'casadelchorro',
    title: 'Casa del Chorro',
    subtitle: 'Restaurante',
    logo: logoCasaChorro,
    description: (
      <>
        <strong className='text-warning d-block mb-2'>✨ Platos especiales Ruta Sonora</strong>
        Disfruta de un ambiente único, platos sabrosos y postres deliciosos inspirados en Rafael Pombo. 
        <br/><br/>
        🍽️ <strong>Menús:</strong> Rin Rin Renacuajo, Mirringa Mirronga, Rey Borrego y Plato Zipaquireño.
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Calle 5 #5-32</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría pedir el Plato especial con Ruta Sonora',
    ctaText: '🍽️ ¡Pedir Aquí!',
    images: [menuChorro],
    social: {
      whatsapp: 'https://wa.me/573209568055?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/casadelchorro/',
      facebook: 'https://www.facebook.com/casadelchorro.zipaquira'
    }
  },
  {
    id: 'francachela',
    title: 'Habrá Francachela',
    subtitle: 'Café de Especialidad',
    logo: logoFrancachela,
    description: (
      <>
        ☕ Café de especialidad, postres hechos con amor y comidas artesanales.
        Vive experiencias únicas donde los métodos de filtrado son los protagonistas. 
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Calle 5 #5-28</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría pedir el Café especial con Ruta Sonora',
    ctaText: '☕ ¡Pedir Café!',
    images: [
      franca, franca1, franca2, franca3,
      franca4, franca5, franca6, franca7,
      franca8
    ],
    social: {
      whatsapp: 'https://wa.me/573176417619?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/francachelacafe/',
      facebook: 'https://www.facebook.com/Francachelacafe'
    }
  },
  {
    id: 'caciquereal',
    title: 'Hotel Cacique Real',
    subtitle: 'Hospedaje Colonial',
    logo: logoCacique,
    description: (
      <>
        Disfruta de experiencias memorables en la Casona Colonial o en la Casona Contemporánea de nuestro hotel. 
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Carrera 6 #2-36</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría hacer una reserva aliados Ruta Sonora',
    ctaText: '🏨 Reservar Ahora',
    images: [
      caci, caci1, caci2, caci3,
      caci4, caci5, caci6, casi7,
      caci8, caci9
    ],
    social: {
      whatsapp: 'https://wa.me/573115321251?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/caciquereal_hotel/',
      facebook: 'https://www.facebook.com/HotelCaciqueReal'
    }
  },
  {
    id: 'caminodelasal',
    title: 'Hotel Camino de la Sal',
    subtitle: 'Hospedaje Moderno',
    logo: logoCamino,
    description: (
      <>
        Combinación elegante, fresca, moderna y agradable. Habitaciones que te transportarán a una Zipaquirá diferente.
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Carrera 4 #5-03</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría hacer una reserva aliados Ruta Sonora',
    ctaText: '🛏️ Ver Disponibilidad',
    images: [
      hsal, hsal1, hsal2, hsal3,
      hsal4, hsal5, hsal6, hsal7,
      hsal8, hsal9, hsal10, hsal11,
      hsal12, hsal13
    ],
    social: {
      whatsapp: 'https://wa.me/573013702227?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/hotelcaminodelasal/',
      facebook: 'https://www.facebook.com/hotelcaminodelasalzipaquira'
    }
  }
];

/* -------------------------------------------------------------------------- */
/* COMPONENTES DE UI                                                          */
/* -------------------------------------------------------------------------- */

const SocialLinks = ({ social }) => (
  <div className="mt-4 border-top border-secondary pt-3 w-100">
    <p className='text-center text-white-50 small mb-2'>Conecta con nosotros</p>
    <div className="d-flex justify-content-center gap-4">
      {social.whatsapp && (
        <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100 transition">
          <img src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100 transition">
          <img src={instagramIcon} alt="Instagram" width={32} height={32} />
        </a>
      )}
      {social.facebook && (
        <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100 transition">
          <img src={facebookIcon} alt="Facebook" width={32} height={32} />
        </a>
      )}
    </div>
  </div>
);

const ImageCarousel = ({ id, images }) => {
  const carouselId = `carousel-${id}`;

  return (
    <div id={carouselId} className="carousel slide my-4 shadow rounded-4 overflow-hidden" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((imgSrc, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img 
              src={imgSrc} 
              alt={`Slide ${index}`} 
              className="d-block w-100" 
              style={styles.galleryImage} 
            />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2 bg-opacity-50" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2 bg-opacity-50" aria-hidden="true"></span>
          </button>
        </>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* COMPONENTE PRINCIPAL                                                       */
/* -------------------------------------------------------------------------- */

const Capitulo4 = () => {
  return (
    <div className="capitulo min-vh-100 d-flex flex-column align-items-center">
      
      <div style={styles.appContainer} className="w-100 px-3">
        
        <div className="text-center py-4 mb-2">
          <span className="badge bg-warning text-dark mb-2">Ruta Sonora</span>
          <h1 className="text-uppercase fw-bold text-light h2 m-0">Aliados Capítulo 4</h1>
        </div>

        {ALIADOS_DATA.map((aliado) => (
          <div key={aliado.id} style={styles.glassCard} className="fade-in-up">
            
            <div className="d-flex align-items-center mb-3">
              <img 
                src={aliado.logo} 
                alt="Logo" 
                className="rounded-circle border border-2 border-white"
                style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
              />
              <div className="ms-3">
                <h2 className="h4 fw-bold text-light m-0">{aliado.title}</h2>
                <small className="text-info text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>{aliado.subtitle}</small>
              </div>
            </div>

            <ImageCarousel id={aliado.id} images={aliado.images} />

            <div className="text-light mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
              {aliado.description}
            </div>

            <a
              href={aliado.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capitulo  text-white border-0 "
              style={styles.mainButton}
            >
              {aliado.ctaText}
            </a>

            <SocialLinks social={aliado.social} />
          </div>
        ))}

        <div className="fixed-bottom p-3 d-flex justify-content-center " >
           <div style={{ pointerEvents: 'auto' }}>
            <Link to="/aliados" className="btn btn-success rounded-pill px-4 py-2 shadow fw-bold d-flex align-items-center gap-2">
              <span className="fs-5">←</span> Volver 
            </Link>
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default Capitulo4;
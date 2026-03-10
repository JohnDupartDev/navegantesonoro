/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

// IMPORTACIÓN DE LOGOS DE ALIADOS
import logoCasaChorro from '../assets/image/LogoCasadelChorro.jpg';
import logoFrancachela from '../assets/image/logofrancachela.jpg';
import logoCacique from '../assets/image/logocacique.jpg';
import logoCamino from '../assets/image/logocamino.jpg';

// IMPORTACIÓN DE IMÁGENES DE GALERÍA
// Casa del Chorro
import menuChorro from '../assets/image/menucasadelchorro.jpg';

// Francachela
import franca from '../assets/image/franca.jpg';
import franca1 from '../assets/image/franca1.jpg';
import franca2 from '../assets/image/franca2.jpg';
import franca3 from '../assets/image/franca3.jpg';
import franca4 from '../assets/image/franca4.jpg';
import franca5 from '../assets/image/franca5.jpg';
import franca6 from '../assets/image/franca6.jpg';
import franca7 from '../assets/image/franca7.jpg';
import franca8 from '../assets/image/franca8.jpg';

// Cacique Real
import caci from '../assets/image/caci.jpg';
import caci1 from '../assets/image/caci1.jpg';
import caci2 from '../assets/image/caci2.jpg';
import caci3 from '../assets/image/caci3.jpg';
import caci4 from '../assets/image/caci4.jpg';
import caci5 from '../assets/image/caci5.jpg';
import caci6 from '../assets/image/caci6.jpg';
import casi7 from '../assets/image/casi7.jpg'; // Respetando nombre del archivo original
import caci8 from '../assets/image/caci8.jpg';
import caci9 from '../assets/image/caci9.jpg';

// Camino de la Sal
import hsal from '../assets/image/hsal.jpg';
import hsal1 from '../assets/image/hsal1.jpg';
import hsal2 from '../assets/image/hsal2.jpg';
import hsal3 from '../assets/image/hsal3.jpg';
import hsal4 from '../assets/image/hsal4.jpg';
import hsal5 from '../assets/image/hsal5.jpg';
import hsal6 from '../assets/image/hsal6.jpg';
import hsal7 from '../assets/image/hsal7.jpg';
import hsal8 from '../assets/image/hsal8.jpg';
import hsal9 from '../assets/image/hsal9.jpg';
import hsal10 from '../assets/image/hsal10.jpg';
import hsal11 from '../assets/image/hsal11.jpg';
import hsal12 from '../assets/image/hsal12.jpg';
import hsal13 from '../assets/image/hsal13.jpg';

// Iconos Sociales
import whatsappIcon from '../assets/image/whastapp.svg';
import instagramIcon from '../assets/image/instagram.png';
import facebookIcon from '../assets/image/facebook.png';

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
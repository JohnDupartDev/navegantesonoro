/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

// IMPORTACIÓN DE IMÁGENES
import logodoce from '../assets/image/logodoce.jpg';
import doce from '../assets/image/doce.jpg';
import doce1 from '../assets/image/doce1.jpg';
import doce2 from '../assets/image/doce2.jpg';
import doce4 from '../assets/image/doce4.jpg';

// Iconos Sociales
import whatsappIcon from '../assets/image/whastapp.svg';
import instagramIcon from '../assets/image/instagram.png';
import facebookIcon from '../assets/image/facebook.png';

/* -------------------------------------------------------------------------- */
/* ESTILOS INLINE (UX TIPO APP)                                               */
/* -------------------------------------------------------------------------- */
const styles = {
  appContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    paddingBottom: '100px',
  },
  glassCard: {
    background: 'rgba(33, 37, 41, 0.75)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '24px',
    padding: '24px',
    marginBottom: '32px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
  },
  mainButton: {
    borderRadius: '50px',
    fontWeight: '700',
    padding: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(13, 110, 253, 0.4)',
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '15px',
    textDecoration: 'none'
  },
  avatar: {
    width: '65px', 
    height: '65px', 
    objectFit: 'cover',
    border: '2px solid white'
  },
  galleryImage: {
    height: '280px', 
    objectFit: 'cover',
    borderRadius: '16px'
  },
  // Estilo específico para la lista de experiencias
  experienceItem: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '10px',
    borderLeft: '4px solid #ffc107' // Borde amarillo para resaltar
  }
};

/* -------------------------------------------------------------------------- */
/* DATOS (DATA)                                                               */
/* -------------------------------------------------------------------------- */
const ALIADOS_DATA = [
  {
    id: 'docecafe',
    title: 'Doce Café',
    subtitle: 'Experiencias Sensoriales',
    logo: logodoce,
    description: (
      <>
        <p className="mb-4">
          Vive una experiencia única e inolvidable con nuestras tres propuestas inspiradas en la Ruta Sonora. 
          Degusta bebidas y amasijos tradicionales, cada uno con su propio toque especial.
        </p>

        <h6 className="text-warning text-uppercase fw-bold mb-3 small opacity-75">✨ Menús Disponibles:</h6>
        
        <div style={styles.experienceItem}>
          <strong className='text-warning d-block'>🎩 Tarde de Antonio</strong>
          <em className="small">Sencillo y Profundo</em>
          <p className="m-0 mt-1 small opacity-75">Una pausa esencial. Café o masato con acompañamiento tradicional.</p>
        </div>

        <div style={styles.experienceItem}>
          <strong className='text-warning d-block'>⛪ Receso de Sor Mercedes</strong>
          <em className="small">Dulce Consuelo</em>
          <p className="m-0 mt-1 small opacity-75">Bebidas tradicionales reconfortantes que ofrecen alivio y dulzura.</p>
        </div>

        <div style={styles.experienceItem}>
          <strong className='text-warning d-block'>🌸 Rincón de Luisa</strong>
          <em className="small">Aromas con Alma</em>
          <p className="m-0 mt-1 small opacity-75">Versatilidad y pasión. Una experiencia con carácter en cada sorbo.</p>
        </div>
      </>
    ),
    // Enlace para reservar
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! Te contacto por medio de Navegante Sonoro y me gustaria reservar la experiencia',
    ctaText: '☕ Reservar Experiencia',
    images: [
      doce, 
      doce1, 
      doce2, 
      doce4
    ],
    social: {
      whatsapp: 'https://wa.me/573134450567?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/docecafe_zipa/',
      facebook: 'https://www.facebook.com/profile.php?id=61553349969678'
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
        <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100">
          <img src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100">
          <img src={instagramIcon} alt="Instagram" width={32} height={32} />
        </a>
      )}
      {social.facebook && (
        <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="opacity-75 hover-opacity-100">
          <img src={facebookIcon} alt="Facebook" width={32} height={32} />
        </a>
      )}
    </div>
  </div>
);

const ImageCarousel = ({ id, images }) => {
  if (!images || images.length === 0) return null;
  const carouselId = `carousel-${id}`;

  return (
    <div id={carouselId} className="carousel slide my-4 shadow rounded-4 overflow-hidden" data-bs-ride="carousel">
      {/* Indicadores (Dots) */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

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

const Capitulo2 = () => {
  return (
    <div className="capitulo min-vh-100 d-flex flex-column align-items-center">
      
      {/* Contenedor App Móvil */}
      <div style={styles.appContainer} className="w-100 px-3">
        
        {/* Header */}
        <div className="text-center py-4 mb-2">
          <span className="badge bg-warning text-dark mb-2">Ruta Sonora</span>
          <h1 className="text-uppercase fw-bold text-light h2 m-0">Aliados Capítulo 3</h1>
        </div>

        {/* Renderizado de Aliados */}
        {ALIADOS_DATA.map((aliado) => (
          <div key={aliado.id} style={styles.glassCard} className="fade-in-up">
            
            {/* Header: Avatar + Título */}
            <div className="d-flex align-items-center mb-3">
              <img 
                src={aliado.logo} 
                alt="Logo" 
                className="rounded-circle shadow"
                style={styles.avatar} 
              />
              <div className="ms-3">
                <h2 className="h4 fw-bold text-light m-0">{aliado.title}</h2>
                <small className="text-info text-uppercase fw-bold" style={{fontSize: '0.75rem'}}>
                  {aliado.subtitle}
                </small>
              </div>
            </div>

            {/* Carrusel */}
            <ImageCarousel id={aliado.id} images={aliado.images} />

            {/* Descripción / Menú */}
            <div className="text-light mb-4 text-white-90" style={{ textAlign: 'justify', lineHeight: '1.5' }}>
              {aliado.description}
            </div>

            {/* CTA BUTTON */}
            <a
              href={aliado.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capitulo text-white border-0 hover-scale"
              style={styles.mainButton}
            >
              {aliado.ctaText}
            </a>
            <p className="text-center text-white-50 small fst-italic">
              ¡Déjate llevar por el sabor y la tradición!
            </p>

            {/* Redes Sociales */}
            <SocialLinks social={aliado.social} />
          </div>
        ))}

        {/* Botón Flotante "Volver" */}
        <div className="fixed-bottom p-3 d-flex justify-content-center" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', pointerEvents: 'none' }}>
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

export default Capitulo2;
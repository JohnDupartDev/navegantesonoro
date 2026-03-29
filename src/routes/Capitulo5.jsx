/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/* CONFIGURACIÓN DE CLOUDINARY (RUTA MAESTRA FUNCIONAL)                        */
/* -------------------------------------------------------------------------- */
const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

// LOGOS DESDE CLOUDINARY
const logoSalario = `${cloudPath}logosalario.jpg`;
const logoArte = `${cloudPath}logoarte.jpg`;

// IMÁGENES - SALARIO DESDE CLOUDINARY
const salarioImg = `${cloudPath}salario.jpg`;
const salario1 = `${cloudPath}salario1.jpg`;
const salario3 = `${cloudPath}salario3.jpg`;
const salario4 = `${cloudPath}salario4.jpg`;
const salario5 = `${cloudPath}salario5.jpg`;
const salario6 = `${cloudPath}salario6.jpg`;
const salario7 = `${cloudPath}salario7.jpg`;
const salario8 = `${cloudPath}salario8.jpg`;
const salario9 = `${cloudPath}salario9.jpg`;

// IMÁGENES - ARTENSAL DESDE CLOUDINARY
const arteImg = `${cloudPath}arte.jpg`;
const arte1 = `${cloudPath}arte1.jpg`;
const arte3 = `${cloudPath}arte3.jpg`;
const arte4 = `${cloudPath}arte4.jpg`;
const arte5 = `${cloudPath}arte5.jpg`;

// Iconos Sociales desde Cloudinary
const whatsappIcon = `${cloudPath}whastapp.svg`;
const instagramIcon = `${cloudPath}instagram.png`;
const facebookIcon = `${cloudPath}facebook.png`;

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
  promoBox: {
    background: 'rgba(255, 193, 7, 0.15)', // Fondo amarillo sutil
    border: '1px solid rgba(255, 193, 7, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '16px',
    color: '#ffda6a'
  }
};

/* -------------------------------------------------------------------------- */
/* DATOS (DATA)                                                               */
/* -------------------------------------------------------------------------- */
const ALIADOS_DATA = [
  {
    id: 'salario',
    title: 'Salario Restaurante',
    subtitle: 'Gastronomía & Bar',
    logo: logoSalario,
    description: (
      <>
        <p className="mb-3">
          🔥 <strong>Únicos hornos de sal activos en la ciudad.</strong>
          <br/>
          Disfruta del mejor lomo al trapo y platos especiales que exaltan la gastronomía colombiana.
        </p>
        
        <div className="text-white-50 small mb-3 p-2 border border-secondary rounded">
          🕒 <strong>Horarios:</strong><br/>
          L-V: desde 12:00 p.m.<br/>
          S-D: desde 8:00 a.m.
        </div>
        
        <p className="small mb-0">Eventos corporativos y sociales.</p>
        <small className="text-white-50">📍 Dirección: Calle 1 #9-79</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría pedir el Plato especial con Ruta Sonora',
    ctaText: '🥩 Reservar Mesa',
    images: [
      salarioImg, salario1, salario3,
      salario4, salario5, salario6,
      salario7, salario8, salario9
    ],
    social: {
      whatsapp: 'https://wa.me/573125739939?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/salario_de_zipa/',
      facebook: 'https://www.facebook.com/profile.php?id=61554488138683'
    }
  },
  {
    id: 'artensal',
    title: 'Artensal Zipaquirá',
    subtitle: 'Arte, Sal & Experiencias',
    logo: logoArte,
    description: (
      <>
        {/* Caja de Descuento */}
        <div style={styles.promoBox}>
          <strong className="text-uppercase">💎 Beneficio Exclusivo:</strong>
          <p className="m-0 small mt-1">
            <strong>5% de descuento</strong> en líneas Arte, Iluminación, Souvenirs, Utilitarios, Sal de Terapia o Joyería. 
            <br/><em>(Menciona la Ruta Sonora)</em>
          </p>
        </div>

        <h6 className="text-warning fw-bold text-uppercase mb-2">🧂 Sal de Experiencia</h6>
        <p className="text-justify small opacity-90 mb-3">
          Un viaje terapéutico y ancestral Mhuysca. Entra en contacto profundo con el material de origen de la mina, aprendiendo historia y técnicas de talla.
        </p>
        
        <ul className="list-unstyled small text-white-50 mb-3">
          <li>⏳ <strong>Duración:</strong> 1h 15min aprox.</li>
          <li>📍 <strong>Ubicación:</strong> Calle 1 #9-79</li>
        </ul>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría pedir el Plato especial con Ruta Sonora', 
    ctaText: '✨ Reservar Experiencia',
    images: [
      arteImg, arte1, arte3,
      arte4, arte5
    ],
    social: {
      whatsapp: 'https://wa.me/573502676768?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/artensalzipaquira/',
      facebook: 'https://www.facebook.com/artensalzipaquiralacasadelasal'
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

const Capitulo5 = () => {
  return (
    <div className="capitulo min-vh-100 d-flex flex-column align-items-center">
      
      {/* Contenedor App Móvil */}
      <div style={styles.appContainer} className="w-100 px-3">
        
        {/* Header */}
        <div className="text-center py-4 mb-2">
          <span className="badge bg-warning text-dark mb-2">Ruta Sonora</span>
          <h1 className="text-uppercase fw-bold text-light h2 m-0">Aliados Capítulo 5</h1>
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

            {/* Descripción */}
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

export default Capitulo5;
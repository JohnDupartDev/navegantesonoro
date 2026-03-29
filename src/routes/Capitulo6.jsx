/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/* CONFIGURACIÓN DE CLOUDINARY (RUTA MAESTRA FUNCIONAL)                        */
/* -------------------------------------------------------------------------- */
const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

// LOGOS DESDE CLOUDINARY
const logoDesal = `${cloudPath}logodsal.jpg`;
const logoSandu = `${cloudPath}logosandu.jpg`;

// IMÁGENES - DESAL DESDE CLOUDINARY
const desalImg = `${cloudPath}desal.jpg`;
const dsal1 = `${cloudPath}dsal1.jpg`;
const dsal3 = `${cloudPath}dsal3.jpg`;
const dsal4 = `${cloudPath}dsal4.jpg`;
const dsal5 = `${cloudPath}dsal5.jpg`;
const dsal6 = `${cloudPath}dsal6.jpg`;
const dsal7 = `${cloudPath}dsal7.jpg`;

// IMÁGENES - SANDWICHEROS DESDE CLOUDINARY
const sa1 = `${cloudPath}sa1.jpg`;
const sa2 = `${cloudPath}sa2.jpg`;
const sanduImg = `${cloudPath}sandu.jpg`;
const sa3 = `${cloudPath}sa3.jpg`;

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
    overflow: 'hidden' 
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
    border: '2px solid white',
    flexShrink: 0 
  },
  galleryImage: {
    height: '280px', 
    objectFit: 'cover',
    borderRadius: '16px'
  },
  promoBox: {
    background: 'rgba(255, 193, 7, 0.15)',
    border: '1px solid rgba(255, 193, 7, 0.3)',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '16px',
    color: '#ffda6a',
    wordWrap: 'break-word'
  },
  iosCard: {
    background: 'rgba(0, 0, 0, 0.25)', 
    borderRadius: '18px', 
    padding: '16px',
    marginBottom: '12px', 
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'transform 0.2s ease',
  },
  iosIcon: {
    width: '48px',
    height: '48px',
    minWidth: '48px', 
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginRight: '16px'
  }
};

/* -------------------------------------------------------------------------- */
/* DATOS (DATA)                                                               */
/* -------------------------------------------------------------------------- */
const ALIADOS_DATA = [
  {
    id: 'desal',
    title: 'Desal Colombia',
    subtitle: 'Bienestar & Sal',
    logo: logoDesal,
    description: (
      <>
        <div style={styles.promoBox}>
          <strong className="text-uppercase">💎 Beneficio Navegante:</strong>
          <p className="m-0 small mt-1">
            <strong>10% de descuento</strong> en cualquier experiencia o producto. 
            <br/><em>(Exclusivo con Navegante Sonoro)</em>
          </p>
        </div>

        <p className="small mb-3 opacity-90">
          Una experiencia inolvidable a 180 metros bajo tierra. 
          Productos cosméticos naturales y orgánicos.<em>Cruelty free</em>.
        </p>

        <h6 className="text-warning fw-bold small text-uppercase mb-3">✨ Experiencia Ritual Bigua Sonoro:</h6>
        
        <div className="d-flex flex-column mb-4">
          <div style={styles.iosCard}>
            <div style={styles.iosIcon}>🤲</div>
            <div>
              <strong className="d-block text-white mb-1">Limpieza del dar y recibir</strong>
              <span className="small text-white-50 lh-sm d-block">Exfoliación y conexión de las manos con la sal natural</span>
            </div>
          </div>

          <div style={styles.iosCard}>
            <div style={styles.iosIcon}>🦶</div>
            <div>
              <strong className="d-block text-white mb-1">Limpieza del caminar</strong>
              <span className="small text-white-50 lh-sm d-block">Baño relajante de pies con salmuera, aceite esencial tea tree, hojas de eucalipto, sales de baño, exfoliación con sal vigua y crema con salmuera para pies cansados.</span>
            </div>
          </div>

          <div style={styles.iosCard}>
            <div style={styles.iosIcon}>⚡</div>
            <div>
              <strong className="d-block text-white mb-1">Descarga energética</strong>
              <span className="small text-white-50 lh-sm d-block">Caminata en pedisalino (propósito y trascendencia).</span>
            </div>
          </div>

          <div style={styles.iosCard}>
            <div style={styles.iosIcon}>🧘</div>
            <div>
              <strong className="d-block text-white mb-1">Renovación mental</strong>
              <span className="small text-white-50 lh-sm d-block"> Descanso en sillas relajantes, aromaterapia, musicoterapia y cojín herbal con esencias relajantes y bebida ancestral.</span>
            </div>
          </div>

          <div style={styles.iosCard}>
            <div style={styles.iosIcon}>🔔</div>
            <div>
              <strong className="d-block text-white mb-1">Estancia en el sendero de la sal</strong>
              <span className="small text-white-50 lh-sm d-block">La mágica sensación de caminar descalzo sobre la sal</span>
            </div>
          </div>
        </div>
        
        <p className="small text-info fst-italic">🎁 Obsequio: Sales de baño relajantes (50g).</p>
        <small className="text-white-50">📍 Dirección: Calle 1 #7-12</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría hacer una reserva aliados Ruta Sonora',
    ctaText: '🧖‍♀️ Reservar Ritual',
    images: [
      desalImg, dsal1, dsal3,
      dsal4, dsal5, dsal6, dsal7
    ],
    social: {
      whatsapp: 'https://wa.me/573007502396?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/desalcolombia/',
      facebook: 'https://www.facebook.com/DesalColombia'
    }
  },
  {
    id: 'sandwicheros',
    title: 'Sandwicheros',
    subtitle: 'Universo de Sabores',
    logo: logoSandu,
    description: (
      <>
        <p className="lead fw-bold text-warning mb-2">
          🥪 Los mejores sandwiches y hamburguesas de la galaxia.
        </p>
        <p className="small opacity-90 mb-3">Un universo de sabores esperando por ti.</p>
        
        <div className="badge bg-warning text-dark p-2 mb-3 w-100 text-wrap lh-sm">
          🏆 Ganadores Zipa Burger Fest 2023
        </div>

        <br/>
        <small className="text-white-50">📍 Dirección: Calle 1 #7-12</small>
      </>
    ),
    ctaLink: 'https://wa.me/573116693937?text=¡Hola! Te contacto por medio de Navegante Sonoro', 
    ctaText: '🍔 Ver Menú Galáctico',
    images: [
      sa1, sa2, sanduImg, sa3
    ],
    social: {
      whatsapp: 'https://wa.me/573116693937?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/sandwicheros.co/',
      facebook: 'https://www.facebook.com/sandwicheros.co'
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

const Capitulo6 = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="capitulo min-vh-100 d-flex flex-column align-items-center">
      <div style={styles.appContainer} className="w-100 px-3">
        <div className="text-center py-4 mb-2">
          <span className="badge bg-warning text-dark mb-2">Ruta Sonora</span>
          <h1 className="text-uppercase fw-bold text-light h2 m-0">Aliados Capítulo 6</h1>
        </div>

        {ALIADOS_DATA.map((aliado) => (
          <div key={aliado.id} style={styles.glassCard} className="fade-in-up">
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

            <ImageCarousel id={aliado.id} images={aliado.images} />

            <div 
              className="text-light mb-4 text-white-90" 
              style={{ 
                textAlign: 'left', 
                lineHeight: '1.5',
                overflowWrap: 'break-word',
                wordBreak: 'break-word' 
              }}
            >
              {aliado.description}
            </div>

            <a
              href={aliado.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capitulo text-white border-0 hover-scale"
              style={styles.mainButton}
            >
              {aliado.ctaText}
            </a>

            <SocialLinks social={aliado.social} />
          </div>
        ))}

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

export default Capitulo6;
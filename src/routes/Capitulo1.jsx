/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/* CONFIGURACIÓN DE CLOUDINARY (RUTA MAESTRA FUNCIONAL)                        */
/* -------------------------------------------------------------------------- */
const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

// DEFINICIÓN DE RUTAS DE IMÁGENES DESDE CLOUDINARY
const tickettourLogo = `${cloudPath}tickettour.jpg`;
const sintenedorLogo = `${cloudPath}sintenedor.jpg`;
const ovejaLogo = `${cloudPath}oveja.jpg`;
const amoraLogo = `${cloudPath}amara.png`;
const almalogo = `${cloudPath}almalogo.jpg`;
const logoandreabo = `${cloudPath}logoandreabo.jpg`;

// Imágenes de Carruseles
const sint = `${cloudPath}sint.jpg`;
const sint1 = `${cloudPath}sint1.jpg`;
const sint2 = `${cloudPath}sint2.jpg`;
const ove = `${cloudPath}ove.jpg`;
const ove1 = `${cloudPath}ove1.jpg`;
const ove2 = `${cloudPath}ove2.jpg`;
const ove3 = `${cloudPath}ove3.jpg`;
const amora1 = `${cloudPath}amora1.jpg`;
const amora2 = `${cloudPath}amora2.jpg`;
const amora3 = `${cloudPath}amora3.jpg`;
const almaImg = `${cloudPath}ALMA.jpg`;
const alma1 = `${cloudPath}alma1.jpg`;
const alma2 = `${cloudPath}alma2.jpg`;
const alma4 = `${cloudPath}alma4.jpg`;
const alma5 = `${cloudPath}alma5.jpg`;
const almap = `${cloudPath}almap.jpg`;
const almabe = `${cloudPath}almabe.jpg`;
const andree = `${cloudPath}andree.jpg`;
const andre1 = `${cloudPath}andre1.jpg`;
const andre2 = `${cloudPath}andre2.jpg`;
const andre3 = `${cloudPath}andre3.jpg`;

// Iconos Sociales
const whatsappIcon = `${cloudPath}whastapp.svg`;
const instagramIcon = `${cloudPath}instagram.png`;
const facebookIcon = `${cloudPath}facebook.png`;

/* -------------------------------------------------------------------------- */
/* ESTILOS INLINE (UX TIPO APP)                                               */
/* -------------------------------------------------------------------------- */
const styles = {
  appContainer: {
    maxWidth: '500px', // Ancho máximo simulando móvil
    margin: '0 auto',
    paddingBottom: '100px', // Espacio para botón flotante
  },
  glassCard: {
    background: 'rgba(33, 37, 41, 0.75)', // Fondo oscuro translúcido
    backdropFilter: 'blur(16px)', // Efecto cristal
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
  }
};

/* -------------------------------------------------------------------------- */
/* DATOS (DATA) - Contenido separado de la vista                              */
/* -------------------------------------------------------------------------- */
const ALIADOS_DATA = [
  {
    id: 'ticketsytours',
    title: 'Tickets & Tours Zipa',
    subtitle: 'Operador Turístico',
    logo: tickettourLogo,
    description: (
      <>
        🚂 <strong>Aliado Oficial Turistren</strong>
        <br/>
        Adquiere tus tickets para disfrutar el Tren Turístico de la Sabana con nosotros. Somos operador turístico y aliado número 3 de Turistren SAS.
      </>
    ),
    ctaLink: 'https://wa.me/573214535698?text=¡Hola! Te contacto por medio de Navegante Sonoro',
    ctaText: '🎟️ Cotizar Tickets',
    images: [], 
    social: {
      whatsapp: 'https://wa.me/573214535698?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/ticketstourszipa/',
      facebook: 'https://www.facebook.com/profile.php?id=61560080398178/'
    }
  },
  {
    id: 'sintenedor',
    title: 'Sin Tenedor Burgers',
    subtitle: 'Hamburguesería Artesanal',
    logo: sintenedorLogo,
    description: (
      <>
        🍔 <strong>¡El placer de comer con las manos!</strong>
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Carrera 12 #5-62, local 102</small>
      </>
    ),
    ctaLink: 'https://wa.me/573112557260?text=¡Hola! Te contacto por medio de Navegante Sonoro',
    ctaText: '🍔 Ver Menú / Pedir',
    images: [sint, sint1, sint2],
    social: {
      whatsapp: 'https://wa.me/573112557260?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/sintenedorburgers/',
      facebook: 'https://www.facebook.com/p/sin-tenedor-burgers-100046424299888/'
    }
  },
  {
    id: 'laoveja',
    title: 'La Oveja y El Lobo',
    subtitle: 'Restaurante Premiado',
    logo: ovejaLogo,
    description: (
      <>
        🏆 <strong>Ganadores Múltiples:</strong>
        <br/>
        Burger Master 2023 y 2024. Premios La Barra 2023 y 2024. Ganadores del Zipa Burger Fest.
      </>
    ),
    ctaLink: 'https://wa.me/573053107169?text=¡Hola! Te contacto por medio de Navegante Sonoro',
    ctaText: '🐺 Reservar Mesa',
    images: [ove, ove1, ove2, ove3],
    social: {
      whatsapp: 'https://wa.me/573053107169?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/laovejayellobo/',
      facebook: 'https://www.facebook.com/laovejayellobo'
    }
  },
  {
    id: 'amora',
    title: 'Amora Bakery',
    subtitle: 'Cocina & Pastelería',
    logo: amoraLogo,
    description: (
      <>
        🍰 Café, Postres, Waffles, Cócteles y Malteadas.
        <br/>
        🎤 Eventos en vivo.
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Carrera 11 #6-09</small>
      </>
    ),
    ctaLink: 'https://www.instagram.com/amora.bake/', 
    ctaText: '🍩 Ver Delicias',
    images: [amora1, amora2, amora3],
    social: {
      instagram: 'https://www.instagram.com/amora.bake/'
    }
  },
  {
    id: 'alma',
    title: 'Alma Coffee Bakery',
    subtitle: 'Café Bar & Pastelería',
    logo: almalogo,
    description: (
      <>
        ☕ <strong>Fabricamos experiencias.</strong>
        <br/>
        Mar - Sab: 3pm a 10pm. Domingos: 12pm a 5pm.
        <br/><br/>
        Próximamente tendremos una experiencia exclusiva.
        <br/>
        <small className="text-white-50">📍 Calle 5 #13-40 Algarra 2, casa roja esquinera</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría hacer una reserva aliados Ruta Sonora',
    ctaText: '✨ ¡Vívela solo aquí!',
    images: [almaImg, alma1, alma2, alma4, alma5, almap, almabe],
    social: {
      whatsapp: 'https://wa.me/573222504227?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/almacoffeebakery/'
    }
  },
  {
    id: 'andreabo',
    title: 'Andrea Bo',
    subtitle: 'Pastelería Tradicional',
    logo: logoandreabo,
    description: (
      <>
        🥧 <strong>Experiencias de antaño:</strong>
        <br/>
        Torta Solar Violeta (ganadora Torta Zipa Fest 2024) + Tinto o Sorbete de curuba + garulla de maíz (patrimonio cultural).
        <br/><br/>
        <small className="text-white-50">📍 Dirección: Carrera 11 #5-24</small>
      </>
    ),
    ctaLink: 'https://wa.me/573243314035?text=¡Hola! me gustaría hacer una reserva aliados Ruta Sonora',
    ctaText: '🥐 ¡Pídelas Aquí!',
    images: [andree, andre1, andre2, andre3],
    social: {
      whatsapp: 'https://wa.me/573102462117?text=¡Hola! Te contacto por medio de Navegante Sonoro',
      instagram: 'https://www.instagram.com/andreabopasteleria/',
      facebook: 'https://www.facebook.com/andreabocafeypasteleria'
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

const Capitulo1 = () => {
  return (
    <div className="capitulo min-vh-100 d-flex flex-column align-items-center">
      
      {/* Contenedor central (UX Móvil) */}
      <div style={styles.appContainer} className="w-100 px-3">
        
        {/* Encabezado */}
        <div className="text-center py-4 mb-2">
          <span className="badge bg-warning text-dark mb-2">Ruta Sonora</span>
          <h1 className="text-uppercase fw-bold text-light h2 m-0">Aliados Capítulo 1</h1>
        </div>

        {/* Renderizado Dinámico de Aliados */}
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

            {/* Carrusel (Se muestra solo si hay imágenes) */}
            <ImageCarousel id={aliado.id} images={aliado.images} />

            {/* Descripción */}
            <div className="text-light mb-4 text-white-90" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
              {aliado.description}
            </div>

            {/* CTA BUTTON (Botón Principal) */}
            <a
              href={aliado.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capitulo  text-white border-0 hover-scale"
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

export default Capitulo1;
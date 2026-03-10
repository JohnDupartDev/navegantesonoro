import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones de imágenes desde assets/image
import zipahostel from '../assets/image/zipahostel.jpg';
import alma from '../assets/image/ALMA.jpg';
import alma1 from '../assets/image/alma1.jpg';
import alma2 from '../assets/image/alma2.jpg';
import alma4 from '../assets/image/alma4.jpg';
import alma5 from '../assets/image/alma5.jpg';
import whatsappIcon from '../assets/image/whastapp.svg';
import instagramIcon from '../assets/image/instagram.png';

const Capitulo1 = () => {
  return (
    <div className="d-flex flex-column align-items-center vh-100">
      <h1 className="text-center mt-5 text-uppercase fw-bold">Zipa Hostel</h1>
      <img src={zipahostel} alt="Zipa Hostel" className="mt-3 mb-3 rounded" style={{ width: '80%', maxHeight: '300px', objectFit: 'cover' }} />
      <p className="text-justify px-4" style={{ textAlign: 'justify' }}>
        Ubicado en Zipaquirá Cundinamarca, a 40 km de Centro Comercial Unicentro, y ofrece mostrador de información turística, habitaciones libres de humo, jardín, wifi gratis en todo el alojamiento y salón de uso común. El alojamiento está a unos 46 km de Estadio El Campín, a 11 km de Parque Jaime Duque y a 32 km de Parque Deportivo 222. El alojamiento dispone de cocina compartida y recepción 24 horas.
        Todas las unidades de este alojamiento están equipadas con TV con canales por cable. En el hostal o pensión, todas las habitaciones disponen de ropa de cama y toallas.
      </p>
      
      {/* Galería de imágenes convertida en Slider (Carrusel) */}
      <div id="imageCarousel" className="carousel slide m-4" data-bs-ride="carousel" data-bs-interval="2000">
        <h3 className="text-center mb-4">Galería de Imágenes</h3>

        {/* Indicadores del carrusel */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        {/* Contenido del carrusel */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img 
              src={alma} 
              alt="Imagen 1" 
              className="d-block w-100 img-fluid rounded" 
            />
          </div>
          
          {/* Slide 2 */}
          <div className="carousel-item">
            <img 
              src={alma1} 
              alt="Imagen 2" 
              className="d-block w-100 img-fluid rounded" 
            />
          </div>
          
          {/* Slide 3 */}
          <div className="carousel-item">
            <img 
              src={alma2} 
              alt="Imagen 3" 
              className="d-block w-100 img-fluid rounded" 
            />
          </div>
          
          {/* Slide 4 */}
          <div className="carousel-item">
            <img 
              src={alma4} 
              alt="Imagen 4" 
              className="d-block w-100 img-fluid rounded" 
            />
          </div>
          
          {/* Slide 5 */}
          <div className="carousel-item">
            <img 
              src={alma5} 
              alt="Imagen 5" 
              className="d-block w-100 img-fluid rounded" 
            />
          </div>
        </div>

        {/* Controles de navegación */}
        <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <a href="https://www.booking.com/hotel/co/zipa-hostel.es.html?aid=304142&group_adults=2&group_children=0&label=gen173nr-1BCAsoMkILemlwYS1ob3N0ZWxIM1gEaEaIAQGYAQq4ARjIAQzYAQHoAQGIAgGoAgS4Araei64GwAIB0gIkOTJmMzMxNGItYWZiMi00Njk3LWFmYTItOTcyNjQyZWFiNWQ22AIF4AIB-Share-RTbPbF%401707265852&no_rooms=1" target="_blank" rel="noopener noreferrer">
        <button className='btn btn-success'>Agendar</button>
      </a>

      <div className="d-flex justify-content-center align-items-center mt-1 gap-3">
        <a href="https://wa.me/573226405203" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/zipahostel/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};

export default Capitulo1;
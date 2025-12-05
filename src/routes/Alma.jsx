import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alma = () => {
  return (
    <div className="d-flex flex-column align-items-center alma1">
      <h1 className="text-center mt-5 text-uppercase fw-bold">Alma Coffee Bakery</h1>
      <img 
        src="/image/almalogo.jpg" 
        alt="alma logo" 
        className="mt-3 mb-3 rounded" 
        style={{ width: '80%', maxHeight: '300px', objectFit: 'cover' }} 
      />
      <p className="text-justify px-4" style={{ textAlign: 'justify' }}>
        Alma Coffee & Bakery / Café - Bar - Pastelería
        NUEVO PUNTO
        🌿Calle 5#13-40 Algarra 2, casa roja esquinera🌱
        Fabricamos experiencias ✨
        Catering - Brunch 🧇🥂
        Mar-Sab: 3 - 10pm
        Dom-Fes: 2pm - 9pm
      </p>

      <div className="d-flex justify-content-center mb-4">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7359.019797099517!2d-74.00812246033642!3d5.0236957174726875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40711de93d5235%3A0x329d13e691bca4c7!2sALMA%20-%20Coffee%20%26%20Bakery!5e1!3m2!1ses!2sco!4v1729867567329!5m2!1ses!2sco" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* Galería de imágenes convertida en Slider (Carrusel) */}
      <div id="imageCarousel" className="carousel slide m-5" data-bs-ride="carousel" data-bs-interval="2000">
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
              src="/image/ALMA.jpg" 
              alt="Imagen 1" 
              className="d-block w-100 img-fluid rounded" 
            
            />
          </div>
          
          {/* Slide 2 */}
          <div className="carousel-item">
            <img 
              src="/image/alma1.jpg" 
              alt="Imagen 2" 
              className="d-block w-100 img-fluid rounded" 
            
            />
          </div>
          
          {/* Slide 3 */}
          <div className="carousel-item">
            <img 
              src="/image/alma2.jpg" 
              alt="Imagen 3" 
              className="d-block w-100 img-fluid rounded" 
            
            />
          </div>
          
          {/* Slide 4 */}
          <div className="carousel-item">
            <img 
              src="/image/alma4.jpg" 
              alt="Imagen 4" 
              className="d-block w-100 img-fluid rounded" 
          
            />
          </div>
          
          {/* Slide 5 */}
          <div className="carousel-item">
            <img 
              src="/image/alma5.jpg" 
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

      <div className="d-flex justify-content-center align-items-center mt-1 gap-3">
        <a href="https://wa.me/+573222504227" target="_blank" rel="noopener noreferrer">
          <img src="/image/whastapp.svg" alt="WhatsApp" width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/almacoffeebakery/" target="_blank" rel="noopener noreferrer">
          <img src="/image/instagram.png" alt="Instagram" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};

export default Alma;

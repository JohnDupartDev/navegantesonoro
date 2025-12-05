import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import Historia from "../routes/historia"


const RutaSonora = () => {
  return (


    
    <div className="ruta-container">
         <Historia />
      {/* Título principal */}
      <h1 className="ruta-title">Mapa Ruta Sonora</h1>
      

      {/* Imagen del mapa */}
      <div className="mapa-section">
        <img
          src="image/mapars.jpg"
          alt="Ruta Sonora"
          className="mapa-imagen"
        />
        <div className="lugares-section">
        <ul className="ruta-list">
          <li className="ruta-item">
            <div className="ruta-number">1</div>
            <div className="ruta-info">
              <strong>Estación del Ferrocarril Tres Esquinas</strong> <br />
              Carrera 11 #4-00
            </div>
          </li>
          <li className="ruta-item">
            <div className="ruta-number">2</div>
            <div className="ruta-info">
              <strong>Casa de las Navas</strong> <br />
              Centro cultural y de comercio. <br />
              Cra. 9 #4-28
            </div>
          </li>
          <li className="ruta-item">
            <div className="ruta-number">3</div>
            <div className="ruta-info">
              <strong>Complejo histórico central</strong> <br />
              - Palacio Municipal (Carrera 7 #4-11). <br />
              - Catedral Diocesana (Calle 5 #7-51). <br />
              - Antigua Administración de Salinas (Calle 5 #7-70). <br />
              - Casa de los Virreyes (Carrera 7 #3-63).
            </div>
          </li>
          <li className="ruta-item">
            <div className="ruta-number">4</div>
            <div className="ruta-info">
              <strong>Casa del Chorro – Habrá Francachela</strong> <br />
              - Calle 5 #5-32. <br />
              - Iglesia Nuestra Señora de Los Dolores (Carrera 4 #4-11). <br />
              - Plaza de la Independencia (Calle 5 #4-30).
            </div>
          </li>
          <li className="ruta-item">
            <div className="ruta-number">5</div>
            <div className="ruta-info">
              <strong>Antiguo Horno de sal, actualmente Triada Restaurante</strong> <br />
              Calle 1 #9-79.
            </div>
          </li>
          <li className="ruta-item">
            <div className="ruta-number">6</div>
            <div className="ruta-info">
              <strong>Catedral de Sal de Zipaquirá</strong>
            </div>
          </li>
        </ul>
      </div>
        {/* Mapa interactivo */}
        <div className="ruta-imagen-container">
          <img
            src="image/imgmapars.jpg" // Cambia esta ruta por la imagen que desees mostrar
            alt="Imagen Mapa"
            className="mapa-imagen-interactiva"
          />
          <a
            href="https://maps.app.goo.gl/2e1HSTKAiY5rNzEE9"
            target="_blank"
            rel="noopener noreferrer"
            className="mapa-link"
          >
            <div className="mapa-texto">
              Toca para ver la ruta
            </div>
          </a>
        </div>
      </div>
   

      <section className="historia-section">
          <div className="historia-button-container">
            <Link to="/" className="historia-home-button">
              Volver
            </Link>
          </div>
        </section>
      
    </div>
  );
};

export default RutaSonora;

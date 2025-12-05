import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const Historia = () => {
  return (
    <div className="historia-container">
      {/* Título principal */}
      <header className="historia-header">
        <h1 className="historia-title">
          Historia Ruta Sonora <br />
          <span className="historia-subtitle">
          
          </span>
        </h1>
      </header>

      {/* Contenido principal */}
      <div className="historia-content">
        {/* Sección Sinopsis */}
        <section className="historia-section">
          <h2 className="historia-section-title">Sinopsis</h2>
          <div className="historia-flex">
            <img
              src="/image/signosis.jpg" // Cambia esta ruta a la de tu imagen
              alt="Portada Ruta Sonora"
              className="historia-image"
            />
            <p className="historia-text">
              Déjate guiar por personajes como Luisa –una estudiante rebelde– y
              Antonio –un artista zipaquireño enamorado de la vida–, quienes a
              partir de su historia de amor ambientada en el año 1957 te
              mostrarán la esencia cultural, patrimonial y artística de
              Zipaquirá. Alista tus audífonos y atrévete a viajar en el tiempo.
            </p>
          </div>
        </section>

        {/* Sección Storyline */}
        <section className="historia-section">
          <h2 className="historia-section-title">Storyline</h2>
          <div className="historia-flex">
            <img
              src="/image/caricatura-navegante.png" // Cambia esta ruta a la de tu imagen
              alt="Ilustración Storyline"
              className="historia-image"
            />
            <p className="historia-text">
              Una estudiante rebelde es obligada por su familia a viajar a
              Zipaquirá en el año 1957. En su llegada ve a un joven artista en
              la Estación del Tren, por quien siente una atracción inmediata.
              Los acontecimientos del viaje frenan la posibilidad de que puedan
              conocerse. Sin embargo, ella está decidida a encontrarlo. Las
              festividades del lugar posibilitan el encuentro, pero los sucesos
              políticos limitan el desarrollo de esta historia de amor.
            </p>
          </div>
        </section>

        {/* Sección Tagline */}
        <section className="historia-section">
          <h2 className="historia-section-title">Tagline</h2>
          <img
              src="/image/libros-nso.png" // Cambia esta ruta a la de tu imagen
              alt="Ilustración Storyline"
              className="historia-image"
            />
          <p className="historia-tagline">
            El podcast que une a Zipaquirá, su turismo patrimonial y el amor.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Historia;

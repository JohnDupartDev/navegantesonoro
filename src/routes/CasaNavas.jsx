import { useState } from 'react'; // Importamos useState para manejar el estado de las imágenes.
import '../../src/index.css';
import RutaCasa from '../assets/component/RutaCasa.jsx';

function CasaNavas() {
  // 👉 RUTA MAESTRA DE CLOUDINARY (v1774739204)
  const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774739204/";

  // Creamos un estado para la imagen activa en el slider.
  const [currentImage, setCurrentImage] = useState(0);
  
  // Lista de imágenes que estarán en el slider desde Cloudinary
  const images = [
    `${cloudPath}cafe.jpg`,
    `${cloudPath}capitulo2.jpg`,
  ];

  // Función para cambiar la imagen al siguiente
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Función para cambiar la imagen a la anterior
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div id="ar-div">
        <div className="conteiner-btnstarts"></div>
        <div id="ar-conteiner">
          <div id="ardiv">
            <div className="imgscaner">
              <h5 className="esc">Escanea una de estas imagenes o objetos fisicos y sumérgete en un universo sonoro</h5>
            </div>
            {/* Slider de imágenes */}
            <div className="slider-container">
              <img className="img-scanner" src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
              <button className="prev-btn" onClick={prevImage}>
                ←
              </button>
              <button className="next-btn" onClick={nextImage}>
                →
              </button>
            </div>
          </div>
          <div className="spin">
            <div id="spinner" className="spinner-border" role="status"></div>
          </div>
          <RutaCasa />
        </div>
        <a
          href="https://navegantesonoro.com/"
          className="btn "
          id="volver"
        >
          <img
            src={`${cloudPath}back.svg`} // Ruta actualizada a Cloudinary
            alt="Icono"
            style={{ width: '12px', height: '12px', marginRight: '5px' }} // Ajusta el tamaño y espaciado
          />
          VOLVER
        </a>
      </div>
      <div className="containerstar">
        <a
          id="starts"
          href="https://navegantesonoro.com/"
          rel="noopener noreferrer"
        >
          Detener
        </a>
      </div>
    </>
  );
}

export default CasaNavas;
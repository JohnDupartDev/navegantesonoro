import { useState } from 'react'; // Importamos useState para manejar el estado de las imágenes.
import RutaEstacion from '../assets/component/RutaEstacion.jsx';
import '../../src/index.css';

// 👉 IMPORTAR IMÁGENES DESDE ASSETS
import capitulo1Ventana from '../assets/image/capitulo1_ventana.jpg';
import backIcon from '../assets/image/back.svg';

function EstacionDelTren() {
  // Creamos un estado para la imagen activa en el slider.
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imágenes que estarán en el slider
  const images = [
    capitulo1Ventana,
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
              <h5 className="esc">
                Escanea una de estas imágenes u objetos físicos y sumérgete en un universo sonoro.
              </h5>
            </div>

            {/* Slider de imágenes */}
            <div className="slider-container ">
              <img
                className="img-scanner"
                src={images[currentImage]}
                alt={`Imagen ${currentImage + 1}`}
              />
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

          <RutaEstacion />
        </div>

        <a
          href="https://navegantesonoro.com/"
          className="btn btn-outline-warning"
          id="volver"
        >
          <img
            src={backIcon}
            alt="Icono"
            style={{ width: '12px', height: '12px', marginRight: '5px' }}
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

export default EstacionDelTren;

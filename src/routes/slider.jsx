import React, { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaRoute } from 'react-icons/fa'; // Importa los iconos
import '../index.css'; // Archivo CSS donde tienes .blurred

export default function Slider() {
  // Definimos las rutas constantes apuntando a la carpeta public/images/
  const path = "/images/";

  const aplicarDesenfoque = () => {
    const elementosDesenfocados = document.querySelectorAll('.imglogo, #startButton, .textline, .aliados, .bienvenidos');
    elementosDesenfocados.forEach(elemento => {
      elemento.classList.add('blurred');
    });
  };

  useEffect(() => {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
      }
    };
  }, []);

  const handleModalHidden = () => {
    const elementosDesenfocados = document.querySelectorAll('.imglogo, #startButton, .textline, .aliados, .bienvenidos ');
    elementosDesenfocados.forEach(elemento => {
      elemento.classList.remove('blurred');
    });
  };

  return (
    <div className="container-slider">
      <button
        type="button"
        id="startButton"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={aplicarDesenfoque}
      >
         <div className='iconhome'>
         <FaRoute />
       </div>
        Ruta Sonora
      </button>

      <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered justify-content-center">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header ">
                <p className="fw-light">Ruta Sonora</p>
                <button type="button" className="btn-close btn btn-light" data-bs-dismiss="modal" aria-label=""></button>
              </div>

              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                  {/* Estación 1 */}
                  <div className="carousel-item active">
                    <div className="card text-white">
                      <img src={`${path}estacion.jpg`} className="card-img-top" alt="Estación Tres Esquinas" />
                      <div className="card-body">
                        <h5 className="card-title ">CAPÍTULO 1. ESTACIÓN DEL FERROCARRIL TRES ESQUINAS</h5>
                        <p className="card-text">Luisa es obligada por su familia a viajar a Zipaquirá. A su llegada, siente una atracción por un artista que vio en la Estación del Tren. </p>
                        <Link to="https://navegantesonoro.com/estaciondeltren" className="btn btn-outline-warning"> 
                          Escuchar <img src={`${path}audio.svg`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Estación 2 */}
                  <div className="carousel-item">
                    <div className="card text-white">
                      <img src={`${path}casanavas.jpg`} className="card-img-top" alt="Estación Candelaria" />
                      <div className="card-body">
                        <h5 className="card-title">CAPÍTULO 2. CASA DE LAS NAVAS</h5>
                        <p className="card-text">Antonio se dirige al encuentro con sus amigos en el centro de Zipaquirá, y demuestra su tristeza por no haber podido hablar con la mujer de la Estación del Tren.</p>
                        <Link to="https://navegantesonoro.com/casanavas" className="btn btn-outline-warning"> 
                          Escuchar <img src={`${path}audio.svg`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Estación 3 */}
                  <div className="carousel-item">
                    <div className="card text-white">
                      <img src={`${path}plaza.jpg`} className="card-img-top bgcover" alt="Estación del Sur" />
                      <div className="card-body">
                        <h5 className="card-title">CAPÍTULO 3. PLAZA PRINCIPAL</h5>
                        <p className="card-text">Llega el domingo y con él la Santa Misa y la retreta ambientada en este lugar. Antonio está listo para tocar con la Banda Municipal. Las sorpresas no se harán esperar.</p>
                        <Link to="https://navegantesonoro.com/comprar" className="btn btn-outline-warning">
                          Comprar<img src={`${path}dinero.png`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Estación 4 */}
                  <div className="carousel-item">
                    <div className="card text-white">
                      <img src={`${path}independencia.jpg`} className="card-img-top" alt="Estación Central" />
                      <div className="card-body">
                        <h5 className="card-title">CAPÍTULO 4. PLAZA DE LA INDEPENDENCIA E IGLESIA DE NUESTRA SEÑORA DE LOS DOLORES</h5>
                        <p className="card-text">Todo está listo para el reencuentro entre Luisa y Antonio en el punto más alto del centro histórico de Zipaquirá.</p>
                        <Link to="https://navegantesonoro.com/comprar" className="btn btn-outline-warning">
                          Comprar<img src={`${path}dinero.png`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Estación 5 */}
                  <div className="carousel-item">
                    <div className="card text-white">
                      <img src={`${path}funzipa.jpg`} className="card-img-top" alt="Estación El Dorado" />
                      <div className="card-body">
                        <h5 className="card-title">CAPÍTULO 5. ANTIGUO HORNO TRADICIONAL DE SAL</h5>
                        <p className="card-text">Luisa no puede escapar de los acontecimientos políticos y económicos que vive Zipaquirá. Tendrá que decidir entre sus dos amores.</p>
                        <Link to="https://navegantesonoro.com/comprar" className="btn btn-outline-warning">
                          Comprar<img src={`${path}dinero.png`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Estación 6 */}
                  <div className="carousel-item">
                    <div className="card text-white">
                      <img src={`${path}catedral.jpg`} className="card-img-top" alt="Estación del Norte" />
                      <div className="card-body">
                        <h5 className="card-title">CAPÍTULO 6. ALREDEDORES PARQUE DE LA SAL</h5>
                        <p className="card-text">La verdad es revelada. Luisa y Antonio se enfrentan a sus mayores miedos.</p>
                        <Link to="https://navegantesonoro.com/comprar" className="btn btn-outline-warning">
                          Comprar<img src={`${path}dinero.png`} style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} alt="Icono" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <FaChevronLeft style={{ color: 'white', width:'25px', height:'25px', background:'black', padding:'2px', borderRadius: '40px'}} /> 
                  <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <FaChevronRight style={{ color: 'white', width:'25px', height:'25px', background:'black', padding:'2px', borderRadius: '40px'}} /> 
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
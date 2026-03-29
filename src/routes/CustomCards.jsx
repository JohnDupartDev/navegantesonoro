import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import { Link } from 'react-router-dom';

const CustomCards = () => {
  // 👉 RUTA MAESTRA DE CLOUDINARY (v1774738156)
  // Usamos f_auto y q_auto para que estas fotos de fondo carguen instantáneamente
  const path = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

  return (
    <div className="container px-1 " id="custom-cards">
      <h2 className="h2 text-start pb-2 ">Ruta Sonora</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 mb-4">
        {/* Tarjeta 1 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}estacion.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold ">Estación del tren Tres Esquinas</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo1" className="btn btn-warning d-flex align-items-center text-white" rel="noopener noreferrer">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 1</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}casanavas.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">Casa de las Navas</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo2" className="btn btn-warning d-flex align-items-center text-white">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 2</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}plaza.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">Plaza Principal o Plaza de los Comuneros</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo3" className="btn btn-warning d-flex align-items-center text-white">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 3</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}independencia.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">Plaza de la Independencia e Iglesia de Nuestra Señora de los Dolores</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo4" className="btn btn-warning d-flex align-items-center text-white">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 4</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}funzipa.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">Antiguo Horno de Sal</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo5" className="btn btn-warning d-flex align-items-center text-white">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 5</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${path}catedral.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit"
              }}
            />
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 z-3">
              <h3 className="pt-5  mb-4 display-6 lh-1 fw-bold">Parque de la Sal - Catedral de Sal</h3>
              <ul className="d-flex list-unstyled mt-auto align-items-center">
                <li className="me-auto">
                  <a href="https://navegantesonoro.com/Capitulo6" className="btn btn-warning d-flex align-items-center text-white">
                    Ver Aliados
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3 text-warning">
                  <small>Capítulo 6 </small>
                </li>
              </ul>
            </div>
          </div>
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

export default CustomCards;
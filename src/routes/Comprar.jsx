import { Link } from 'react-router-dom'; // Importa Link para navegación

const Comprar = () => {
  // Datos de cada capítulo
  const capitulos = [
    {
      imagen: '/images/comprobante.jpg',
    
      descripcion: 'Luego de realizar el pago, envíanos tu comprobante de la transacción exitosa para tener acceso a tu cuenta de Navegante Sonoro.',
      enlace:'https://wa.me/573243314035?text=¡Hola! Envío mi comprobante de pago para acceder a la ruta sonora.',  // Enlace directo a WhatsApp con el número proporcionado
      enlaceComprobante: 'https://wa.me/573243314035?text=¡Hola! Envío mi comprobante de pago para acceder a la ruta sonora.' // Segundo enlace para enviar el comprobante
    },
  ];

  return (
    <div className="miCuenta-container">
      <div className="titlecomprasonoro">
        {/* Encabezados h1 y h2 */}
        <h1 className="miCompra-mainTitle">
          RUTA DE COMPRA
        </h1>
      </div>

      {/* Imagen debajo del título */}
      <div className="image-container d-flex justify-content-center mb-2">
        <img 
          src="/images/nedavi.jpg" 
          alt="Ruta Sonora" 
          className="img-fluid rounded" 
          style={{ maxWidth: '300px' }} 
        />
      </div>

      {/* Parrafo de información */}
      <div>
        <p className="text-white text-justify ">
        Adquiere la Ruta Sonora de forma fácil y rápida. Escanea nuestro código QR de Navegante Sonoro directamente desde tu app móvil de Nequi o Daviplata. Vive una experiencia única con audios inmersivos y realidad aumentada en cada estación de la Ruta Sonora.</p>
      </div>

      {/* Divs con imágenes para QR */}
      <div className="row justify-content-center mt-4 align-items-center">
        <div className="col-12 col-md-6">
          <p className="text-center text-white">Abre tu aplicación de Nequi y escanea este código</p>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img 
              src="/images/nequilaura.jpg" 
              alt="QR Nequi" 
              className="img-fluid rounded mb-4" 
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <p className="text-center text-white">Abre tu aplicación de Daviplata y escanea este código</p>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img 
              src="/images/daviplata.jpg" 
              alt="QR Daviplata" 
              className="img-fluid rounded" 
            />
          </div>
        </div>
      </div>

      {/* Lista de capítulos */}
      {capitulos.map((capitulo, index) => (
        <div key={index} className="miCuenta-card">
          <div className="divcard">
            <div className="miCuenta-imageContainer">
              {/* Enlace a WhatsApp */}
              <a href={capitulo.enlace} target="_blank" rel="noopener noreferrer">
                <img 
                  src={capitulo.imagen} 
                  alt={`Imagen del comprobante`} 
                  className="miCuenta-image" 
                />
              </a>
            </div>
            <div className="miCuenta-content">
              <p className="miCuenta-description">{capitulo.descripcion}</p>

              {/* Segundo enlace debajo de la descripción */}
              <div className="text-center m-0">
                <a href={capitulo.enlaceComprobante} target="_blank" rel="noopener noreferrer" className=" fs-6 btn btn-success">
                  Enviar Comprobante 
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botón para volver al Home */}
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

export default Comprar;
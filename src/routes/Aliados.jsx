import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCards from './CustomCards';

const Hero = () => {
  // 👉 RUTA MAESTRA QUE YA FUNCIONA (v1774738156)
  // Sin carpetas intermedias para evitar el error 404 que vimos en consola
  const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/v1774738156/";
  
  const ondasSvg = `${cloudPath}ondas.svg`;
  const imgAliados = `${cloudPath}img_aliados.jpg`;

  // Estilos en objeto para mantener el código limpio y simular clases de CSS-in-JS
  const styles = {
    container: {
      // Degradado sutil estilo iOS Dark Mode (no negro plano)
      background: 'linear-gradient(180deg, #1c1c1e 0%, #000000 100%)',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      paddingBottom: '20px',
      color: '#f5f5f7' // Blanco hueso (menos agresivo a la vista)
    },
    title: {
      fontWeight: '700',
      letterSpacing: '-0.5px', // Kerning estilo Apple
      marginBottom: '10px',
    },
    imageContainer: {
      position: 'relative',
      margin: '20px auto 30px auto',
      maxWidth: '600px' // Límite para que no se vea gigante en desktop
    },
    mainImage: {
      width: '100%',
      borderRadius: '24px', // Radio de borde estándar iOS moderno
      boxShadow: '0 10px 40px rgba(0,0,0,0.5)', // Sombra difuminada para elevación
      objectFit: 'cover'
    },
    description: {
      color: '#a1a1a6', // Gris secundario de iOS para textos largos
      fontSize: '1.05rem',
      lineHeight: '1.5',
      fontWeight: '400',
      maxWidth: '500px'
    },
    bgPattern: {
        backgroundImage: `url(${ondasSvg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3, // Hacemos las ondas sutiles para no distraer
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
    },
    contentZIndex: {
        position: 'relative',
        zIndex: 1
    }
  };

  return (
    <div style={styles.container}>
      {/* Capa de fondo separada para controlar opacidad de las ondas */}
      <div style={styles.bgPattern}></div>

      <div className="container px-4 py-5" style={styles.contentZIndex}>
        
        {/* Encabezado semántico y limpio */}
        <div className="text-center">
            <h1 className="display-5" style={styles.title}>Aliados</h1>
        </div>

        {/* Imagen Principal */}
        <div style={styles.imageContainer}>
          <img
            className="d-block mx-auto"
            src={imgAliados}
            alt="Aliados de la Ruta Sonora"
            style={styles.mainImage}
          />
        </div>

        {/* Descripción */}
        <div className="mx-auto text-center" style={{ marginBottom: '40px' }}>
          <p style={styles.description} className="mx-auto">
            Descubre los mejores restaurantes, cafés y hoteles de Zipaquirá. 
            Disfruta de <span className="text-white fw-bold">descuentos exclusivos</span> y vive la Ruta Sonora con beneficios especiales.
          </p>
        </div>

        {/* Sección de Tarjetas */}
        <CustomCards />
      </div>
    </div>
  );
};

export default Hero;
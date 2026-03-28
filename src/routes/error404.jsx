// Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  // Estilos siguiendo la línea de diseño Apple/iOS Dark de Navegante Sonoro
  const styles = {
    container: {
      background: 'linear-gradient(180deg, #1c1c1e 0%, #000000 100%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#f5f5f7'
    },
    errorCode: {
      fontSize: '8rem',
      fontWeight: '800',
      margin: '0',
      background: 'linear-gradient(180deg, #ffc107 0%, #ff9800 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginTop: '20px',
      maxWidth: '300px',
      lineHeight: '1.3'
    },
    description: {
      color: '#a1a1a6',
      fontSize: '1rem',
      marginTop: '10px',
      marginBottom: '40px',
      maxWidth: '280px'
    },
    button: {
      background: '#ffc107',
      color: '#000',
      padding: '12px 30px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '1rem',
      boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
      transition: 'transform 0.2s ease'
    }
  };

  return (
    <div style={styles.container} className='error404'>
      {/* Código de error visual */}
      <h1 style={styles.errorCode}>404</h1>
      
      {/* Mensaje de error */}
      <h2 style={styles.title}>
        Upps, parece que lo que estás buscando no existe.
      </h2>
      
      <p style={styles.description}>
        Es posible que la dirección sea incorrecta o que la página se haya movido.
      </p>

      {/* Botón de retorno con tu ID original */}
      <Link id="volvereror" to='/' style={styles.button}>
        Volver al Inicio
      </Link>

      {/* Marca de agua sutil en el pie */}
      <div style={{ position: 'absolute', bottom: '30px', opacity: 0.3, fontSize: '0.8rem' }}>
        Navegante Sonoro ®
      </div>
    </div>
  );
};

export default Error404;
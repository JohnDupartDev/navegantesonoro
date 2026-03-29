// Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  const styles = {
    container: {
      background: 'linear-gradient(180deg, #0f0f1a 0%, #000000 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      overflow: 'hidden'
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '320px',
      width: '100%',
      gap: '16px', // 🔥 separa TODO automáticamente
      position: 'relative',
      zIndex: 1
    },

    ring: {
      position: 'absolute',
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(140,82,255,0.25) 0%, transparent 70%)',
      filter: 'blur(30px)',
      zIndex: 0
    },

    errorCode: {
      fontSize: 'clamp(4rem, 18vw, 7rem)',
      fontWeight: '800',
      margin: '0',
      background: 'linear-gradient(180deg, #a855f7 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },

    title: {
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      fontWeight: '600',
      color: '#f5f5f7',
      lineHeight: '1.4'
    },

    description: {
      color: '#b3b3cc',
      fontSize: '0.95rem',
      lineHeight: '1.4'
    },

    button: {
      marginTop: '10px', // 🔥 asegura que nunca se monte
      background: 'linear-gradient(135deg, #a855f7, #6d28d9)',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '40px',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '0.95rem',
      boxShadow: '0 6px 20px rgba(168, 85, 247, 0.5)',
      width: '100%',
      maxWidth: '220px'
    },

    footer: {
      position: 'absolute',
      bottom: '20px',
      fontSize: '0.7rem',
      opacity: 0.3,
      color: '#fff'
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.ring}></div>

      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>

        <h2 style={styles.title}>
          Upps, parece que lo que estás buscando no existe.
        </h2>

        <p style={styles.description}>
          Es posible que la dirección sea incorrecta o que la página se haya movido.
        </p>

        <Link to="/" style={styles.button}>
          Volver al Inicio
        </Link>
      </div>

      <div style={styles.footer}>
        Navegante Sonoro ®
      </div>
    </div>
  );
};

export default Error404;
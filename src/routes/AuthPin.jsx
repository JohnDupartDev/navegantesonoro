import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthPin = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0); // Contador de intentos fallidos
  
  // Lista de PINs válidos
  const validPins = ['1234', '5678', '91011', '2345', '6789', '11223', '4455', '8899', '10101', '2222', 
    '3333', '4444', '5555', '6666', '7777', '8888', '9999', '0000', '1111', '3334',
    '2211', '7458', '1112', '9863', '1235', '3345', '5679', '9876', '3434', '4357',
    '2011', '3245', '2229', '4556', '1001', '6678', '8945', '9843', '1467', '2310',
    '7489', '6587', '5264', '8523', '2147', '3856', '9456', '7413', '9871', '9845',
    '5643', '3478', '9751', '3124', '1579', '8832', '7612', '5690', '3147', '1286',
    '2349', '8765', '1121', '4421', '6012', '7089', '9123', '8745', '3221', '1876',
    '4790', '3567', '2905', '8642', '5762', '4321', '7653', '4567', '1369', '5427',
    '7613', '2468', '3579', '5790', '9853', '6219', '6541', '1230', '4673', '9374']; 
  
  const navigate = useNavigate(); // Usamos React Router para redirigir al usuario

  const PIN_EXPIRATION_TIME = 15 * 24 * 60 * 60 * 1000; // 15 días en milisegundos (1,296,000,000 ms)

  // Recuperar los PINs utilizados desde localStorage
  const getUsedPins = () => {
    const usedPins = localStorage.getItem('usedPins');
    return usedPins ? JSON.parse(usedPins) : [];
  };

  // Marcar un PIN como utilizado
  const markPinAsUsed = (pin) => {
    const usedPins = getUsedPins();
    usedPins.push(pin); // Añadir el PIN al array de usados
    localStorage.setItem('usedPins', JSON.stringify(usedPins)); // Guardar el array actualizado
  };

  // Guardar la fecha de caducidad del PIN en sessionStorage
  const setExpiration = () => {
    const expirationTime = new Date().getTime() + PIN_EXPIRATION_TIME;
    sessionStorage.setItem('expiration', new Date(expirationTime).toISOString());
  };

  // Verificación de caducidad de la sesión y el PIN
  useEffect(() => {
    const storedAttempts = sessionStorage.getItem('attempts');
    const storedExpiration = sessionStorage.getItem('expiration');
    const storedAuthenticated = sessionStorage.getItem('authenticated');

    if (storedAuthenticated === 'true' && storedExpiration) {
      const expirationTime = new Date(storedExpiration).getTime();
      const currentTime = new Date().getTime();

      // Si el tiempo actual es mayor que la fecha de caducidad, redirigimos al login
      if (currentTime > expirationTime) {
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('expiration');
        sessionStorage.removeItem('usedPins'); // Limpiar los PINs usados
        setError('Tu sesión ha caducado, por favor ingresa nuevamente.');
        navigate('/AuthPin'); // Redirige a la página de login
      }
    }

    // Si hay intentos previos, cargarlos
    if (storedAttempts) {
      setAttempts(Number(storedAttempts));
    }
  }, [navigate]);

  // Guardar intentos de inicio de sesión en sessionStorage
  useEffect(() => {
    if (attempts > 0) {
      sessionStorage.setItem('attempts', attempts);
    }
  }, [attempts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si ya hemos alcanzado 3 intentos fallidos, redirigimos al inicio
    if (attempts >= 3) {
      navigate('/'); // Redirige a la página de inicio
      return;
    }

    // Verificar si el PIN ya ha sido utilizado
    const usedPins = getUsedPins();
    if (usedPins.includes(pin)) {
      setError('Este PIN ya ha sido utilizado. Por favor, utiliza otro.');
      return;
    }

    if (validPins.includes(pin)) {
      // Si el PIN es válido, guardamos en sessionStorage y redirigimos a "Mi Cuenta"
      sessionStorage.setItem('authenticated', 'true');

      // Establecer la fecha de caducidad (5 minutos desde la autenticación)
      setExpiration();

      // Marcar el PIN como utilizado
      markPinAsUsed(pin);

      setAttempts(0); // Resetear el contador de intentos fallidos
      navigate('/miCuenta'); // Redirige a la página "Mi Cuenta"
    } else {
      // Si el PIN es incorrecto, incrementamos el contador de intentos
      setAttempts(prevAttempts => prevAttempts + 1);
      setError(`PIN incorrecto. Intentos restantes: ${3 - attempts - 1}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img src="/image/LOGONS.svg" alt="Logo" className="auth-logo" />
        <h2>Bienvenid@</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Ingresa el PIN"
            maxLength="4"
            required
            className="auth-input"
          />
          <button type="submit" className="auth-button">Acceder</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      <section className="historia-section">
        <div className="historia-button-container">
          <Link to="/" className="historia-home-button"> Volver</Link>
          <Link to="/comprar" className="btn btn-success">
            Comprar
          </Link> 
        </div>
      </section>
    </div>
  );
};

export default AuthPin;

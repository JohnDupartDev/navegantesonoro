import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos React Router para redirigir
import { Link } from 'react-router-dom'; // Importa Link para navegación
import Estacionesar from '../routes/Estacionesar';



const MiCuenta = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si la sesión ha caducado
    const storedExpiration = sessionStorage.getItem('expiration');
    const currentTime = new Date().getTime();

    if (storedExpiration) {
      const expirationTime = new Date(storedExpiration).getTime();
      if (currentTime > expirationTime) {
        // Si ha caducado, eliminar los datos de autenticación y redirigir
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('expiration');
        sessionStorage.removeItem('usedPins'); // Limpiar los PINs usados
        navigate('/AuthPin'); // Redirige al login si la sesión ha caducado
      }
    } else {
      // Si no hay sesión, redirigir al login
      navigate('/AuthPin');
    }
  }, [navigate]);

  // Datos de cada capítulo, incluyendo el archivo de audio
  const capitulos = [
    {
      imagen: '/image/imgc1.jpg',
      titulo: 'CAPÍTULO 1. ESTACIÓN DEL FERROCARRIL TRES ESQUINAS',
      descripcion: 'Luisa es obligada por su familia a viajar a Zipaquirá. A su llegada siente una atracción por un artista que vio en la Estación del Tren.',
      audio: '/audios/Capitulo_1.mp3', // Ruta del archivo de audio
    },
    {
      imagen: '/image/imgc2.jpg',
      titulo: 'CAPÍTULO 2. CASA DE LAS NAVAS',
      descripcion: 'Antonio se dirige al encuentro con sus amigos artistas en el centro de Zipaquirá, y demuestra su tristeza por no haber podido hablar con la mujer de la Estación del Tren.',
      audio: '/audios/Capitulo2.mp3', // Ruta del archivo de audio
    },
    {
      imagen: '/image/imgc3.jpg',
      titulo: 'CAPÍTULO 3. PLAZA PRINCIPAL',
      descripcion: 'Llega el domingo y con él la Santa Misa y la retreta ambientada en la Plaza Principal. Antonio está listo para tocar con la Banda Municipal. Las sorpresas no se harán esperar.',
      audio: '/audios/Capitulo3.mp3', // Ruta del archivo de audio
    },
    {
      imagen: '/image/imgc4.jpg',
      titulo: 'CAPÍTULO 4. PLAZA DE LA INDEPENDENCIA E IGLESIA DE NUESTRA SEÑORA DE LOS DOLORES',
      descripcion: 'Todo está listo para el reencuentro entre Luisa y Antonio en el punto más alto del centro histórico de Zipaquirá.',
      audio: '/audios/Capitulo4.mp3',
    },
    {
      imagen: '/image/imgc5.jpg',
      titulo: 'CAPÍTULO 5. ANTIGUO HORNO TRADICIONAL DE SAL',
      descripcion: 'Luisa no puede escapar de los acontecimientos políticos y económicos que vive Zipaquirá. Tendrá que decidir entre sus dos amores.',
      audio: '/audios/Capitulo5.mp3',
    },
    {
      imagen: '/image/imgc6.jpg',
      titulo: 'CAPÍTULO 6. ALREDEDORES PARQUE DE LA SAL',
      descripcion: 'La verdad es revelada. Luisa y Antonio se enfrentan a sus mayores miedos.',
      audio: '/audios/Capitulo6.mp3',
    },
  ];

  return (
    <div className="miCuenta-container">
      <div className='titlerutasonoro'>
        {/* Encabezados h1 y h2 */}
        <h1 className="miCuenta-mainTitle">
          RUTA SONORA
        </h1>
        <span className="resaltado">DE AMORES SALINEROS Y OTROS RELATOS ZIPAQUIREÑOS</span>
      </div>
      <h2 className="miCuenta-subTitle">CAPÍTULOS O EPISODIOS</h2>

      {/* Lista de capítulos */}
      {capitulos.map((capitulo, index) => (
        <div key={index} className="miCuenta-card">
          <div className='divcard'>
            <div className="miCuenta-imageContainer">
              <img src={capitulo.imagen} alt={`Imagen del ${capitulo.titulo}`} className="miCuenta-image" />
            </div>
            <div className="miCuenta-content">
              <h3 className="miCuenta-title">{capitulo.titulo}</h3>
              <p className="miCuenta-description">{capitulo.descripcion}</p>
            </div>
          </div>
          {/* Reproductor de audio al final de la tarjeta */}
          <audio controls className="miCuenta-audio">
            <source src={capitulo.audio} type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      ))}

      {/* Botón para volver al Home */}
      <section className="historia-section">
          <div className="historia-button-container">
          <Estacionesar/>
            <Link to="/" className="historia-home-button">
              Volver
            </Link>
          </div>
        </section>
    </div>
  );
};

export default MiCuenta;

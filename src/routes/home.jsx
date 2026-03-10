import Slider from './slider'
import { Link } from "react-router-dom"

// IMPORTANTE: Eliminamos el import de assets y usamos la ruta de public directamente
import { FaSignInAlt, FaBookReader, FaCommentDollar, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';

export default function index() {
  // Definimos la ruta del logo apuntando a la carpeta public
  const logoNavegantePath = "/images/logonavegante.svg";

  return (
    <div id="welcomeModal">
      <div id="modalContent">
        <div className="contenar">
          <a className="logo" href='https://navegantesonoro.com/'>
            <img 
              className='imglogo'            
              src={logoNavegantePath} // Usamos la ruta directa de public
              alt='logo_zipaquiardigital' 
              rel="noopener noreferrer"
            />
          </a>
        
          <p className="textline">
            Una experiencia única donde los sonidos cuentan historias. 
          </p>

          <div className="contenedorbotones">
            <div className="contenedor">
              {/* Botones con iconos */}
              <div className="boton">
                <div className='iconhome'>
                  <FaSignInAlt />
                </div>
                <div className='icontext'>
                  <Link id="startton" to="/micuenta">
                    <span>Mi Ruta</span>
                  </Link>
                </div>
              </div>

              <div className="boton">
                <div className='iconhome'>
                  <FaCommentDollar />
                </div>
                <Link id="startton" to="/comprar">
                  <span>Comprar</span>
                </Link>
              </div>

              <div className="boton">
                <div className='iconhome'>
                  <FaBookReader />
                </div>
                <Link id="startton" to="/comofunciona">
                  <span>¿Como funciona?</span>
                </Link>
              </div>

              <div className="boton">
                <div className='iconhome'>
                  <FaUsers />
                </div>
                <Link id="startton" to="/aliados">
                  <span>Aliados</span>
                </Link>
              </div>

              <div className="boton">
                <div className='iconhome'>
                  <FaMapMarkedAlt />
                </div>
                <Link id="startton" to="/mapa">
                  <span>Mapa</span>
                </Link>
              </div>
              
              <Slider/>
            </div>
          </div> 

          <div className="zip">
            <p className="text">®Desarrollado por Zipaquirá Digital</p>
            <div className="contenedorlink">
              <a className="link" href="https://wa.me/573195301551?text=Hola,%20Me%20gustaria%20saber%20mas%20sobre%20los%20servicios%." target='blank'> Contacto </a>
              <a className="link" href="https://zipaquiradigital.com/tarjetas-de-presentacion-con-realidad-aumentada-ar/" target='blank'> Página Web </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
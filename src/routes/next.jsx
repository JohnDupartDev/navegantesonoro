import { Link } from "react-router-dom"

export default function next(){
    // 👉 RUTA MAESTRA DE CLOUDINARY (v1774738156)
    const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

    return(
       
        <div className="container-firs">
            <div className="close">
                <Link className="x" to='/'>X</Link>
            </div>
            <div className="imgg">
                {/* Implementación de la ruta de Cloudinary para el SVG */}
                <img className="telefono" src={`${cloudPath}escaner.svg`} alt="Escaner AR" />
                
                <h1 className="hache1"> Escanea la imagen u objeto físico de la ruta seleccionada con tu dispositivo móvil.</h1>
                <h2 className="text-componet">
                    Disfruta de la experiencia sonora con Realidad Aumentada. Recuerda finalizar la experiencia con el botón detener luego de escanear la imagen.
                </h2>
            </div>
            <div className="btnnext">
                <Link className="nexts" to='/comofunciona'>Volver</Link>
                <Link className="nexts" to='/'>Ok</Link>
            </div>

        </div>
    )
}
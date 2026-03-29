import { Link } from "react-router-dom"

export default function comofunciona(){
    // 👉 RUTA MAESTRA DE CLOUDINARY (v1774738156)
    const cloudPath = "https://res.cloudinary.com/dcpgesnzc/image/upload/f_auto,q_auto/v1774738156/";

    return(
       
        <div className="container-firs">
            <div className="close">
                <Link className="x" to='/'>X</Link>
            </div>
            <div className="imgg">
                {/* Usamos la constante cloudPath para la imagen desde Cloudinary */}
                <img className="telefono" src={`${cloudPath}comofunciona1.png`} alt="Como funciona etapa 1" />
                
                <h1 className="hache1"> Presiona el botón Ruta Sonora</h1>
                <h2 className="text-componet">
                    que se encuentra en la pantalla principal, luego selecciona la estacion de la ruta que quieres escuchar.
                </h2>
            </div>
            <Link className="nexts" to='/next'>Siguiente 〉</Link>

        </div>
    )
}
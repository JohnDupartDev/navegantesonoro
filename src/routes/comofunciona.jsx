import { Link } from "react-router-dom"
export default function comofunciona(){

    return(
       
        <div className="container-firs">
            <div className="close">
            <Link className="x" to='/'>X</Link>
            </div>
            <div className="imgg">
            <img className="telefono" src="/image/comofunciona1.png" ></img>
            <h1 className="hache1"> Presiona el botón Ruta Sonora</h1>
            <h2 className="text-componet">que se encuentra en la pantalla principal, luego selecciona la estacion de la ruta que quieres escuchar.</h2>
            </div>
            <Link  className="nexts" to='/next'>Siguiente 〉</Link>

        </div>
    )
}
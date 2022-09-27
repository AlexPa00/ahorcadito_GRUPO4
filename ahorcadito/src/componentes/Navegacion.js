import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Inicio from "./Inicio";

class Navegacion extends React.Component{
    render(){
    return(
        <>
     <BrowserRouter>
        <div className="PaginaPrincipal">
            <h1 className="Titulo">AHORCADITO</h1>
            <nav>  
            <Link to ='/' className = "Boton" >Inicio</Link>
            <Link to ='/juego' className = "Boton" >Jugar</Link>
            <Link to ='/reglas' className = "Boton" >Reglas</Link>
            <Link to ='/desarrolladores' className = "Boton" >Desarrolladores</Link>
            </nav>
        </div>

        <Routes>
            <Route path = "/" element= {<Inicio/>}/>
            <Route path = "juego" element= {<Inicio/>}/>
            <Route path = "reglas" element= {<Inicio/>}/>
            <Route path = "desarrolladores" element= {<Inicio/>}/>
        </Routes>
     </BrowserRouter>
     </>
    )
}
}
export default Navegacion;

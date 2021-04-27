import React from "react";
import '../App.css';
// El componente tiene que estar en mayuscula la primera letra
export default function Prueba() { // nombre de la funcion igual a archivo
    return(
        <div className="App">
            <h1>Saludo</h1>
            <p>Hola amiguos</p>
            <button>Aceptar</button>
        </div>
    );
}
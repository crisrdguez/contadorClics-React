import React from "react";
import '../styles/Boton.css'


//normalmente se trabaja con esta sintaxis de desestructuración en vez de con props
function Boton({texto, esBotonDeClic, esBotonSuma, manejarClic}){
  return(
    <button className={ esBotonDeClic ? esBotonSuma ? "boton-sumar" : "boton-restar" : "boton-reiniciar" }
    onClick={manejarClic}
    >
      {texto}
    </button>
  );   
}

export default Boton;

/*
function Boton(props){
  return(
    <button>
      {props.texto}
    </button>
  );   
}*/
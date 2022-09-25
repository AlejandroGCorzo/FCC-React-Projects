import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotondeClick, manejarClick }) {
  return (
    <button
      className={esBotondeClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;

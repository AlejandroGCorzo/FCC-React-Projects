import React from "react";
import "../hojas-de-estilo/BotonClear.css";

const BotonErase = (props) => (
  <div className="boton-clear" onClick={props.manejarErase}>
    {props.children}
  </div>
);

export default BotonErase;

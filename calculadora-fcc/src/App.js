import React, { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";
import { evaluate } from "mathjs";
import Loguitox from "./componentes/LogoFCC";
import BotonErase from "./componentes/BotonErase.jsx";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    if (input === "Volvé a primer grado") setInput((v) => (v = ""));
    setInput((v) => v + valor);
  };

  const manejarErase = () => {
    if (input) {
      setInput((v) => String(v));
      setInput((v) => v.slice(0, -1));
    }
  };

  const calcularResultado = () => {
    // if (input) setInput(evaluate(input));
    // else setInput("E");}
    if (!input) setInput("Volvé a primer grado");
    try {
      if (input) setInput(evaluate(input));
    } catch {
      setInput("Volvé a primer grado");
    }
  };

  return (
    <div className="App">
      <Loguitox />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
          <BotonErase manejarErase={manejarErase}>←</BotonErase>
        </div>
      </div>
    </div>
  );
}

export default App;

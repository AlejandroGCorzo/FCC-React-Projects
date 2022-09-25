import "./App.css";
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  const sumarClick = () => {
    setClicks(clicks + 1);
  };

  const reiniciarContador = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecamplogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={clicks} />
        <Boton texto="Click" esBotondeClick={true} manejarClick={sumarClick} />
        <Boton
          texto="Reiniciar"
          esBotondeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

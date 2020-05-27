import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Fomulario';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGasto] = useState([]);

  const agregarNuevoGasto = (gasto) => {
    guardarGasto([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido contenido-principal">
          {mostarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

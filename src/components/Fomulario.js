import React, { useState } from 'react';
const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ej. transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input type="number" className="u-full-width" placeholder="ej. 300" />
      </div>
      <input type="submit" className="button-primary" value="Aregar gasto" />
    </form>
  );
};

export default Formulario;

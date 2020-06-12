import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

  const [nombre, guardarNombre] = useState('');
  const [cant, guardarCant] = useState(0);
  const [error, actualizarError] = useState(false);

  const agregarGasto = e =>{
    e.preventDefault();

    if(cant < 1 || isNaN(cant) || nombre.trim() === ''){
      //setea el error a true sino pasa la validacion
      actualizarError(true);
      return;
    }
    //vuelve el error a false
    actualizarError(false);
    //construir gastos
    const gasto = {
      nombre,
      cant,
      id: shortid.generate()
    }
    guardarCrearGasto(true);
    guardarGasto(gasto);
    //resetear Formulario
    guardarNombre('');
    guardarCant(0);
  }

  return(
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aqui</h2>
      {error ? <Error mensaje="Ingrese los datos correctos"/> : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={e => guardarNombre(e.target.value)}
          value={nombre} //para resetear el Form
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={e => guardarCant(parseInt(e.target.value))}
          value={cant}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
}

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;

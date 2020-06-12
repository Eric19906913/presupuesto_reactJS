import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPres, guardarRest, actualizarPreg}) =>{

  const [cant, guardarCant] = useState(0);
  const [error, guardarError] = useState(false);

  const definirCant = e =>{
    guardarCant(parseInt(e.target.value));
  }

  const agregarCant = e =>{
    e.preventDefault();

    if(cant < 1 || isNaN(cant)){
      guardarError(true);
      return;
    }
    guardarError(false);

    guardarPres(cant);
    guardarRest(cant);

    actualizarPreg(false);
  }

  return(
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto ingresado es incorrecto!"/> : null}
      <form
        onSubmit={agregarCant}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirCant}
         />
         <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
         />
      </form>
    </Fragment>

  );

}

Pregunta.propTypes = {
  guardarPres: PropTypes.func.isRequired,
  guardarRest: PropTypes.func.isRequired,
  actualizarPreg: PropTypes.func.isRequired
}

export default Pregunta;

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';


const ControlPresupuesto = ({pres, rest}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {pres}
      </div>
      <div className={revisarPresupuesto(pres, rest)}>
        Restante: $ {rest}
      </div>
    </Fragment>
  );
}

ControlPresupuesto.propTypes = {
  pres: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired
}

export default ControlPresupuesto;

import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //state para almacenar presupuesto
  const [pres, guardarPres] = useState(0);
  //state para almacenar restante
  const [rest, guardarRest] = useState(0);
  //state para el manejo de componentes (pregunta y form)
  const [mostrarPreg, actualizarPreg] = useState(true);
  //state para el listado de gastos
  const [gastos, guardarGastos] = useState([]);
  //use state para reemplaza agregar gasto
  const [gasto, guardarGasto] = useState({});
  //crear o no el gasto en el Formulario
  const [crearGasto, guardarCrearGasto] = useState(false);

  //Use effect para gestionar el restante de presupuesto
  useEffect(()=>{
    if(crearGasto){
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

    //determina el presupuesto Restante
    const presupuestoRestante = rest - gasto.cant;

    guardarRest(presupuestoRestante);

    //resetear a false
    guardarCrearGasto(false);
  }
  }, [gasto, crearGasto, gastos, rest]);


  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          { mostrarPreg ?
            (
              <Pregunta
                guardarPres={guardarPres}
                guardarRest={guardarRest}
                actualizarPreg={actualizarPreg}
              />) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    pres={pres}
                    rest={rest}
                  />
                </div>
              </div>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;

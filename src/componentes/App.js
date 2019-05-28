import React, {Component} from 'react';
import Header from './Header';
import "../css/skeleton.css";
import '../css/App.css';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';

import {validarPresupuesto} from '../helpers'

export default class App extends Component {
  state = {
    presupuesto : '',
       restante : '',
         gastos : {}
  }

obtenerpresupuesto = () => {
  let presupuesto = prompt('Cual es el presuepuesto?');
  let resultado = validarPresupuesto(presupuesto);

  if (resultado) {
    this.setState({
      presupuesto : presupuesto,
      restante : presupuesto
    })
  } else {
    this.obtenerpresupuesto();
  }
}
componentDidMount() { 
               this.obtenerpresupuesto();
}
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
    
    //agregar al gasto al objeto del state
      gastos[`gasto${Date.now()}`] = gasto;
  
  
   this.restarPresupuesto(gasto.cantidadGasto);

  // ponerlo en state
  this.setState({
    gastos
  })
  }

        //Restar del presupuesto cuando un gasto se crea
restarPresupuesto = cantidad => {
  //leer el gasto
let restar = Number(cantidad)

// Tomar una copia del state actual
let restante = this.state.restante;

// lo restamos
restante -= restar;

restante = String(restante);

//agregamos el nuevo state
this.setState({
  restante
})
}

    render() {
        return (
          <div className ="App container" >
          <Header 
          titulo = 'Gasto Semanal'
          />
        <div className ="contenido-principal contenido">
            <div className ="row">
                  <div className ="one-half column">
                        <Formulario 
                        agregarGasto = {this.agregarGasto}
                        />
                  </div>
                  <div className ="one-half column">
                        <Listado 
                        gastos = {this.state.gastos}
                        />

                        <ControlPresupuesto
                        presupuesto = {this.state.presupuesto}
                        restante = {this.state.restante}
                        />
                  </div>
            </div>
        </div>
  </div> //App container

        );
    }
}












































  
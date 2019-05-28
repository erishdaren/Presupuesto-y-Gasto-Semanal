import React,{Component} from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';


export default class Restante extends Component {

    render() {
const presupuesto = this.props.presupuesto;
const restante = this.props.restante;

        return (
           <div className= {revisarPresupuesto(presupuesto,restante)}>
Restante : $ {this.props.restante}
           </div>
        );
    }
}

Restante.propTypes = {
    presupuesto : PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

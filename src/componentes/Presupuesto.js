import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class Presupuesto extends Component {

    render() {
        return (
            <div className="alert alert-primary"  >
                Presupuesto: $ {this.props.presupuesto}
            </div>
        );
    }
}

Presupuesto.propTypes = {
    presupuesto : PropTypes.string.isRequired
}
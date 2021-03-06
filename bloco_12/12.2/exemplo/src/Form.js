import React, { Component } from 'react'
import BoxComparecer from './BoxComparecer';
import EstadoOptions from './EstadoOptions';
import FieldSet from './FieldSet';
import TextEstado from './TextEstado';

class Form extends Component {
  constructor() {
    super();
    this.handleChangeState = this.handleChangeState.bind(this);
    this.state = {
      estado: 'Recife',
      estadoFavorito: '',
      vaiComparecer: false,
    };
  }

  handleChangeState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    console.log(value);
    this.setState({
      // interpolando a props do obj com 'name'
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoOptions value={this.state.estado} handleChangeState={this.handleChangeState} />

          <TextEstado value={this.state.estadoFavorito} handleChangeState={this.handleChangeState} />

          <BoxComparecer value={this.state.vaiComparecer} handleChangeState={this.handleChangeState} />

          <FieldSet />
        </form>
      </div>
    );
  }
}

export default Form;

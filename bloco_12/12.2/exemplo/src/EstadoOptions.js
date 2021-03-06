import React, { Component } from 'react'

class EstadoOptions extends Component {
  render() {
    const { value, handleChangeState } = this.props;

    return (
      <fieldset>
        <legend>Estado</legend>
        <select name="estado" value={value} type="text" onChange={handleChangeState}>
          <option value="Brasília">Brasília</option>
          <option value="Recife">Recife</option>
          <option value="Vitória">Vitória</option>
          <option value="Sergipe">Sergipe</option>
        </select>
      </fieldset>
    );
  }
}

export default EstadoOptions;

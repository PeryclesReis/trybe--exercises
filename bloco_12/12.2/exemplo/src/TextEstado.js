import React, { Component } from 'react'

class TextEstado extends Component {
  render() {
    const { value, handleChangeState } = this.props;

    let error = undefined
    if (value.length > 120) {
      error = 'Texto muito grande!'
    }

    return(
      <fieldset>
        <legend>Estados Favorito</legend>
        <label>
          Diga qual texto quer colocar aqui:
          <textarea name="estadoFavorito" value={value} type="text" onChange={handleChangeState} placeholder="Exemplo: brasília, recife..." />
        </label>
        <span>{error ? error : ''}</span>
      </fieldset>
    )
  }
}

export default TextEstado;

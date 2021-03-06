import React, { Component } from 'react'

class FieldSet extends Component {
  render() {
    return (
      <fieldset>
        <legend>Foto com documentos em pdf.</legend>
        <input type="file" />
    </fieldset>
    );
  }
}

export default FieldSet;

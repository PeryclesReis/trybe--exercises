import React, { Component } from 'react'

class BoxComparecer extends Component {
  render() {
    const { value, handleChangeState } = this.props;

    return (
      <fieldset>
        <legend>Irá comparecer?</legend>
        <input
          type="checkbox"
          name="vaiComparecer"
          value={value}
          onChange={handleChangeState}
        />
      </fieldset>
    );
  }
}

export default BoxComparecer;

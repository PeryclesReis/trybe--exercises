import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {

    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon-content'>
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> Average Weight: {averageWeight.value} {averageWeight.measurementUnit} </p>
        </div>
        <div className='img-pokemon'>
          <img src={image} alt={`Photo of ${name}`}/>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  })
}

export default Pokemon;

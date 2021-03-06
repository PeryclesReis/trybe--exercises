import React, { Component } from 'react';

class ListItens extends Component {
  render() {

    const list = ['react', 'jest', 'git', 'tests', 'JSX'];

    return (
      <div>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </div>
    );
  }
}

export default ListItens;
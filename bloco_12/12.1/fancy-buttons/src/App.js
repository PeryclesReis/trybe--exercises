import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
      className: '',
    };
  }

  async handleClick1(event) {
    await this.setState((estadoInicial, _props) => ({
      numeroDeCliques1: estadoInicial.numeroDeCliques1 + 1,
    }));
    this.buttonColor1(event);
    console.log(event.target.style.backgroundColor);
  }

  handleClick2 = () => {
    this.setState((estadoInicial, props) => ({
      numeroDeCliques2: estadoInicial.numeroDeCliques2 + 1
    }));
  }

  handleClick3 = () => {
    this.setState((estadoInicial, _props) => ({
      numeroDeCliques3: estadoInicial.numeroDeCliques3 + 1
    }));
  }

  buttonColor = () => {
    if (this.state.numeroDeCliques1 % 2 === 0) {
      this.setState((estadoInicial) => ({
        className: estadoInicial.className = 'button-content'
      }))
    } else {
      this.setState((estadoInicial) => ({
        className: estadoInicial.className = ''
      }))
    }
  }

  buttonColor1 = (event) => {
    if (+(event.target.innerText) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = '';
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
      </div>
    );
  }
}

  export default App;

import React, { Component } from 'react'

class NameFieldset extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toUpperCaseWords = this.toUpperCaseWords.bind(this);
    this.state = {
      nome: '',
      email: '',
      endereco: '',
      cidade: '',
      estado: '',
    }
  }

  handleBlur({ target }) {
    const newValue = target.value.replace(/[^a-zA-Z]+/g,'');
    this.setState({
      cidade: newValue,
    });
  }

  handleChange({ target }) {
    const nome = target.name;
    const value = target.value;
    // na seguinte linha estou removendo caracteres especiais com regex e um method do ESC6
    const newValue = nome === 'nome' ? this.toUpperCaseWords(nome, value) : value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    this.setState({
      [nome]: newValue,
    });
  }

  toUpperCaseWords(name, value) {
    if (name === 'nome') {
      return value.toUpperCase();
    }
  }

  render() {
    const { nome, email, endereco } = this.state;
    return (
      <fieldset>
        <legend>Dados Pessoas:</legend>
        <label for="name-complete">Nome Completo:
          <input name="nome" type="text" maxlength="40" id="name-complete" placeholder="digite seu nome" value={ nome } onChange={this.handleChange} required />
        </label>
        <label for="email">Email:
          <input name="email" type="text" maxlength="50" id="email" placeholder="digite seu email" value={ email } onChange={this.handleChange} required />
        </label>
        <label for="endereco">Endereço:
          <input name="endereco" type="text" maxlength="200" id="endereco" placeholder="digite seu endereço" value={ endereco } onChange={this.handleChange} required />
        </label>
        <label for="cidade">Cidade:
          <input name="cidade" type="text" maxlength="28" id="cidade" placeholder="digite sua cidade" onBlur={this.handleBlur} required />
        </label>
        <label for="estado">Estado:
          <select>
            <option>Selecione</option>
            <option>Brasília</option>
            <option>Ceilândia</option>
            <option>Gama</option>
          </select>
        </label>
        <table>Moradia:
          <label for="moradia-1">
            <input type="radio" name="moradia" id="moradia-1" value="Apartamento" required />Apartamento
          </label>
          <label for="moradia-2">
            <input type="radio" name="moradia" id="moradia-2" value="Casa" required />Casa
          </label>
        </table>
      </fieldset>
    );
  }
}

export default NameFieldset;

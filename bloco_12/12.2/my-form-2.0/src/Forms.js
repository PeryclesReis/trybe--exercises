import React from 'react';
import NameFieldset from './components/NameFieldset';
import Experience from './components/Experience';

class Forms extends React.Component {

  handleClickSen() {

  }

  handleClickClean() {

  }

  render() {
    return (
      <section>
        <form>
          <NameFieldset />
          <Experience />
        </form>
        <button onClick={this.handleClickSend}>Enviar</button>
        <button onClick={this.handleClickClean}>Enviar</button>
      </section>
    );
  }
}

export default Forms;

import React from 'react';

class Experience extends React.Component {

  handleEnter() {
    console.log('Preencha com cuidado esta informação!');
  }

  render() {
    return (
      <fieldset>
        <legend>Experiências:</legend>
        <label htmlFor="resumo">Resumo do Currículo:
          <textarea maxLength="1000" placeholder="Se precisar estique a quadro!" required />
        </label>
        <label htmlFor="cargo">Cargo:
          <textarea maxLength="40" required onMouseEnter={this.handleEnter} />
        </label>
        <label htmlFor="cargo">Descrição do cargo:
          <textarea maxLength="500" required />
        </label>
      </fieldset>
    );
  }
}

export default Experience;

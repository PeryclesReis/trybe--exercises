// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  state = {
      characters: [],
    }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {this.state.characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
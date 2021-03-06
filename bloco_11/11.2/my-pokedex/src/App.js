import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  return (
    <div className="app">
      <h1>Pokemons</h1>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;

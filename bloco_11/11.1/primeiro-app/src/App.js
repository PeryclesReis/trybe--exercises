import './App.css';
import ListItens from './components/lista';
import Tests from './components/test';

function App() {
  return (
    <div className="App">
        <Tests name='Perycles'/>
      <h3>Perycles list:</h3>
      <ul>
        <ListItens />
      </ul>
    </div>
  );
}

export default App;

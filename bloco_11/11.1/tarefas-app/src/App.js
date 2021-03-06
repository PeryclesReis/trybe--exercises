import logo from './logo.svg';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return <ol> {tarefas.map((item) => <li>{item}</li>)} </ol>
}

export default App;

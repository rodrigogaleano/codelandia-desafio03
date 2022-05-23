import './assets/styles/App.css';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}

export default App;

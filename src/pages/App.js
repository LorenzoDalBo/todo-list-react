import '../App.css';
import Header from '../components/Header/Header';
import ListaDeCompras from '../components/ListaDeCompras/ListaDecompras';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <main>
          <ListaDeCompras></ListaDeCompras>
        </main>
    </div>
    </div>
  );
}

export default App;

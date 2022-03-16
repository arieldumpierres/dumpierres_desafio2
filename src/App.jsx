import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {
  

  

  return (
    <div className="App">
      <NavBar />

      <ItemListContainer
        id="saludo"
        saludo="No te pierdas los descuentos pagando en efectivo!"
      />
     
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default App;

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className='App'>
     <NavBar/>
     
     <ItemListContainer id="saludo" saludo='No te pierdas los descuentos pagando en efectivo!'/>
    </div>
  );
}

export default App;

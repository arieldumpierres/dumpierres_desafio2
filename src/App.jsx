import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContianer from './container/ItemDetailContainer';
import './App.css'

function App() {
  
return (
  <div className="App">
      <NavBar />

      <ItemListContainer
        id="saludo"
        saludo="No te pierdas los descuentos pagando en efectivo!"
      />
   <ItemDetailContianer/>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}

export default App;


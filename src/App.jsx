import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';
import './App.css'
import Cart from './componentes/Cart/Cart';

function App() {
  
return (
  <BrowserRouter>
    <div className="App">
    <NavBar />
      <Routes>
    
        <Route path="/" element={<ItemListContainer id="saludo" saludo="No te pierdas los descuentos pagando en efectivo!"/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer id="saludo" saludo="No te pierdas los descuentos pagando en efectivo!"/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/*' element={<Navigate to='/' />} /> 

       </Routes>
       <ItemCount stock={10} initial={1} />
    </div>
    </BrowserRouter>
  );
}

export default App;


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'

function App() {
  const [stock, setStock]= useState()
  const changeStock=() =>{
    let stocking=prompt("Introduzca stock inicial");
    setStock(stocking);
    console.log (stock,stocking)
  }
  
  //useEffect(()=>{console.log(stock)},[stock]);
  

  return (
    <div className='App'>
     <NavBar/>
     
     <ItemListContainer id="saludo" saludo='No te pierdas los descuentos pagando en efectivo!'/>
     <div>
    <Button variant="warning" onClick={changeStock}>Setee su Stock Inicial</Button>{' '}
    </div>
     <ItemCount stockInicial={stock} initial={1}/>
     
    </div>
  );
}

export default App;

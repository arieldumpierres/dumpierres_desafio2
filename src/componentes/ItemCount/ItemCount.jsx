import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import img from '../../img/aquacacerolacuadrada30cm.jpg'

function ItemCount({stockInicial, initial}) {

const [count, setCount] = useState(initial);
console.log('contador inicial hardcoreado en:'+ initial);





  return (
    <>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>Cacerola Cuadrada</Card.Title>
    <Card.Text>
      Cacerola cuadrada Aqua 29 cm,
    </Card.Text>
    <h2>{count}</h2>
    
    <Button variant="danger" onClick={()=>setCount(count-1)} disabled={count===1}>-</Button>{' '}
    <Button variant="secondary" onClick={()=>console.log ('Agrego a su carrito '+count +' caserola/s cuadrada/s')}>Agregar al Carrito</Button>{' '}
    <Button variant="primary" onClick={()=>setCount(count+1)} disabled={count == stockInicial}>+</Button>{' '}
    
  </Card.Body>
</Card>
    </>
  )
}

export default ItemCount
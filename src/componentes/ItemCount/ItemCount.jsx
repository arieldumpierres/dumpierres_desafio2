import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import img from "../../img/aquacacerolacuadrada30cm.jpg";

function ItemCount({ stock, initial, add }) {
  const [count, setCount] = useState(initial);
function handleIncrease(){
  if (count< stock){
    setCount(count+1)
  }
}
function handleDecrease(){
  if(count>initial){
    setCount(count-1)
  }
}
const onAdd=()=>{
  console.log(count)
}
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Cacerola Cuadrada</Card.Title>
          <Card.Text>Cacerola cuadrada Aqua 29 cm,</Card.Text>
          <h2>{count}</h2>
          <Button
            variant="danger"
            onClick={handleDecrease}
            disabled={count === 1}
          >
            -
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={onAdd}
          >
            Agregar al Carrito
          </Button>{" "}
          <Button
            variant="primary"
            onClick={handleIncrease}
            disabled={count>stock}
          >
            +
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemCount;

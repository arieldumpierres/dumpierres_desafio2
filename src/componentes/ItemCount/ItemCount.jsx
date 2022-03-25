import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";


function ItemCount({ stock, initial}) {
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
      
    </>
  );
}

export default ItemCount;

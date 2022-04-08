import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const agregar = () => {
    onAdd(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <Button variant="danger" onClick={handleDecrease} disabled={count === 1}>
        -
      </Button>{" "}
      <Button variant="secondary" onClick={agregar} disabled={count === 0}>
        Agregar al Carrito
      </Button>{" "}
      <Button
        variant="primary"
        onClick={handleIncrease}
        disabled={count > stock}
      >
        +
      </Button>{" "}
    </>
  );
}

export default ItemCount;

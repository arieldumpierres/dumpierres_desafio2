import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ producto }) {
  const [quantityItems, setQuantityItems] = useState(0);
  const { addToCart } = useCartContext();

  const onAdd = (quantityToAdd) => {
    setQuantityItems(quantityToAdd);
    addToCart({ ...producto, cantidad: quantityToAdd });
  };

  return (
    <div>
      <center>
        <Card border="info" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={producto.foto} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.categoria}</Card.Text>
            <h2>{producto.precio}</h2>
          </Card.Body>
        </Card>
      </center>
      {!quantityItems && <ItemCount stock={10} onAdd={onAdd} />}
      {quantityItems > 0 && (
        <>
          <Link to="/">
            <button className="btn btn-outline-primary">
              Seguir comprando
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-outline-success">Ir a Cart</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ItemDetail;

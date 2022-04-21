import { useCartContext } from "../../Context/CartContext";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Registro from "../Register/Register";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";

function Cart() {
  const [id, setId] = useState(null);
  const { cartList, vaciarCarrito, borraUno, sumaTotal } = useCartContext();

  const setOrderId = (orderId) => {
    setId(orderId);
  };

  return (
    <div className="d-flex flex-wrap m-5">
      {id && <ConfirmOrder id={id} />}

      {cartList.map((prod) => (
        <div key={prod.id} className="row">
          <Card border="info" className="m-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.foto} />
            <Card.Body>
              <Card.Title>Nombre del Producto:{prod.nombre}</Card.Title>
              <Card.Text>Categoria:{prod.categoria}</Card.Text>
              <h6>Precio:$ {prod.precio}</h6>
              <h6>Cantidad Seleccionada:{prod.cantidad}</h6>
              <Button
                className="btn-sm btn-danger"
                onClick={() => borraUno(prod.id)}
              >
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}

      {cartList.length >= 1 && (
        <>
          <div className="flex-wrap m-5">
            <h3>Total de la Compra: ${sumaTotal()} </h3>

            <Button variant="danger" onClick={vaciarCarrito}>
              Vaciar Carrito de Compras
            </Button>

            <Link to="/">
              <Button variant="primary">Continuar comprando</Button>
            </Link>
          </div>

          <div className="d-flex flex-wrap m-5">
            <Registro setOrderId={setOrderId} />
          </div>
        </>
      )}

      {cartList.length === 0 && (
        <div className="flex-wrap m-5">
          <h3>No hay items en tu carrito...</h3>
          <Link to="/">
            <Button>Continuar comprando</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

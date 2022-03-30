import { useCartContext } from "../../Context/CartContext"
import Button from "react-bootstrap/esm/Button"
import ListGroup from "react-bootstrap/ListGroup"
function Cart() {

  const { cartList, vaciarCarrito} = useCartContext ()
    return (
      <div>
        {cartList.map(prod=> <ListGroup key={prod.id}> <ListGroup.Item variant="info"> Nombre: {prod.nombre}; Precio: {prod.precio}; Cantidad: {prod.cantidad}</ListGroup.Item>
        </ListGroup>
        )
        }
        <Button variant="outline-danger" onClick={vaciarCarrito}>Vaciar Carrito de Compras </Button>
      </div>
    )
  }
  
  export default Cart
  

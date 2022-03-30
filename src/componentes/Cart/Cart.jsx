import { useCartContext } from "../../Context/CartContext"

function Cart() {

  const { cartList, vaciarCarrito} = useCartContext ()
    return (
      <div>
        {cartList.map(prod=> <li key={prod.id}>nombre:{prod.nombre} precio: {prod.precio}
        cantidad: {prod.cantidad}
        </li>)}
        <button onClick={vaciarCarrito}>Vaciar Carrito de Compras </button>
      </div>
    )
  }
  
  export default Cart
  
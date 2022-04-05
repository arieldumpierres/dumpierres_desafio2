import { useCartContext } from "../../Context/CartContext"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

function Cart() {

  const { cartList, vaciarCarrito, borraUno, sumaTotal} = useCartContext ()
  console.log(cartList.length)
const generarOrden =(e)=>
e.preventDefaul();
let orden={}
orden.buyer={nombre:'ariel', email:'aQb', telefono:'123'}
orden.total = sumaTotal()
orden.items= cartList.map(cartItem=>{
  const id= cartItem.id
  const nombre= cartItem.nombre
  const precio= cartItem.precio * cartItem.cantidad
  return {id, nombre, precio}
})

    return (
      <div class="d-flex flex-wrap m-5" >
       
       


{cartList.map((prod) =>(
                <div key={prod.id} className="row" >
 <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Title>Nombre del Producto:{prod.nombre}</Card.Title>
          <Card.Text>Categoria:{prod.categoria}</Card.Text>
          <h6>Precio:${prod.precio}</h6>
          <h6>Cantidad Seleccionada:{prod.cantidad}</h6>
          <button className="btn-sm btn-danger"
                                onClick={() => borraUno(prod.id)}
                        >
                            Eliminar
                        </button>
          
        </Card.Body>
      </Card>
      </div>
            ))
}





       {
       (cartList.length>=1)
       &&
       <div>
         <h3>Total de la Compra: ${sumaTotal()} </h3>
        <Button variant="outline-danger" onClick={vaciarCarrito}>Vaciar Carrito de Compras </Button>
        
        <Link to='/'>
                    <Button>Continuar comprando</Button>
                </Link>
        </div>
       }
     
        
        
        
        {
            (cartList.length === 0)
            
            &&
            
            <div>
                <p>No hay items en tu carrito...</p>
                <Link to='/'>
                    <Button>Continuar comprando</Button>
                </Link>
            </div>
            
        }  
        
          
     
     
      </div>

    )
  }
  
  export default Cart
  

import { useCartContext } from "../../Context/CartContext"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

function Cart() {

  const { cartList, vaciarCarrito, borraUno, sumaTotal} = useCartContext ()
  console.log(cartList.length)

    return (
      <div>
       
       


{cartList.map((prod) =>(
                <div key={prod.id} className="row">
 <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Title>Nombre del Producto:{prod.nombre}</Card.Title>
          <Card.Text>Categoria:{prod.categoria}</Card.Text>
          <h2>Precio:{prod.precio}</h2>
          <h2>Cantidad Seleccionada:{prod.cantidad}</h2>
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
  

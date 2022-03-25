import Card from "react-bootstrap/Card";
import Intercambiocart from "../Intercambio/Itercambiocart";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({producto}) {

  const onAdd=()=>{
    console.log()}
    return (
      
      <div>
        <center>
         <Card style={{ width: "18rem" }} >
          <Card.Img variant="top" src={producto.foto} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.categoria}</Card.Text>
                  <h2>{producto.precio}</h2>
                 
                </Card.Body>
              </Card>
              </center>   
      
      
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
     <Intercambiocart/>

    </div>

   
    
    )
    
  }
  
  export default ItemDetail
  
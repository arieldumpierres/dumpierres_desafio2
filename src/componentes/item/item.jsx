
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button";

function Item({prod}) {
    return (
      <Link to={`detalle/${prod.id}`}>
         
         
         <Card style={{ width: "18rem" }} >
         
                <Card.Img variant="top" src={prod.foto} />
                <Card.Body>
                  <Card.Title>{prod.nombre}</Card.Title>
                  <Card.Text>{prod.categoria}</Card.Text>
                  <h2>{prod.precio}</h2>
                  <Button variant="danger">Descripcion</Button>{" "}
                </Card.Body>
              </Card>
            
          
              </Link>
         
        
      );    
        

    
}
export default Item 

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

function Item({prod}) {
    return (
        <>
         
         
         <Card style={{ width: "18rem" }} key={prod.id}>
                <Card.Img variant="top" src={prod.foto} />
                <Card.Body>
                  <Card.Title>{prod.nombre}</Card.Title>
                  <Card.Text>{prod.categoria}</Card.Text>
                  <h2>{prod.precio}</h2>
                  <Button variant="danger">Descripcion</Button>{" "}
                </Card.Body>
              </Card>
            
          
    
         
        </>
      );    
        

    
}
export default Item
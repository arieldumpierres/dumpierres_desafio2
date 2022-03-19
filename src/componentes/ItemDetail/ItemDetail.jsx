import Card from "react-bootstrap/Card";

function ItemDetail({producto}) {
    return (
      <div >

          <Card style={{ width: "18rem" }} >
          <Card.Img variant="top" src={producto.foto} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.categoria}</Card.Text>
                  <h2>{producto.precio}</h2>
                 
                </Card.Body>
              </Card>
        
      </div>
    )
  }
  
  export default ItemDetail
  
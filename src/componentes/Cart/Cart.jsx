import { useCartContext } from "../../Context/CartContext";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";


function Cart() {
  const [id, setId] = useState(null);

  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    email1: "",
  });

  const { cartList, vaciarCarrito, borraUno, sumaTotal } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = sumaTotal();
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantTotItem = cartItem.cantidad;

      return { id, nombre, cantTotItem, precio };
    });

    const db = getFirestore();
    const queryCollectionSet = collection(db, "ordenes");
    addDoc(queryCollectionSet, orden)
      .then(({ id }) => setId(id))
      .catch((err) => console.error(err))
      .finally(() => vaciarCarrito());
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="d-flex flex-wrap m-5">
      {id && (
        <Alert variant="success">
          <Alert.Heading>
            Felicitaciones!, el ID de tu compra es el: {id}
          </Alert.Heading>
          <p>Muchas gracias por adquirir ESSEN a traves nuestro!</p>
          <hr />
          <p className="mb-0">
            En breve nos contactaremos con vos para confirmar el medio de pago.
          </p>
        </Alert>
      )}

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
            {/*} <ValidateForm /> */}
            <Form onSubmit={generarOrden}>
              <h6>Para generar su compra primero complete sus datos:</h6>
              <input
                className="form-control my-1"
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                value={dataForm.nombre}
                onChange={handleChange}
              />

              <br />
              <input
                className="form-control my-1"
                type="text"
                name="telefono"
                placeholder="Ingrese su tel."
                value={dataForm.telefono}
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="form-control my-1"
                type="email"
                name="email"
                placeholder="Ingrese su email"
                value={dataForm.email}
                onChange={handleChange}
                required
              />
              <br />

              <input
                className="form-control my-1"
                type="email"
                name="email1"
                placeholder="Para validar repita su email"
                value={dataForm.email1}
                onChange={handleChange}
                required
              />
              <br />

              <Button
                variant="success" 
                onClick={generarOrden}
                disabled={
                  dataForm.email !== dataForm.email1 ||
                  dataForm.email === "" ||
                  dataForm.telefono === ""
                }
              >
                Confirmar Compra
              </Button>
            </Form>
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

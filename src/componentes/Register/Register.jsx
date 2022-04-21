import { useCartContext } from "../../Context/CartContext";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

function Registro({ setOrderId }) {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    email1: "",
  });

  const { cartList, vaciarCarrito, sumaTotal } = useCartContext();

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const setId = (orderId) => {
    setOrderId(orderId);
  };

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

  return (
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
  );
}

export default Registro;

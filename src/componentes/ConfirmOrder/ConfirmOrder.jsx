import Alert from "react-bootstrap/Alert";

function ConfirmOrder({ id }) {
  return (
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
  );
}

export default ConfirmOrder;

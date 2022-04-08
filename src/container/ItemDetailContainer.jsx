import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/esm/Button";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", detalleId);
    getDoc(queryDoc)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      <div className="d-flex flex-wrap m-5">
        {loading ? (
          <Button variant="info" disabled>
            <Spinner
              as="span"
              animation="border"
              size=""
              role="status"
              aria-hidden="true"
            />
            <span className="">Cargando su Producto Seleccionado...</span>
          </Button>
        ) : (
          <ItemDetail producto={producto} />
        )}
      </div>
    </>
  );
}

export default ItemDetailContainer;

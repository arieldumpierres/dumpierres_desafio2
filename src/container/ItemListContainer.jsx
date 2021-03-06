import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemList/itemList";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/esm/Button";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ saludo }) {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const queryCollectionFinal = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoria", "==", id));

    getDocs(queryCollectionFinal)
      .then((resp) =>
        setProds(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div>{saludo}</div>
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
            <span className="">Cargando Nuestros Productos...</span>
          </Button>
        ) : (
          <ItemList prods={prods} />
        )}
      </div>
    </>
  );
}

export default ItemListContainer;

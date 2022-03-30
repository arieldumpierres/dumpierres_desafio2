import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemList/itemList";
import { getFetch } from "../helpers/getFetch";
import Spinner from 'react-bootstrap/Spinner'
import Button from "react-bootstrap/esm/Button";

function ItemListContainer({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  console.log(ItemList);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch // simulacion a un llamado a una api
        .then((resp) => setProds(resp.filter((prod) => prod.categoria === id)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch // simulacion a un llamado a una api
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  console.log(prods);

  return (
    <>
    
      <div>{saludo}</div>
      <div class="d-flex flex-wrap m-5">
        {loading ? <Button variant="info" disabled>
    <Spinner 
      as="span"
      animation="border"
      size=""
      role="status"
      aria-hidden="true"
    />
    <span className="">Loading...</span>
  </Button> : <ItemList prods={prods} />}
      </div>
      <button onClick={() => setBool(!bool)}>click</button>
      
    </>
  );
}

export default ItemListContainer;

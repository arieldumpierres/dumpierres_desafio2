import { useEffect, useState } from "react";
import Item from "../helpers/item";
import { itemList } from "../helpers/itemList";



function ItemListContainer({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  console.log(itemList);

  useEffect(() => {
    itemList //simulo una llamada a una api
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(prods);

  return (
    <>
      <div>{saludo}</div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        prods.map((prod) => (
          <div className='col-md-4 mb-5' key={prod.id}>
            <Item prod={prod}/>
          </div>
        ))
      )}

      <button onClick={() => setBool(!bool)}>click</button>
    </>
  );
}

export default ItemListContainer;

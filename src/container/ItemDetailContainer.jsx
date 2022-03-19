import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../componentes/ItemDetail/ItemDetail"
import { getFetch } from "../helpers/getFetch";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})

    const { detalleId } = useParams() 
    
    useEffect(()=>{
        getFetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))
        .finally ()
    }, [detalleId])
    
    return (
        <div>
            <h6>Detalle del Producto Seleccionado</h6>
            <ItemDetail producto={producto} />      
        </div>
    )
}

export default ItemDetailContainer

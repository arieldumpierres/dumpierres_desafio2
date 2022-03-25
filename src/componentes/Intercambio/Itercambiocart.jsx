import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button className="btn btn-outline-primary" onClick={()=>console.log('se va al carrito') } >Ir al Carrito de compra o Terminar compra</button>
        </Link>
    )
}


const ButtonCount= ({handleInter})=> {
    return <button className="btn btn-outline-success" onClick={handleInter} >Agregar Al carrito</button>

}

const Intercambiocart = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            
            {
                inputType === 'button' ? 
                   <ButtonCount handleInter={handleInter} />
                : 
                   <InputCount /> 
            }
            
        </div>
    )
}

export default Intercambiocart

import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)




function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
         const foundItem = cartList.find((itemToAdd)=>itemToAdd.id===item.id)
        if (foundItem){
                        foundItem.cantidad = foundItem.cantidad + item.cantidad
                        setCartList([...cartList])
            
        }
        else{
            setCartList( [ ...cartList, item ] )
   
        }
        
     }

    
    const vaciarCarrito= () =>{
        setCartList([])
    }


    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider

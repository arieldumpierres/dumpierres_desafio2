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

    const borraUno = (id) => {
        setCartList(cartList.filter(x => x.id !== id))  
    }

    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.precio * item.cantidad), 0)
    }

    const cantTotaldeItems = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ 
            cartList,
            addToCart,
            vaciarCarrito,
            sumaTotal,
            borraUno,
            cantTotaldeItems
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider

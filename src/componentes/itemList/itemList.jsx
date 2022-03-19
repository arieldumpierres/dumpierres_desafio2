
 import Item from "../item/item"
 function ItemList({prods}) {
   return(
     <>
     {prods.map((prod)=> <Item key={prod.id} prod={prod} />)}
     </>
   )
   
 }
 export default ItemList
import { useCartContext } from "../../Context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";




function Widget() {
  const {cantTotaldeItems,cartList}= useCartContext ()
  return (
    <>
    <FontAwesomeIcon icon={faCartShopping} /> 
    { cartList.length > 0 && <h6><Badge bg="primary">{cantTotaldeItems()}</Badge></h6>}
    </>
  )
}

export default Widget

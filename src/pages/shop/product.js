import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

export const Product=(props)=>{
    const {id,productName,price,productImag}=props.data;

    const {cartItems,addToCart,removeFromCart}=useContext(shopContext);
const isInCart=cartItems?.some((item)=>item.id===id)
    return(<div className="col-3">
<img  src={productImag} alt={productName}  className="w-100"/>

<h5>{productName} </h5>
<p>Price:{price}€</p>
<button className="btn btn-info btn-sm" onClick={()=>addToCart(id)} >+</button>
<span className="mx-1" >{cartItems?.filter((row)=>row.id===id)[0]?.count} </span>
{isInCart&&<button className="btn btn-info btn-sm" onClick={()=>removeFromCart(id)} >-</button>
}
    </div>
    )}
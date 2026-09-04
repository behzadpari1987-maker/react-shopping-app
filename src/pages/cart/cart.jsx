import React, { useContext } from "react"
import { PRODUCTS } from "../../data/PRODUCTS"
import { shopContext } from "../../context/shopContext"
import { Product } from "../shop/product"
export const Cart=()=>{
    const{cartItems,resetCart}=useContext(shopContext)

    return(<React.Fragment>
<h1>Ihr Warenkorb</h1>
<div className="row">
  {PRODUCTS.map((item) => {
    if (cartItems?.some((i) => i.id === item.id && i.count > 0)) {
      return <Product key={item.id} data={item} />;
    }
    return null;
  })}
</div>
        <button className="btn btn-warning m-3" onClick={resetCart}>Reset</button>

    </React.Fragment>


    )
}
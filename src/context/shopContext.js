import { createContext } from "react";
import { useCart } from "../hook/useCart";

export const shopContext=createContext({
cartItems:null,
addToCart:()=>{},
removeFromCart:()=>{},
resetCart:()=>{},
})

export const ShopContextProvider=(props)=>{
    return(
        <shopContext.Provider value={useCart()}>
            {props.children}
        </shopContext.Provider>
    )
}
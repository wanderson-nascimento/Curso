import { createContext, useState } from "react";

export const CartContext = createContext({})

export function CartContextProvider({children}){
    const [cartState, setCartState] = useState([])
    
}
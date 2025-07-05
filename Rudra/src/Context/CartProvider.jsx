import React, { createContext } from "react";
import data from '../data.json';  


const CartContext = createContext ()


const CartProvider = () => {

  return (
    <div>CartProvider</div>
  )
}

export default  CartProvider
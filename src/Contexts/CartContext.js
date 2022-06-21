import React from "react";
import { Children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    const aux = cart;
    aux.push(item);
    setCart(aux);
    console.log(cart);
  }

  function removeItem(id) {
    // const filteredCart = cart.filter((item) => item.id !== id);
    // setCart(filteredCart);
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === id) {
        cart.splice(i, 1);
      }
    }
    console.log(cart);
  }

  function clearCart() {
    setCart([]);
    console.log(cart);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

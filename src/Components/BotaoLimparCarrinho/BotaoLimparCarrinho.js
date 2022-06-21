import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export const BotaoLimparCarrinho = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <button onClick={() => clearCart()}>Limpar Carrinho</button>
    </>
  );
};

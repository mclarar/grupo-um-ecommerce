import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export const BotaoRemoverCarrinho = ({produto}) => {

  const{ cart, addItem, removeItem, clearCart } = useContext(CartContext)
    console.log(produto.idProduto)
  return (
    <>

      <button onClick={() => removeItem(produto)}>Remover</button>
    </>
  );
};
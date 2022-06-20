import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export const BotaoAdicionarCarrinho = ({produto}) => {
    // const [listaCarrinho, setListaCarrinho] = useState([]);

    // function handleAdd() {
    //   setListaCarrinho([...listaCarrinho, props.id]);
    // }

  const{ cart, addItem, removeItem, clearCart } = useContext(CartContext)

  return (
    <>
      <button onClick={() => addItem(produto)}>{produto.valorUnitario}</button>
      {/* <h1>{cart.valorUnitario}</h1> */}
      {/* {listaCarrinho.map((justeta) => {
        return <h1>{justeta.valorUnitario}</h1>;
      })} */}
    </>

    // <h1>{listaCarrinho}</h1>
  );
};

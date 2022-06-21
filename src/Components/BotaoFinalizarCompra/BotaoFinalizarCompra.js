import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import axios from "axios";
export const BotaoFinalizarCompra = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext);
  console.log(cart);
  function jsonProduto() {
    let daa = [];
    // daa = {
    //   idCliente: 1,
    //   itemPedidoList: [
    //     {
    //       produto: {
    //         idProduto: 1,
    //       },
    //       quantidade: 1,
    //       precoVenda: 5000.0,
    //       percentualDesconto: 0.1,
    //     },
    //   ],
    // };
    for (let index = 0; index <= 1; index++) {
      daa[index] = {
        produto: {
          idProduto: cart[index].idProduto,
        },
        quantidade: 1,
        precoVenda: cart[index].valorUnitario,
        percentualDesconto: 0.1,
      };
    }

    console.log(daa);
    teste(daa);
  }

  function teste(daa) {
    let haha = {
      idCliente: 1,
      itemPedidoList: [daa[1]],
    };
    // let haha = [];
    // for (let i = 0; i < cart.length; i++) {
    //   haha[i] = {
    //     idCliente: 1,
    //     itemPedidoList: [daa[i]],
    //   };
    //   console.log(haha);
    // }
    axios.post("http://localhost:8080/ecommerce/pedido", haha);
    clearCart()
  }
  return (
    <>
      <button onClick={() => jsonProduto()} >Finalizar Compra</button>
    </>
  );
};
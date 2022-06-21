import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { BotaoLimparCarrinho } from "../../Components/BotaoLimparCarrinho/BotaoLimparCarrinho";
import { BotaoFinalizarCompra } from "../../Components/BotaoFinalizarCompra/BotaoFinalizarCompra";
import "./Style.css";

export const FinalizarCompra = () => {
  const { cart, addItem, removeItem, clearCart, precoTotal } =
    useContext(CartContext);
  const [somaTotal, setSomaTotal] = useState("");
  console.log(cart);
  useEffect(() => {
    SomaProdutos();
  }, [cart]);
  function SomaProdutos() {
    let soma = 0;
    for (let i = 0; i < cart.length; i++) {
      soma += parseFloat(cart[i].valorUnitario);
    }
    setSomaTotal(soma);
    console.log(soma);
  }

  return (
    <div>
      <div className="limparCarrinho">
        <BotaoLimparCarrinho />
      </div>
      <div className="centro">
        <div className="finalizarCompra">
          <h2>Valor Total R${somaTotal},00</h2>
          <BotaoFinalizarCompra />
        </div>
      </div>
    </div>
  );
};

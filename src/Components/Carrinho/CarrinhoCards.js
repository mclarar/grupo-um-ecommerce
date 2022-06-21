import React, { useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { CardCarrinhoContainer, CardCarrinho,TopCardCarrinho,TopCardCarrinhoImage ,BottomCardCarrinho } from "./style";
import { BotaoRemoverCarrinho } from "../BotaoRemoverCarrinho/BotaoRemoverCarrinho";

export const CarrinhoCards = (props) => {


  return (
    <CardCarrinhoContainer>
      {props.lista.map((res) => (
        <CardCarrinho>
          <TopCardCarrinho>
            <TopCardCarrinhoImage src={res.nomeImagemProduto} />
          </TopCardCarrinho>
          <BottomCardCarrinho>
            <span>{res.nomeProduto}</span>
            <span>R${res.valorUnitario}</span>
            <BotaoRemoverCarrinho produto={res}>dasdasd</BotaoRemoverCarrinho>
          </BottomCardCarrinho>
        </CardCarrinho>
      ))}
    </CardCarrinhoContainer>
  );
};

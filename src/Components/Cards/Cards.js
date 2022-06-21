import React, { useState } from "react";
import { CardContainer, Card, TopCard } from "./style";
import "./Card.css";
import { BotaoAdicionarCarrinho } from "../BotaoAdicionarCarrinho/BotaoAdicionarCarrinho";

export const Cards = (props) => {
  const [star, setStar] = useState([
    "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true",
  ]);

  function changeStar(id) {
    // if(document.getElementById(id).src==="https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true"){
    document.getElementById(id).src =
      "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star1.png?raw=true";
    // }else{
    //   document.getElementById(id).src = "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true";
    // }
  }

  return (
    <CardContainer>
      {props.lista.map((res) => (
        <Card>
          <TopCard>
            <img className="topCardImage" src={res.nomeImagemProduto} />
          </TopCard>
          <div className="bottom-card">
            <span>{res.nomeProduto}</span>
            <span>R${res.valorUnitario}</span>
            <BotaoAdicionarCarrinho produto={res}></BotaoAdicionarCarrinho>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
};

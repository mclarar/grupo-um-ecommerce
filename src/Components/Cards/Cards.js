import React, { useState } from "react";
import { CardContainer, Card} from "./style";
import "./Card.css"
import "./funcoes"


export const Cards = (props) => {

  const [star, setStar]= useState(["https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true"]);

  
  function changeStar(id){
    // if(document.getElementById(id).src==="https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true"){
      document.getElementById(id).src = "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star1.png?raw=true";
    // }else{
    //   document.getElementById(id).src = "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true";
    // }
  }

  return (
    <CardContainer>
      {props.lista.map((res) => (
        <Card>
          <div className="top-card">
            <img className="topCardImage" src={res.nomeImagemProduto}/>
          </div>
          <div className="bottom-card">
            <span>{res.nomeProduto}</span>
            <span>R${res.valorUnitario}</span>
            <div class="star">
              <a href="javascript:void(0)" onClick="Avaliar(2,'s1-c1','s2-c1','s3-c1','s4-c1','s5-c1','rating-c1','c1')">
                <img src={star} id="s1" /></a>
              <a href="javascript:void(0)" onClick="Avaliar(2,'s1-c1','s2-c1','s3-c1','s4-c1','s5-c1','rating-c1','c1')">
                <img src={star} id="s2" /></a>
              <a href="javascript:void(0)" onClick="Avaliar(3,'s1-c1','s2-c1','s3-c1','s4-c1','s5-c1','rating-c1','c1')">
                <img src={star} id="s3" /></a>
              <a href="javascript:void(0)" onClick="Avaliar(4,'s1-c1','s2-c1','s3-c1','s4-c1','s5-c1','rating-c1','c1')">
                <img src={star} id="s4" /></a>
              <a href="javascript:void(0)" onClick="Avaliar(5,'s1-c1','s2-c1','s3-c1','s4-c1','s5-c1','rating-c1','c1')">
                <img src={star} id="s5" /></a>
              <p id="rating-c1">0</p>
          </div>
          </div>
        </Card>
      ))}
    </CardContainer>
  );
};

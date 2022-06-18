import React from "react";
import { CardContainer, Card, topCard, topCardImage } from "./style";

export const Cards = (props) => {
  return (
    <CardContainer>
      {props.lista.map((res) => (
        <Card>
          <topCard>
            {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/> */}
            {/* <img style=" width: 50%;" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img> */}
          </topCard>
          <bottomCard>
            <span>{res.nomeProduto}</span>
            <span>{res.valorUnitario}</span>
          </bottomCard>
        </Card>
      ))}
    </CardContainer>
  );
};

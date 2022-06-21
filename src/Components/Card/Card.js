import React, { useState } from 'react'
import { CardContainer, TopCard, CardStyle } from './style'
import './Card.css'
import { BotaoAdicionarCarrinho } from '../BotaoAdicionarCarrinho/BotaoAdicionarCarrinho'
import { PopupCarrinho } from '../PopupCarrinho/PopupCarrinho'

export const Card = ({ produto }) => {
  const [popUp, setPopUp] = useState(false)

  return (
    <CardStyle>
      <TopCard>
        <img className="topCardImage" src={produto.nomeImagemProduto} />
      </TopCard>
      <div className="bottom-card">
        <span>{produto.nomeProduto}</span>
        <span>R${produto.valorUnitario}</span>
        <BotaoAdicionarCarrinho
          produto={produto}
          setPopUp={setPopUp}
        ></BotaoAdicionarCarrinho>
        {popUp && <PopupCarrinho />}
      </div>
    </CardStyle>
  )
}

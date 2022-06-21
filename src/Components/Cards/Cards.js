import React, { useState } from 'react'
import { CardContainer } from './style'
import { Card } from '../Card/Card'
import './Card.css'

export const Cards = props => {
  const [star, setStar] = useState([
    'https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true'
  ])

  const [popUp, setPopUp] = useState(false)

  function changeStar(id) {
    // if(document.getElementById(id).src==="https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true"){
    document.getElementById(id).src =
      'https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star1.png?raw=true'
    // }else{
    //   document.getElementById(id).src = "https://github.com/HenriqueLutfi/SerratecFrontEnd/blob/main/trabalho%20final/home/assets/img/star0.png?raw=true";
    // }
  }

  return (
    <CardContainer>
      {props.lista.map(res => (
        <Card produto={res} />
      ))}
    </CardContainer>
  )
}

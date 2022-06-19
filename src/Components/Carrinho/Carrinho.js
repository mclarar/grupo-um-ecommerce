import React, { useState } from 'react'
import { CartContext } from '../../Contexts/CartContext'


export const Carrino =()=> {
  var valorTotal = 0;
  
  const botaoFinalizar = ({ }) => (
    <Link onClick={clearCart} >
      
    </Link>
  )

  return (
    <div>Carrinho</div>
  )
}

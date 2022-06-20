import React, { useState } from 'react'
import { CartContext } from '../../Contexts/CartContext'

export const Carrino = () => {
  var valorTotal = 0
  let itensCarrinho = []

  const botaoFinalizar = ({}) => <Link onClick={clearCart}></Link>

  return (
    <div>
      Carrinho
      <div></div>
    </div>
  )
}

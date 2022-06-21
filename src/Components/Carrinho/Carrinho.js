import React, { useState } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export const Carrino = () => {
  var valorTotal = 0
  let itensCarrinho = []

  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)
  // const botaoFinalizar = ({}) => <Link onClick={clearCart}></Link>

  return (
    <div>
      Carrinho
      <div></div>
    </div>
  )
}

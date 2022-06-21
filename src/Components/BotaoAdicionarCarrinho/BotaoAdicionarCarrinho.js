import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'

export const BotaoAdicionarCarrinho = ({ produto, setPopUp }) => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  function chamarDuasFuncoes() {
    addItem(produto)
    setPopUp(true)
  }
  return (
    <>
      <button onClick={() => chamarDuasFuncoes()}>Adicionar ao Carrinho</button>
    </>
  )
}

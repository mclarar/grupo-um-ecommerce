import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import './style.css'

export const BotaoAdicionarCarrinho = ({ produto, setPopUp }) => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  function chamarDuasFuncoes() {
    addItem(produto)
    setPopUp(true)
  }
  return (
    <>
      <button onClick={() => chamarDuasFuncoes()}>
        <strong>Adicionar ao Carrinho</strong>
      </button>
    </>
  )
}

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../Contexts/CartContext'
import './style.css'
import { useContext } from 'react'

export const QtdadeItensCarrinho = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  useEffect(() => {
    addItem()
  })

  return (
    <div className="qtdadecarrinho">
      <h1>{cart.length}</h1>
    </div>
  )
}

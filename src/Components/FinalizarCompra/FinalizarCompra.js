import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { BotaoLimparCarrinho } from '../../Components/BotaoLimparCarrinho/BotaoLimparCarrinho'
import { BotaoFinalizarCompra } from '../../Components/BotaoFinalizarCompra/BotaoFinalizarCompra'

export const FinalizarCompra = () => {
  const { cart, addItem, removeItem, clearCart, precoTotal } =
    useContext(CartContext)
  const [somaTotal, setSomaTotal] = useState('')
  console.log(cart)
  useEffect(() => {
    SomaProdutos()
  }, [cart])
  function SomaProdutos() {
    let soma = 0
    for (let i = 0; i < cart.length; i++) {
      soma += parseFloat(cart[i].valorUnitario)
    }
    setSomaTotal(soma)
    console.log(soma)
  }

  return (
    <div>
      <h1>R${somaTotal}</h1>
      <BotaoLimparCarrinho />
      <BotaoFinalizarCompra />
    </div>
  )
}

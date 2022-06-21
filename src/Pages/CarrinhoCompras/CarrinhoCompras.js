import React, { useContext, useState } from 'react'
import { BarraPesquisa } from '../../Components/BarraPesquisa/BarraPesquisa'
import { Fundo } from '../../Components/BarraPesquisa/Style'
import { CartContext } from '../../Contexts/CartContext'
import { CarrinhoCards } from '../../Components/Carrinho/CarrinhoCards'
import { FinalizarCompra } from '../../Components/FinalizarCompra/FinalizarCompra'

export const CarrinhoCompras = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  return (
    <div>
      <Fundo>
        <BarraPesquisa />
        {/* criar componente card, com componentes de diminuir ou aumentar quantidade e remover do carrinho */}
        <CarrinhoCards lista={cart} />
        <FinalizarCompra />
      </Fundo>
    </div>
  )
}

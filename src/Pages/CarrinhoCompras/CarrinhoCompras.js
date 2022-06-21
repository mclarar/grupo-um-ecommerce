import React, { useContext, useState } from 'react'
import { BarraPesquisa } from '../../Components/BarraPesquisa/BarraPesquisa'
import { Fundo } from '../../Components/BarraPesquisa/Style'
import { CartContext } from '../../Contexts/CartContext'
import { Cards } from '../../Components/Cards/Cards'
import axios from 'axios'

export const CarrinhoCompras = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  //teste
  function jsonProduto() {
    let daa = []
    // daa = {
    //   idCliente: 1,
    //   itemPedidoList: [
    //     {
    //       produto: {
    //         idProduto: 1,
    //       },
    //       quantidade: 1,
    //       precoVenda: 5000.0,
    //       percentualDesconto: 0.1,
    //     },
    //   ],
    // };
    for (let index = 0; index <= 1; index++) {
      daa[index] = {
        produto: {
          idProduto: cart[index].idProduto
        },
        quantidade: 1,
        precoVenda: cart[index].valorUnitario,
        percentualDesconto: 0.1
      }
    }

    console.log(daa)
    teste(daa)
  }

  function teste(daa) {
    let haha = {
      idCliente: 1,
      itemPedidoList: [daa[1]]
    }
    console.log(haha)
    axios.post('http://localhost:8080/ecommerce/pedido', haha)
  }

  return (
    <div>
      <Fundo>
        <BarraPesquisa />
        {/* criar componente card, com componentes de diminuir ou aumentar quantidade e remover do carrinho */}
        <Cards lista={cart} />
        <button onClick={() => jsonProduto()}>dasda</button>
      </Fundo>
    </div>
  )
}

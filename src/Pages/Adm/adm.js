import React from 'react'
import { addProduto } from '../../Service/api'

export const Adm = () => {
  const adcProduto = () => {
    addProduto(
      nomeProduto,
      descricaoProduto,
      qtdEstoque,
      valorUnitario,
      idCategoria
    )
      .then(res => {
        setProdutos(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <div>adm</div>
}

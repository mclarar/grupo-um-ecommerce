import React from 'react'
import { addProduto } from '../../Service/api'
import { useState } from 'react'

export const Adm = () => {
  const [nomeProduto, setnomeProduto] = useState('')
  const [descricaoProduto, setdescricaoProduto] = useState('')

  const adcProduto = produto => {
    addProduto(produto)
      .then(res => {
        setProdutos(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <InputText value={value1} onChange={e => setValue1(e.target.value)} />
    </div>
  )
}

import React from 'react'
import { addProduto } from '../../Service/api'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import axios from 'axios'
import './style.css'

export const Adm = () => {
  const [produtos, setProdutos] = useState([])
  const [nomeProduto, setNomeProduto] = useState('')
  const [descricaoProduto, setDescricaoProduto] = useState('')
  const [qtdEstoque, setQtdEstoque] = useState('')
  const [valorUnitario, setValorUnitario] = useState('')
  const [idCategoria, setIdCategoria] = useState('')

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

  const handleSubmitProduto = e => {
    e.preventDefault()
    let prod = {
      nomeProduto: nomeProduto,
      descricaoProduto: descricaoProduto,
      qtdEstoque: qtdEstoque,
      valorUnitario: valorUnitario,
      idCategoria: idCategoria,
      nomeImagemProduto:
        'https://m.media-amazon.com/images/I/31Cf5Iz4XOS._AC_.jpg'
    }

    console.log('submit', {
      nomeProduto,
      descricaoProduto,
      qtdEstoque,
      valorUnitario,
      idCategoria
    })

    axios.post('http://localhost:8080/ecommerce/produto', prod)
  }
  return (
    <div id="cadastroProd">
      <form className="form">
        <div className="field">
          <h1>Insira os dados do produto</h1>
          <br />
          <label htmlFor="nome">Nome</label>

          <InputText
            style={{ width: 250 }}
            className="nome"
            id="nome"
            value={produtos.nomeProduto}
            onChange={e => setNomeProduto(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="descricao">Descrição</label>
          <InputText
            style={{ width: 250 }}
            className="descricao"
            id="descricao"
            value={produtos.descricaoProduto}
            onChange={e => setDescricaoProduto(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="quantidade">Quantidade no estoque</label>
          <InputText
            style={{ width: 250 }}
            className="quantidade"
            id="quantidade"
            value={produtos.qtdEstoque}
            onChange={e => setQtdEstoque(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="valor">Valor</label>
          <InputText
            style={{ width: 250 }}
            className="valor"
            id="valor"
            value={produtos.valorUnitario}
            onChange={e => setValorUnitario(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="id da categoria">ID da categoria"</label>
          <InputText
            style={{ width: 250 }}
            className="idcategoria"
            id="idcategoria"
            value={produtos.idCategoria}
            onChange={e => setIdCategoria(e.target.value)}
          />
        </div>
        <div className="actions">
          <Button
            style={{ backgroundColor: ' #5A198D' }}
            onClick={e => handleSubmitProduto(e)}
            label="Cadastrar"
            className="p-button-rounded p-button-help"
          />
        </div>
      </form>
    </div>
  )
}

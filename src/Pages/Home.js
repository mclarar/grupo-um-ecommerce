import React, { useEffect, useState, useContext } from 'react'
import { BarraPesquisa } from '../Components/BarraPesquisa/BarraPesquisa'
import { buscarProdutos } from '../Service/api'
import { Cards } from '../Components/Cards/Cards'
import { Fundo } from '../Components/BarraPesquisa/Style'
import { CartContext } from '../Contexts/CartContext'
import axios from 'axios'

export const Home = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    buscarProdutosApi()
  }, [])

  function buscarProdutosApi() {
    buscarProdutos('produto')
      .then(res => {
        setProdutos(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Fundo>
        <BarraPesquisa />
        <Cards lista={produtos} />
      </Fundo>
    </>
  )
}

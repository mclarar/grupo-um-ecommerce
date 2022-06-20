import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080/ecommerce'
})

export const buscarProdutos = token => {
  const url = '/produto'

  return api.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '',
      Authorization: 'Bearer ' + token
    }
  })
}

export const buscarPedido = () => {
  const url = '/pedido'
  return api.get(url, { headers: { 'Access-Control-Allow-Origin': '' } })
}

export const buscarItemPedido = () => {
  const url = '/itemPedido'
  return api.get(url, { headers: { 'Access-Control-Allow-Origin': '' } })
}

export const buscarCliente = () => {
  const url = '/cliente'
  return api.get(url, { headers: { 'Access-Control-Allow-Origin': '' } })
}

export const CriarPedido = () => {
  const url = '/pedido'
  return api.post(url, { headers: { 'Access-Control-Allow-Origin': '' } })
}

export const addProduto = produto => {
  const url = '/produto'
  return api.post(url, produto, {
    headers: { 'Access-Control-Allow-Origin': '' }
  })
}

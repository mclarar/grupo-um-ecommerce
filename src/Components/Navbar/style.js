import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ImgHeader = styled.img`
  width: 100%;
  height: 200px;
  padding: 0;
`

export const Barra = styled.nav`
  margin: 0;
  border: 0;
`

export const Logo = styled.img`
  width: 120px;
  height: auto;
  padding-left: 10px;
  padding-top: 10px;
`
export const BotaoBarra = styled.ul`
  list-style-type: none;
  text-decoration: none;
  background-color: #643887;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`
export const Botao = styled(Link)`
  text-overflow: ellipsis;
  text-decoration: none;
  display: block;
  color: #e4e4e4;
  padding: 1.5rem;
  font-size: 22px;
  font-family: 'Quantico', sans-serif;
  :hover {
    background-color: #5e387c;
    color: #e4e4e4;
    transition: 0.3s;
  }
`

export const Lista = styled.li`
  float: left;
  padding-left: 5px;
`
export const Carrinho = styled.div`
  float: right;
  padding-right: 5px;
  margin-right: 8px;
`
export const Icons = styled.img`
  width: 50px;
  height: auto;
  padding: 5px;
  padding-top: 20px;
`

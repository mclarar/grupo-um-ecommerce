
export const Fundo = styled.body`
background-color:#d3caff;
`;
import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Barra = styled.nav`
  margin: 0;
  border: 0;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  padding-left: 10px;
  padding-top: 10px;
`
export const BotaoBarra = styled.ul`
  list-style-type: none;
  text-decoration: none;
  background-color: #5a198d;
  overflow: hidden;
  margin: 0;
  padding: 0;
`
export const Botao = styled(Link)`
  text-overflow: ellipsis;
  text-decoration: none;
  display: block;
  color: black;
  padding: 1.5rem;
  font-size: 22px;
  font-family: 'Quantico', sans-serif;
  :hover {
    background-color: #9b9cdf;
    color: #5b5986;
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
  width: 43px;
  height: 43px;
  padding: 5px;
  padding-top: 15px;
`

export const BarraConsoles = styled.div`
  background-color: gray;
`
export const Consoles = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
margin: 0;

`;
export const ImgConsoles = styled.img`
padding-right: 80px;
float: left;
width : 100px;
height:auto;


`;




import { React } from 'react'
import logo from './Imagens/logo-.png'
import carrinho from './Imagens/carrinho.svg'
import usuario from './Imagens/usuario.svg'
// import manete from './Imagens/manete.jpg';

import {
  Barra,
  BotaoBarra,
  Botao,
  Carrinho,
  Lista,
  Icons,
  ImgHeader
} from '../Navbar/StyleNavBar'
import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
    <header>
      <ImgHeader src='https://cdn.discordapp.com/attachments/961357270967517209/988608023469621269/manetes.JPG'/>
    </header>
      <Barra>
        <BotaoBarra>
          <Lista>
            {/* usar link ou navigate ao invés de href */}
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </Lista>
          <Lista>
            <Botao to="/home">Home</Botao>
          </Lista>
          <Lista>
            <Botao to="/sobre">Sobre</Botao>
          </Lista>
          <Lista>
            <Botao to="/contato">Contato</Botao>
          </Lista>
          <Carrinho>
            <li>
              <a href="/">
                <Icons src={usuario} alt="usuario" />
              </a>
              {/* usar link ou navigate ao invés de href */}

              <Icons
                onClick={() => navigate('/carrinho')}
                src={carrinho}
                alt="carrinho"
              />
            </li>
          </Carrinho>
        </BotaoBarra>
      </Barra>
    </>
  )
}

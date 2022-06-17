import React from 'react'
import logo from './Imagens/logo.png'
import carrinho from './Imagens/carrinho.svg'
import usuario from './Imagens/usuario.svg'
import {
  Barra,
  BotaoBarra,
  Botao,
  Carrinho,
  Lista,
  Icons
} from '../BarraPesquisa/Style'
// import { BarraPesquisa } from "./BarraPesquisa";

export const NavBar = () => {
  return (
    <>
      <Barra>
        <BotaoBarra>
          <Lista>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </Lista>
          <Lista>
            <Botao to="/">Home</Botao>
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
              <a href="/">
                <Icons src={carrinho} alt="carrinho" />
              </a>
            </li>
          </Carrinho>
        </BotaoBarra>
      </Barra>
      {/* <BarraPesquisa/> */}
    </>
  )
}

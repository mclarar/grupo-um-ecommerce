import {React} from 'react'
import {  Link } from "react-router-dom";
import logo from './Imagens/logo-.png'
import carrinho from './Imagens/carrinho.svg'
import usuario from './Imagens/usuario.svg'
import {
  Barra,
  BotaoBarra,
  Botao,
  Carrinho,
  Lista,
  Icons,
  Logo
} from './StyleNavBar'

export const NavBar = () => {
  return (
    <>
      <Barra>
        <BotaoBarra>
          <Lista>
             {/* usar link ou navigate ao invés de href */}
              <Logo src={logo} alt="logo" />
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
               {/* usar link ou navigate ao invés de href */}
              <Link to={"/"}>
                <Icons src={usuario} alt="usuario" />
              </Link>
               {/* usar link ou navigate ao invés de href */}
              <Link to={"/"}>
                <Icons src={carrinho} alt="carrinho" />
              </Link>
            </li>
          </Carrinho>
        </BotaoBarra>
      </Barra>
    </>
  )
}

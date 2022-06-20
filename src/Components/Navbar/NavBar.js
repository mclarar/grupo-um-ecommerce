import { React } from 'react'
import logo from './Imagens/logo-.png'
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
import { Link, useNavigate } from 'react-router-dom'
// import { BarraPesquisa } from "./BarraPesquisa";

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <Barra>
        <BotaoBarra>
          <Lista>
            {/* usar link ou navigate ao invés de href */}
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
      {/* <img src="https://www.sageworld.com/blog/wp-content/uploads/2018/06/Gamer-Promo-Products_Header_Option-2-710x263.jpg" className='imgHeader'></img> */}
      {/* <BarraPesquisa/> */}
    </>
  )
}

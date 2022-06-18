import React from "react";
import { Rodape,Desenvolvedores,LogoRodape } from "../BarraPesquisa/Style";
import logo from './Imagens/logo-.png'

export const Footer = () => {

    return(
        <Rodape>
            <Desenvolvedores>
        <p>
          <strong>
            Desenvolvedores: Alexandre | Amanda | Angelica | Henrique | Maria
            Clara | Roberta <br />
            Residência em TIC Software Serratec 2022.1 - Turma 01
          </strong>
        </p>
        <LogoRodape src={logo} alt="logo do site"/>
       </Desenvolvedores> 
      </Rodape>

     
    )
}
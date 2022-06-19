import React from "react";
import logo from './Imagens/logo-.png'
import "./styleFooter.css"

export const Footer = () => {

    return(
      <>
        <footer>
            <div className="desenvolvedores">
        <p>
          <strong>
            Desenvolvedores: Alexandre | Amanda | Angelica | Henrique | Maria
            Clara | Roberta <br />
            Residência em TIC Software Serratec 2022.1 - Turma 01
          </strong>
        </p>
        <img src={logo} alt="logo do site"/>
       </div> 
      </footer>
      </>
     
    )
}
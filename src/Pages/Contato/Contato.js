import React from "react";
import { Fundo } from "../../Components/BarraPesquisa/Style";
import tel from './Imagens/tel.png'
import email from './Imagens/email.png'
import portfolio from './Imagens/portfolio.png'
import "./stylecontato.css"
import { IconsContato } from "./styleContato";

export const Contato = () =>{

    return(
        <Fundo>
        <section class="section-toda">
      <div class="container">
        <div class="text"><p>Vamos conversar?</p></div>
        <div class="container-form-e-contato">
          <div class="info">
            <div class="container-infos">
              <div class="telefone">
                <IconsContato src={tel} alt=""/>
                <p>(24) 91234-4678</p>
              </div>
              <div class="contato">
                <IconsContato src={email} alt="" />
                <p>maniac@gmail.com</p>
              </div>
              <div class="trabalhe-conosco">
                <IconsContato src={portfolio} alt="" />
                <p>trabalhe conosco</p>
              </div>
            </div>
          </div>
          <div class="formulario">
            <form action="#" method="get">
              <input type="text" id="nome" placeholder="nome" />
              <input type="email" id="email" placeholder="email" required />

              <textarea
                name="message"
                placeholder="Digite sua mensagem"
                class="textarea"
              ></textarea>

              <input type="submit" value="ENVIAR" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>

        </Fundo>
    )
}
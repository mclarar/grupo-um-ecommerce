import React from 'react'
import { Fundo } from '../../Components/BarraPesquisa/Style'
import amanda from './Imagens/amanda.svg'
import alexandre from './Imagens/alexandre.svg'
import angelica from './Imagens/angelica.svg'
import henrique from './Imagens/henrique.svg'
import maria from './Imagens/mclara.svg'
import roberta from './Imagens/roberta.svg'
import './stylesobre.css'

export const Sobre = () => {
  return (
    <Fundo>
      <div className="container">
        <div className="texto">
          <h3>
            Ooolá viajante! Saudações! Somos uma empresa e-commerce de vendas
            online aonde nosso site foi todo criado por desenvolvedores do curso
            de programação fullstack do SERRATEC, Grupo 1 com os integrantes,
            Alexandre, Amanda , Angélica, Henrique, Maria Clara e Roberta. A
            nossa loja é especializada em tudo o que você pode precisar sobre o
            mundo dos games, desde manetes, controles, consoles tanto dos novos
            como old schools e ate mesmo os grandes clássicos do videogame da
            era de ouro dos consoles, nosso site foi preparado com muito amor e
            carinho para e por todo o nosso público! seja bem vindo e
            divirta-se!
          </h3>
        </div>
        <img
          src="https://urubutrix.files.wordpress.com/2013/12/tumblr_m8uwjclps41rdkjxgo1_500.gif"
          className="beemo"
        ></img>
      </div>
    </Fundo>
  )
}

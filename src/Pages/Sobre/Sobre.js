import React from "react";
import { Fundo } from "../../Components/BarraPesquisa/Style";
import "./stylesobre.css";

export const Sobre = () =>{
    return(
        <Fundo>
        <h1>Desenvolvedores</h1>
    <section class="container">
      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/mclara.svg" alt="Desenvolvedora Maria Clara" />
        </div>
        <div class="sobre">
          <p>
            Olá! Me chamo Maria Clara e tenho 26 anos e sou graduada em
            Psicologia. Sempre gostei muito de tecnologia, desde pequena tive
            acesso ao computador e sempre fui muito curiosa. Já queria trocar de
            área há algum tempo, então tomei coragem e decidi de uma vez por
            todas que entraria na carreira de tecnologia. Vi uma oportunidade na
            residência de software do Serratec, -
            <em> pois já era algo que eu queria participar há muito tempo </em>
            - e aqui estou eu! Me esforçando para absorver o máximo dessa
            experiência e seguir nessa carreira.
          </p>
        </div>
      </div>

      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/roberta.svg" alt="Desenvolvedora Roberta" />
        </div>
        <div class="sobre">
          <p>
            Hey, sou a Roberta e tenho 30 anos. Me formei na faculdade de
            Nutrição no ano de 2021, e em 2022 resolvi me desafiar na Residência
            de Software, oferecida pelo Serratec. Trabalho de maneira autônoma
            como Nutricionista, e venho aprimorando meus conhecimentos de
            Desenvolvimento de Software.
          </p>
        </div>
      </div>

      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/alexandre.svg" alt="Desenvolvedor Alexandre" />
        </div>
        <div class="sobre">
          <p>
            Eu sou Alexandre Gomes Araujo da Costa, tenho 23 anos, morador da
            cidade de Imperial de Petrópolis do estado do Rio de Janeiro,
            atualmente estudante da área de programação, sou uma pessoa que
            tende a completar seus objetivos e cumprir com seus prazos, sempre
            curti toda a área da tecnologia e depois de anos usando ela como
            hobbies decidi investir em uma carreira nela, posso dizer que nas
            horas vagas sou streamer, jogador de jogos eletrônicos e pra
            completar essa loucurinha que chamo de vida, também confeiteiro kk.
            Esse sou eu e é um prazer tê-lo(a) no nosso site!
          </p>
        </div>
      </div>

      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/angelica.svg" alt="Desenvolvedora Angelica" />
        </div>
        <div class="sobre">Olá, me chamo Angélica, tenho 32 anos, cursava direito e há 13 anos trabalhei com Assessoria Empresarial. Atualmente em desenvolvimento para a transição de carreira na area tecnológica. Disposta a novas oportunidades no mercado.</div>
      </div>

      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/henrique.svg" alt="Desenvolvedor Henrique" />
        </div>
        <div class="sobre">Eu sou o Henrique Lutfi, tenho 28 anos, me formei em engenharia mecâninca em 2019 e atualmente estou me preparando para ingressar na area de programação.</div>
      </div>

      <div class="pessoa">
        <div class="foto">
          <img src="https://raw.githubusercontent.com/mclarar/trabalhoFinalFrontEnd/e49740571bf9b3feeea05a58d90795b3ba97753e/pg-%20sobre/assets/amanda.svg" alt="Desenvolvedora Amanda" />
        </div>
        <div class="sobre">
          <p>
            Olá meu nome é Amanda, tenho 23 anos, moro em Petrópolis. Atualmente
            estou cursando o programa de Residência de Software do Serratec.
            Descobri recentemente o interesse na área de programação e desde
            então venho me empenhando para aprender cada dia mais e me tornar
            bem sucedida na área.
          </p>
        </div>
      </div>
    </section>
        </Fundo>
    )
}
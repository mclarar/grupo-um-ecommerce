import React from 'react'
import { Fundo } from '../../Components/BarraPesquisa/Style'
import tel from './Imagens/tel.png'
import email from './Imagens/email.png'
import portfolio from './Imagens/portfolio.png'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Button } from 'primereact/button'
import './stylecontato.css'

export const Contato = () => {
  const [nome, setNome] = useState('')
  const [emailPessoa, setEmailPessoa] = useState('')
  const [texto, setTexto] = useState('')

  const handleSubmitContato = e => {
    e.preventDefault()
    console.log('submit', { nome, emailPessoa, texto })
  }
  return (
    <Fundo>
      <section class="section-toda">
        <div class="container">
          <div class="text">
            <p>Vamos conversar?</p>
          </div>
          <div class="container-form-e-contato">
            <div class="info">
              <div class="container-infos">
                <div class="telefone">
                  <img style={{ height: 20, width: 25 }} src={tel} alt="" />
                  <p>(24) 91234-4678</p>
                </div>
                <div class="contato">
                  <img style={{ height: 20, width: 25 }} src={email} alt="" />
                  <p>maniac@gmail.com</p>
                </div>
                <div class="trabalhe-conosco">
                  <img
                    style={{ height: 20, width: 25 }}
                    src={portfolio}
                    alt=""
                  />
                  <p>trabalhe conosco</p>
                </div>
              </div>
            </div>
            <div id="contatoform">
              <form className="form" onSubmit={handleSubmitContato}>
                <div className="field">
                  <h1>Mande sua mensagem!</h1>
                  <br />
                  <label htmlFor="nome">Nome</label>
                  <InputText
                    style={{ width: 500 }}
                    className="username"
                    id="username"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <InputText
                    type="email"
                    style={{ width: 500 }}
                    className="email"
                    id="email"
                    value={emailPessoa}
                    onChange={e => setEmailPessoa(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="text">Digite sua mensagem</label>
                  <InputTextarea
                    style={{ width: 500 }}
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                    rows={5}
                    cols={30}
                    autoResize
                  />
                </div>

                <div className="actions">
                  <Button
                    style={{ backgroundColor: ' #5A198D' }}
                    onClick={e => handleSubmitContato(e)}
                    label="Enviar"
                    className="p-button-rounded p-button-help"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fundo>
  )
}

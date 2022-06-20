import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import './PasswordDemo.css'
import './ButtonDemo.css'
import './style.css'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', { email, password })
    if (email === 'cliente01@gmail.com') {
      if (password === '123456') {
        localStorage.setItem('logado', 'sim')
        navigate('/')
        document.location.reload()
      }
    }
  }

  return (
    <>
      <div id="login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <h1>Faça seu login</h1>
            <br />
            <label htmlFor="email">Email</label>
            <InputText
              style={{ width: 250 }}
              className="username"
              id="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <Password
              inputStyle={{ width: 250 }}
              value={password}
              onChange={e => setPassword(e.target.value)}
              toggleMask
              feedback={false}
            />
          </div>
          <div className="actions">
            <Button
              style={{ backgroundColor: ' #5A198D' }}
              onClick={e => handleSubmit(e)}
              label="Login"
              className="p-button-rounded p-button-help"
            />
          </div>
        </form>
      </div>
    </>
  )
}

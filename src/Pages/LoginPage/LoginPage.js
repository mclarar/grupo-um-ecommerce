import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import './PasswordDemo.css'
import './ButtonDemo.css'
import './style.css'
import { buscarCliente } from '../../Service/api'
export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [clientes, setClientes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    buscarClientesApi();
  }, []);

  function buscarClientesApi() {
    buscarCliente("Clientes")
      .then((res) => {
        setClientes(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit', { email, password })
    clientes.forEach(element => {
      if (email === element.email) {
        if (password === element.telefone) {
          localStorage.setItem('logado', 'sim')
          navigate('/')
          document.location.reload()
        }
      }
    });
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
        <h1 className="title">Login do sistema</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <InputText
              id="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">senha</label>
            <Password
              value={password}
              onChange={e => setPassword(e.target.value)}
              toggleMask
            />
          </div>
          <div className="actions">
            <Button
              onClick={e => handleSubmit(e)}
              label="Login"
              className="p-button-rounded p-button-help"
            />
          </div>
        </form>
      </div>
    </>
  )

  //   <input
  //               type="email"
  //               name="email"
  //               id="email"
  //               value={email}
  //               onChange={e => setEmail(e.target.value)}
  //             />
}

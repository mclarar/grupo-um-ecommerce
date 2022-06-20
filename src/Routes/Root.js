import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../Components/Navbar/NavBar'
import { Home } from '../Pages/Home'
import { Contato } from '../Pages/Contato/Contato'
import { Sobre } from '../Pages/Sobre/Sobre'
import { NotFound } from '../Pages/NotFound'
import { Footer } from '../Components/Footer/Footer'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { CarrinhoCompras } from '../Pages/CarrinhoCompras/CarrinhoCompras'
import { Adm } from '../Pages/Adm/Adm'

export const Root = () => {
  const [logado, setLogado] = useState()

  useEffect(() => {
    setLogado(localStorage.getItem('logado'))
  })

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {logado === 'sim' && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/carrinho" element={<CarrinhoCompras />} />
            <Route path="/Adm" element={<Adm />} />
          </>
        )}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

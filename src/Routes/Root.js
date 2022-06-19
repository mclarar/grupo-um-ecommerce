

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {NavBar} from '../Components/Navbar/NavBar'
import { Home } from "../Pages/Home/Home";
import {Contato} from "../Pages/Contato/Contato"
import { Sobre } from "../Pages/Sobre/Sobre";
import { NotFound } from "../Pages/NotFound";
import { Footer } from "../Components/Footer/Footer";
import { Carrinho } from "../Components/Navbar/StyleNavBar";

export const Root = () =>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/sobre" element= {<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}


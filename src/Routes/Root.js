import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { NavBar } from "../Pages/NavBar";
import { Home } from "../Pages/Home";
import {Contato} from "../Pages/Contato"
import { Sobre } from "../Pages/Sobre";
import { NotFound } from "../Pages/NotFound";

export const Root = () =>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/sobre" element= {<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}
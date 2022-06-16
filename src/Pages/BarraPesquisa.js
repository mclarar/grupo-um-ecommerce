import React from "react";
import playstation from "../Imagens/playstation-logo.png"
import nintendo from "../Imagens/nintendo-logo-.png"
import xbox from "../Imagens/xbox-logo.png"
import { Consoles,BarraConsoles, ImgConsoles } from "./Style";

export const BarraPesquisa = ()=>{


    return(
        <BarraConsoles>
        <Consoles>
            <li><a href="/"><ImgConsoles  src={playstation} style ={{paddingTop:"15px"}} width= "120px" height="auto" /></a></li>
            <li><a href="/"><ImgConsoles  src={xbox} style ={{paddingTop:"13px"}} width= "100px" height="auto" /></a></li>
            <li><a href="/"><ImgConsoles src={nintendo} width= "130px" height="auto"/></a></li>

        </Consoles>
        </BarraConsoles>
        )
}
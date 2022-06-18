import React from "react";
import playstation from "../Imagens/playstation-logo.png"
import nintendo from "../Imagens/nintendo-logoo.png"
import xbox from "../Imagens/xbox-logoo.png"
import { Consoles,BarraConsoles, ImgConsoles} from "./Style";

export const BarraPesquisa = ()=>{
    
    return(
        <BarraConsoles>
        <Consoles>
            <li><a href="/" ><ImgConsoles  src={playstation} style={{paddingTop:"14px"}} /></a></li>

            <li><a href="/"><ImgConsoles  src={xbox} style={{paddingBottom:"10px"}} /></a></li>
            
            <li><a href="/"><ImgConsoles src={nintendo} style={{paddingBottom:"10px"}}/></a></li>

        </Consoles>
        </BarraConsoles>
        )
}
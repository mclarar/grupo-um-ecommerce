import React from 'react'
import playstation from './Imagens/playstation-logo.png'
import nintendo from './Imagens/nintendo-logo-.png'
import xbox from './Imagens/xbox-logo.png'
import { Consoles, BarraConsoles, ImgConsoles } from './Style'

export const BarraPesquisa = ()=>{
    
  return(
      <BarraConsoles>
      <Consoles>
          <li><a href="/" ><ImgConsoles  src={playstation} style={{paddingLeft:"10px" ,paddingTop:"14px"}} /></a></li>

          <li><a href="/"><ImgConsoles  src={xbox} style={{paddingTop:"10px"}} /></a></li>
          
          <li><a href="/"><ImgConsoles src={nintendo} style={{paddingBottom:"10px"}}/></a></li>

      </Consoles>
      </BarraConsoles>
      )
}
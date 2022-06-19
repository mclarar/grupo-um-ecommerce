import React from 'react'
import playstation from './Imagens/playstation-logo.png'
import nintendo from './Imagens/nintendo-logo-.png'
import xbox from './Imagens/xbox-logo.png'
import {InputGroupDemo} from '../Input/Input'
import { Consoles, BarraConsoles, ImgConsoles } from './Style'

export const BarraPesquisa = ()=>{
    
  return(
      <BarraConsoles>
      <Consoles>
          <li><a href="/" ><ImgConsoles  src={playstation} style={{paddingTop:"14px"}} /></a></li>

          <li><a href="/"><ImgConsoles  src={xbox} style={{paddingBottom:"10px"}} /></a></li>
          
          <li><a href="/"><ImgConsoles src={nintendo} style={{paddingBottom:"10px"}}/></a></li>

      <InputGroupDemo/>
      </Consoles>
      </BarraConsoles>
      )
}
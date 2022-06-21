import React from 'react'
import {InputGroupDemo} from '../Input/Input'
import { BarraSearch, BarraGray} from './Style'

export const BarraPesquisa = ()=>{
    
  return(
      <BarraGray>
      <BarraSearch>
      <InputGroupDemo/>
      </BarraSearch>
      </BarraGray>
      )
}
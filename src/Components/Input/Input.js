import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { InputContainer } from './style'

export const InputGroupDemo = () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [radioValue1, setRadioValue1] = useState('')
  const [radioValue2, setRadioValue2] = useState('')

  return (
    <InputContainer>
      <div className="col-12 md:col-4">
        <div className="p-inputgroup">
          <InputText className="barra" placeholder="Digite aqui o que deseja" />
          <Button className="botaoSearch"> GO!</Button>
        </div>
      </div>
    </InputContainer>
  )
}

import React from 'react'
import {IconContainer, InputContainer, InputText} from './styles'

//tudo que sobrar de propriedade é jogada para esse rest
export default function Input({leftIcon, name, ...rest}) {
  return (
    <InputContainer>
        {leftIcon?(<IconContainer>{leftIcon}</IconContainer>): null}
        <InputText {...rest} ></InputText>
    </InputContainer>
  )
}

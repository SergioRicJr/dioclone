import React from 'react'
import { ButtonContainer } from './styles'

//se não passar nada pro variant ele vai ser primary
export default function Button({title, variant='primary', onClick, carroca}) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

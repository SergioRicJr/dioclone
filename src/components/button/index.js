import React from 'react'
import { ButtonContainer } from './styles'
// import { PropsWithChildren } from 'react'

//se não passar nada pro variant ele vai ser primary
export default function Button({variant='primary', onClick, carroca, children}) {
  const title = children
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

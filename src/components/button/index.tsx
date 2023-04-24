import { ButtonContainer } from './styles'
// import { PropsWithChildren } from 'react'

import {IButton} from './types'
//se não passar nada pro variant ele vai ser primary
export default function Button({variant='primary', onClick, children}: IButton){
  const title = children
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

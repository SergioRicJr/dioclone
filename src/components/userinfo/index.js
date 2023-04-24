import React from 'react'
import { Container, NameText, Progress } from './styles'
import { UserPicture } from '../card'

export default function UserInfo({name, image, percentual}) {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

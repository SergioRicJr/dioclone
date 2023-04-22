import React from 'react'
import {BuscarInputContainer, Column, Container, Input, Menu, MenuRight, UserPicture, Wrapper, Row} from './styles'
import Button from '../button'
import logo from '../../assets/logo-dio.png'

export default function Header() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO'></img>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' ></Input>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#' >Home</MenuRight>
                <Button>Entrar</Button>
                <Button>Cadastrar</Button>
            </Row>
        </Container>
    </Wrapper>
  )
}

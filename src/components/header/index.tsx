import React from 'react'
import {BuscarInputContainer, Column, Container, Input, Menu, MenuRight, UserPicture, Wrapper, Row} from './styles'
import Button from '../button'

//erro abaixo ocorre pq o ts diz que png não é um módulo
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types'

export default function Header({autenticado}:IHeader) {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO'></img>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ):null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/115962863?v=4' />
                ) : (
                    <>
                        <MenuRight href='#' >Home</MenuRight>
                        <Button>Entrar</Button>
                        <Button>Cadastrar</Button>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

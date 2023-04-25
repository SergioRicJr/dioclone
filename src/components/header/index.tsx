import {BuscarInputContainer, Container, Input, Menu, MenuRight, UserPicture, Wrapper, Row} from './styles'
import Button from '../button'
import { Link } from 'react-router-dom'

//erro abaixo ocorre pq o ts diz que png não é um módulo
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types'
import { useNavigate } from 'react-router'

export default function Header({autenticado}:IHeader) {
    const navigate = useNavigate()

    const handleNavLogin = ()=> {
        navigate("/login")
    }

    const handleNavRegister = ()=> {
        navigate("/register")
    }

    const handleNavHome = ()=> {
        navigate("/")
    }

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
                            <MenuRight onClick={handleNavHome} >Home</MenuRight>
                            <Button onClick={handleNavLogin}>Entrar</Button>
                            <Button onClick={handleNavRegister}>Cadastrar</Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

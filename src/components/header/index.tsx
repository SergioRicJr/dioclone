import {BuscarInputContainer, Container, Input, Menu, MenuRight, UserPicture, Wrapper, Row} from './styles'
import Button from '../button'
import { Link } from 'react-router-dom'

//erro abaixo ocorre pq o ts diz que png não é um módulo
import logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export default function Header() {
    const {user, handleSignOut} = useContext(AuthContext)
    
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
                    <Link to={'/'}>
                        <img src={logo} alt='Logo da DIO'></img>
                    </Link>
                    {user.id ? (
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
                    {user.id ? (
                        <>
                            <UserPicture src='https://avatars.githubusercontent.com/u/115962863?v=4' />
                            <a href='/login' onClick={handleSignOut}>Sair</a>
                        </>
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

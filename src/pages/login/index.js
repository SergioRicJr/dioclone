import {MdEmail, MdLock} from 'react-icons/md'
import Button from "../../components/button";
import Header from "../../components/header";
import {Row ,Container, Column, CriarText, EsqueciText, Title, TitleLogin, SubTitleLogin, Wrapper} from "./styles";
import Input from "../../components/input";

export default function Login() {
  return (
    <>
        <Header></Header>
        <Container>
          <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
                mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
              <form>
                <Input placeholder="E-mail" leftIcon={<MdEmail/>} />
                <Input placeholder="Senha" leftIcon={<MdLock/>} />
                <Button variant="secondary" >Entrar</Button>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
        {/* <Button title={"primeiro botão"}></Button>
        <Button variant="secondary" title={"segundo botão"}>segundo</Button>
        <Link to="/login">Ta aqui</Link> */}
    </>
  )
}

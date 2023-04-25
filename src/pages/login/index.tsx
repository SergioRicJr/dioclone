import {MdEmail, MdLock} from 'react-icons/md'
import Button from "../../components/button";
import Header from "../../components/header";
import {Row ,Container, Column, CriarText, EsqueciText, Title, TitleLogin, SubTitleLogin, Wrapper} from "./styles";
import Input from "../../components/input";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { api } from '../../services/api';
import { IFormData } from './types';

// opcao min define que deve ter no minimo de caracteres 
// no segundo parametro de min -- passa a mensagem
const schema = yup.object({
  email: yup.string().email("Email não é válido").required(),
  password: yup.string().min(3, "No minio 3 caracteres").required()
})

export default function Login() {
  const navigate = useNavigate()

  const {control, handleSubmit, formState: {errors, isValid}} = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  console.log(isValid, errors)

  const onSubmit = async (dados: IFormData) => {
    try {
      const {data} = await api.get(`users?email=${dados.email}&password=${dados.password}`)
      if (data.length ===1) {
        console.log("encotrado")
        navigate("/feed")
      } else {
        console.log("Email ou senha inválidos")
      }
      console.log(dados)
      console.log(data)
    } catch(error) {
      console.log(error)
      alert("Houve um erro, tente novamente")
    }
  }

  // const handleClickSign = () => {
  //   navigate('/feed')
  // }

  const handleClickRegister = () => {
    navigate("/register")
  }

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
              <TitleLogin>Faça seu login</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)} > 
                <Input errorMessage={errors.email?.message} name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail/>} />
                <Input errorMessage={errors.password?.message} name="password" control={control} placeholder="Senha" leftIcon={<MdLock/>} />
                <Button variant="secondary" type="button">Entrar</Button>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText onClick={handleClickRegister} >Criar conta</CriarText>
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

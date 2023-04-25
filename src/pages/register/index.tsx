import { useForm } from "react-hook-form"
import Header from "../../components/header"
import Input from "../../components/input"
import { ColumnOne, ColumnTwo, Container, SubTitleLogin, Title } from "./styles"
import { IFormData } from "./types"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { MdPerson, MdEmail, MdLock } from "react-icons/md"
import Button from "../../components/button"

const Register = () => {
  const schema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).required()
  })

  const {control, handleSubmit, formState: {errors, isValid}} = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })

  console.log(isValid, errors)

  const handleSubmitRegister = async (formData: IFormData)=> {
    console.log(formData)
  }


  return (
    <>
        <Header></Header>
        <Container>
          <ColumnOne flex={4}>
            <Title>A plataforma para você aprender com experts as principais tecnologias e entrar mais rápido nas empresas desejadas</Title>
          </ColumnOne>
          <ColumnTwo flex={1}>
            <Title>Comece agora grátis</Title>
            <SubTitleLogin>Crie sua conta e make de change</SubTitleLogin>
            <form>
              <Input name="name" control={control} errorMessage={errors.name?.message} leftIcon={<MdPerson/>}></Input>
              <Input name="email" control={control} errorMessage={errors.email?.message} leftIcon={<MdEmail/>}></Input>
              <Input name="password" control={control} errorMessage={errors.password?.message} leftIcon={<MdLock/>}></Input>
              <Button variant="secondary" onClick={handleSubmit(handleSubmitRegister)}>Criar minha conta</Button>
            </form>
          </ColumnTwo>
        </Container>
    </>
  )
}

export default Register

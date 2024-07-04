import Input from "../../Components/Input"
import * as S from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

import * as yup from 'yup'
import Logo from "../../Components/Logo"
import Title from "../../Components/Title"
import { Link } from "../../Components/Link"
import SignUp from "./component"
import { useAuth } from "../../Context/AuthContext"
import Button from "../../Components/Button"

type LoginInputs = {
  email: string
  password: string
}

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória').max(20, 'A sua senha deve conter no máximo 20 caracteres')
})

const Login = () => {
  const { signInRequest, loading } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) })

  const onSubmit = handleSubmit(async ({ email, password }: LoginInputs) => {
    const body = {
      email, password
    }
    try {
      await signInRequest(body)
    } catch (err) {
      throw err
    }
  })

  return (
    <S.Wrapper>
      <S.ContainerLogin>
        <S.WrapperTitle>
          <Logo />
          <Title>Entre na sua conta</Title>
        </S.WrapperTitle>
        <S.Form onSubmit={onSubmit}>
          <S.WrapperLogin>
            <Input
              placeholder="Informe o e-mail"
              type="email"
              label="Email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              placeholder="Informe sua senha"
              type="password"
              label="Senha"
              {...register('password')}
              error={errors.password?.message}
            />
            <Button size="sm" variant="green">{loading ? 'Entrando...' : 'Entrar'}</Button>
          </S.WrapperLogin>
        </S.Form>
        <Link path="/esqueceusenha">Esqueci minha senha</Link>
        <SignUp />
      </S.ContainerLogin>
    </S.Wrapper>
  )
}

export default Login

import { Link } from '../../../Components/Link'
import * as S from './styles'

const SignUp = () => {
  return (
    <S.WrapperSignUp>
      <S.Text>Ainda não tem conta?</S.Text>
      <Link path="/cadastro">Cadastre-se</Link>
    </S.WrapperSignUp>
  )
}

export default SignUp

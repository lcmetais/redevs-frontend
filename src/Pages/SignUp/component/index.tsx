import { Link } from '../../../Components/Link'
import * as S from './styles'

const SignIn = () => {
  return (
    <S.WrapperSignUp>
      <S.Text>Já possui conta?</S.Text>
      <Link path="/login">Faça Login</Link>
    </S.WrapperSignUp>
  )
}

export default SignIn;

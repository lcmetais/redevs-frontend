import * as S from './styles';
// import { FieldErrors } from 'react-hook-form';

type ErrorProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textErro?: any;
}

const ErrorText = ({ textErro }: ErrorProps) => {

  return <S.Error>{textErro}</S.Error>;
};

export default ErrorText;

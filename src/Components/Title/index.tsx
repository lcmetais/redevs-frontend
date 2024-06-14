import * as S from './styles'

type TitleProps ={
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <S.Title>{children}</S.Title>
  )
}

export default Title;

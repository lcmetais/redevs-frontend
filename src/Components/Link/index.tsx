import * as S from './styles'

type LinkProps = {
  children: React.ReactNode
  path: string
}

export const Link = ({children, path}: LinkProps) => {
  return (
    <S.LinkBlue to={path}>{children}</S.LinkBlue>
  )
}

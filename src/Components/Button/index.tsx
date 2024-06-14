import * as S from './styles'

import LoadingIcon from '../Icons/Loading'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'green'
  size?: 'sm' | 'md'
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => (
  <S.Wrapper variant={variant} size={size} disabled={disabled} {...props}>
    {!isLoading && children}
    {isLoading && <LoadingIcon isLoading={isLoading} />}
  </S.Wrapper>
)

export default Button

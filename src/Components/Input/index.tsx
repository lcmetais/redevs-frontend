import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
import clsx from 'clsx'
import formatPrice from '../../utils/format-price'
import { FiEye, FiEyeOff } from "react-icons/fi";

import * as S from './styles'

type InputPropsBase = {
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  type?: HTMLInputTypeAttribute | 'currency'
  prefix?: string;
}

export type InputProps = InputPropsBase & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react-refresh/only-export-components
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  error,
  id,
  type,
  value,
  prefix,
  className,
  ...props
}, ref) => {
  const cls = clsx(className, prefix ? 'hasPrefix' : '');
  const [inputType, setInputType] = useState('password');

  const handlePasswordTextType = () => {
    if(inputType === 'password') setInputType('text');
    if(inputType === 'text') setInputType('password');

    
  }

  return (
    <S.Container>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.InputContainer>
        {prefix && (
          <S.Prefix>
            <span>{prefix}</span>
          </S.Prefix>
        )}
        <S.Input className={cls} name={label} type={label === 'Senha'? inputType : type} id={id} ref={ref} value={type === 'currency' ? formatPrice(Number(value) / 100) : value} label={label} {...props} />
        {label && label === 'Senha' && (
          <S.PasswordIcon onClick={handlePasswordTextType}>
            {type === 'password' ? <FiEye /> : <FiEyeOff />}
          </S.PasswordIcon>
        )}
      </S.InputContainer>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Input)

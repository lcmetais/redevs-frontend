import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from 'react';
import * as S from './style';

type TImageInputProps = {
    label: string
    error?: string
};

type TInputProps = TImageInputProps & InputHTMLAttributes<HTMLInputElement>;

const ImageInput: ForwardRefRenderFunction<HTMLInputElement, TInputProps> = ({
    label, error, ...props
}, ref) => {
    return (
        <S.Wrapper>
            <S.Label htmlFor={label}>{label}</S.Label>
            <S.Input
                type='file'
                accept='image/*'
                multiple
                name={label}
                {...props}
                ref={ref}
            />
            {error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
}

export default forwardRef(ImageInput);

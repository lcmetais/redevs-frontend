import { ForwardRefRenderFunction, TextareaHTMLAttributes, forwardRef } from 'react';
import * as S from './style';
import ErrorText from '../ErrorText';

type TTextAreaBase = {
    label?: string
    error?: any
}

type TTextAreaProps = TTextAreaBase & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TTextAreaProps> = ({
    label, error, ...props
}, ref) => {
    return (
        <S.Wrapper>
            {label && <S.Label>{label}</S.Label>}
            <S.TextArea
                {...props}
                ref={ref}
            />
            {error && <ErrorText textErro={error} />}
        </S.Wrapper>
    );
}

export default forwardRef(TextArea);

import { ForwardRefRenderFunction, SelectHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

type TCategorySelectProps = {
    label: string
    error?: string
};

type TSelectProps = TCategorySelectProps & SelectHTMLAttributes<HTMLSelectElement>;

const optionsList = [
    {
        name: 'Acessórios',
        value: 'acessorios'
    },
    {
        name: 'Espelho',
        value: 'espelho'
    },
    {
        name: 'Esquadrias',
        value: 'esquadrias',
    },
    {
        name: 'Ferramentas',
        value: 'ferramentas'
    },
    {
        name: 'Janelas',
        value: 'janelas',
    },
    {
        name: 'Perfil',
        value: 'perfil'
    },
    {
        name: 'Portas',
        value: 'portas',
    },
    {
        name: 'Serviços',
        value: 'serviços'
    },

];

const CategorySelect: ForwardRefRenderFunction<HTMLSelectElement, TSelectProps> = ({
    label, error, ...props
}: TCategorySelectProps, ref) => {
    return (
        <S.Wrapper>
            <S.Label htmlFor={label}>{label}</S.Label>
            <S.Select
                key={label}
                name={label}
                ref={ref}
                {...props}
            >
                <option id='disable-initial-select' value='' selected disabled>Selecione Categoria</option>
                {
                    optionsList.map(optionInList => {
                        return (
                            <option
                                id={optionInList.value}
                                value={optionInList.value}
                            >
                                {optionInList.name}
                            </option>
                        );
                    })
                }
            </S.Select>
            {error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
}

export default forwardRef(CategorySelect);

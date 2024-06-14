import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Logo from '../../Components/Logo';
import Title from '../../Components/Title';
import SignIn from './component';
import * as S from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../Context/AuthContext';
import { maskPhone, unmaskPhone } from '../../utils/mask';
import { useState } from 'react';

type TSignUpInput = {
    name: string,
    email: string,
    password: string,
    phone: string,
}

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .required('Nome é obrigatório'),
    email: yup
        .string()
        .email()
        .required('Email é obrigatório'),
    password: yup
        .string()
        .max(20, 'A sua senha deve conter no máximo 20 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'A senha deve conter ao menos 1 letra maiúscula, 1 letra minúscula e 1 número')
        .required('Senha é obrigatória'),
    phone: yup
        .string()
        .required('Número telefônico é obrigatório'),
});

const SignUpPage = () => {
    const { signUpRequest } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<TSignUpInput>({ resolver: yupResolver(signUpSchema) });

    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maskedPhone = maskPhone(e.target.value);
        setPhone(maskedPhone);
        setValue('phone', maskedPhone);
    };

    const onSubmit = handleSubmit(async ({ name, email, password, phone }: TSignUpInput) => {
        const phoneUnmasked = unmaskPhone(phone);

        const body = {
            name: name,
            email: email,
            password: password,
            phone: phoneUnmasked
        }
        try {
            signUpRequest(body);
        } catch (err) {
            throw err;
        }
    });

    return (
        <S.Wrapper>
            <S.ContainerSignUp>
                <S.WrapperTitle>
                    <Logo />
                    <Title>Cadastre sua conta</Title>
                </S.WrapperTitle>
                <S.Form onSubmit={onSubmit}>
                    <S.WrapperSignUp>
                        <Input
                            placeholder='Informe seu nome'
                            type='name'
                            label='Nome'
                            {...register('name')}
                            error={errors.name?.message}
                        />
                        <Input
                            placeholder="Informe o e-mail"
                            type="email"
                            label="Email"
                            {...register('email')}
                            error={errors.email?.message}
                        />
                        <Input
                            placeholder="Informe sua senha"
                            type="password"
                            label="Password"
                            {...register('password')}
                            error={errors.password?.message}
                        />
                        <Input
                            placeholder="Informe seu número de telefone"
                            type="phone"
                            label="Telefone"
                            {...register('phone', {
                                onChange(event: React.ChangeEvent<HTMLInputElement>) {
                                    handlePhoneChange(event);
                                }
                            })}
                            error={errors.phone?.message}
                        />
                        <Button size="sm" variant="green">Cadastrar</Button>
                    </S.WrapperSignUp>
                </S.Form>
                <SignIn />
            </S.ContainerSignUp>
        </S.Wrapper>
    )
}

export default SignUpPage;

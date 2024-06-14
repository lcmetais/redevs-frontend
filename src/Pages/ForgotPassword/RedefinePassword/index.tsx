import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import * as yup from 'yup'
import Button from "../../../Components/Button"
import Input from "../../../Components/Input"
import Logo from "../../../Components/Logo"
import Title from "../../../Components/Title"
import { useAuth } from "../../../Context/AuthContext"
import * as S from "./styles"

type TRedefinePasswordInputs = {
    password: string
}

const redefinePasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(4, 'A senha deve conter ao menos 4 caracteres.')
        .max(20, 'A sua senha deve conter no máximo 20 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'A senha deve conter ao menos 1 letra maiúscula, 1 letra minúscula e 1 número')
        .required('Senha é obrigatória'),
})

const RedefinePassword = () => {
    let [searchParams] = useSearchParams();
    const { redefinePassword } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TRedefinePasswordInputs>({ resolver: yupResolver(redefinePasswordSchema) });

    const token = searchParams.get('token');

    const onSubmit = handleSubmit(async ({ password }: TRedefinePasswordInputs) => {
        try {
            redefinePassword({ password, token });
        } catch (err) {
            throw err
        }
    });

    return (
        <S.Wrapper>
            <S.ContainerLogin>
                <S.WrapperTitle>
                    <Logo />
                    <Title>Alteração de Senha</Title>
                </S.WrapperTitle>
                <S.Form onSubmit={onSubmit}>
                    <S.WrapperLogin>
                        <Input
                            placeholder="Digite sua nova senha aqui"
                            type="password"
                            label="Senha"
                            {...register('password')}
                            error={errors.password?.message}
                        />
                        <Button size="sm" variant="green">Confirmar</Button>
                    </S.WrapperLogin>
                </S.Form>
            </S.ContainerLogin>
        </S.Wrapper>
    );
}

export default RedefinePassword;


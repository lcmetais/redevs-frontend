import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import Button from "../../Components/Button"
import Input from "../../Components/Input"
import Logo from "../../Components/Logo"
import Title from "../../Components/Title"
import { useAuth } from "../../Context/AuthContext"
import * as S from "./styles"

type TForgotPasswordInputs = {
    email: string
}

const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email().required('Email é obrigatório'),
})

const ForgotPassword = () => {
    const { setTokenToRedefinePassword } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TForgotPasswordInputs>({ resolver: yupResolver(forgotPasswordSchema) })

    const onSubmit = handleSubmit(async ({ email }: TForgotPasswordInputs) => {

        try {
            setTokenToRedefinePassword(email);
        } catch (err) {
            throw err
        }
    })

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
                            placeholder="Informe o e-mail"
                            type="email"
                            label="Email"
                            {...register('email')}
                            error={errors.email?.message}
                        />
                        <Button size="sm" variant="green">Confirmar</Button>
                    </S.WrapperLogin>
                </S.Form>
            </S.ContainerLogin>
        </S.Wrapper>
    );
}

export default ForgotPassword;


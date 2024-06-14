import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../Context/AuthContext';
import { deleteUser, updateUser } from '../../Services/user';
import { TUser } from '../../types/user-type';
import { maskPhone, unmaskPhone } from '../../utils/mask';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';
import Modal from '../Modal';

const dataUserUpdateSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string()
        .max(20, 'A sua senha deve conter no máximo 20 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'A senha deve conter ao menos 1 letra maiúscula, 1 letra minúscula e 1 número'),
    phone: yup.string(),
});

type TUpdateUserData = {
    name?: string,
    email?: string,
    password?: string,
    phone?: string,
}

const UserDataBoard = () => {
    const [deactivateForm, setDeactivateForm] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<TUpdateUserData>({ resolver: yupResolver(dataUserUpdateSchema) });
    const { user } = useAuth();

    const objectToupdateDataUser: TUser = {} /* Objeto que será usado para atualizar o dados do usuário */

  const onSubmit = handleSubmit(async ({ name, email, password, phone }: TUpdateUserData) => {
        try {
            /* Verifica se um novo nome foi passado e se ele é diferente do nome atual do usuário */
            if (!!name && name != user?.name) {
                objectToupdateDataUser.name = name;
            }

            /* Verifica se um novo email foi passado e se ele é diferente do email atual do usuário */
            if (!!email && email != user?.email) {
                objectToupdateDataUser.email = email;
            }

            /* Verifica se uma senha foi informada */
          if (password) {
                objectToupdateDataUser.password = password;
            }

            /* Verifica se um novo telefone foi passado e se ele é diferente do telefone atual do usuário */
            if (!!phone && unmaskPhone(phone) != user?.phone) {
                objectToupdateDataUser.phone = unmaskPhone(phone);
            }

            await updateUser({
                id: user.id,
                name: objectToupdateDataUser.name,
                email: objectToupdateDataUser.email,
                password: objectToupdateDataUser.password
            });
        } catch (err) {
            alert('Não foi possível atualizar seus dados, tente novamente mais tarde!');
            throw err;
        } finally {
            setDeactivateForm(true);
        }
    });

    useEffect(() => {
        setValue('name', user.name);
        setValue('email', user.email);
        setValue('phone', maskPhone(user.phone));
    }, [setValue, user]);

    return (
        <>
            <S.Wrapper>
                <S.HeaderBoard>
                    <h1>Dados do Usuário</h1>
                    <S.Line />
                </S.HeaderBoard>
                <S.Form onSubmit={onSubmit}>
                    <Input
                        label='Nome'
                        disabled={deactivateForm}
                        type='text'
                        {...register('name', { required: false })}
                        error={errors.name?.message}
                    />
                    <Input
                        label='Email'
                        disabled={deactivateForm}
                        type='text'
                        {...register('email', { required: false })}
                        error={errors.email?.message}
                    />
                    <Input
                        label='Senha'
                        disabled={deactivateForm}
                        type="password"
                        {...register('password', { required: false })}
                        error={errors.password?.message}
                    />
                    <Input
                        label='Número de Telefone'
                        disabled={deactivateForm}
                        type="text"
                        {...register('phone', { required: false })}
                        error={errors.phone?.message}
                    />
                    <S.ButtonWrapper>
                        <Button variant='secondary' disabled={deactivateForm}>Atualizar Dados</Button>
                    </S.ButtonWrapper>
                </S.Form>
                <S.ButtonWrapper>
                    <Button onClick={() => setDeactivateForm(!deactivateForm)}>Editar Meus Dados</Button>
                    <Button onClick={() => setIsOpen(!isOpen)}>Deletar usuário</Button>
                </S.ButtonWrapper>
            </S.Wrapper>

            <Modal isOpen={isOpen}>
                <S.ModalWrapper>
                    <h3>Realmente deseja apagar sua conta?</h3>
                    <p>Caso sua conta for deletada todos os seus anúncios seram excluídos juntos, e caso volte a criar uma nova conta eles não poderam se recuperados.</p>
                    <Button onClick={async () => await deleteUser({ id: user.id })}>Apagar conta</Button>
                    <Button onClick={() => setIsOpen(!open)}>Fechar</Button>
                </S.ModalWrapper>
            </Modal>
        </>
    );
}

export default UserDataBoard;

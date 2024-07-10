import { useState } from 'react';
import { TCompleteUser } from '../../types/user-type';
import { maskPhone } from '../../utils/mask';
import Button from '../Button';
import * as S from './styles';
import { updateUserRole } from '../../Services/admin';



type TProps = {
    user: TCompleteUser
}

const UserCard = ({ user }: TProps) => {
    const [userRole, setUserRole] = useState(user.role);

    const updatingRole = async () => {
        const response = await updateUserRole(user.id);

        if (response.messge === 'Permições do usuário atualizadas com sucesso') {
            if (userRole === "ADMIN") setUserRole("USER");
            if (userRole === "USER") setUserRole("ADMIN");
        }
    }

    return (
        <S.Wrapper>
            <S.UserDataWrapper>
                <S.UserData>Nome: {user.name}</S.UserData>
                <S.UserData>Telefone: <a
                    href={`https://wa.me/${user.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >{maskPhone(user.phone)}</a></S.UserData>
                <S.UserData>Email: {user.email}</S.UserData>
                <S.UserData>Se cadastrou em: {new Intl.DateTimeFormat('pt-BR', {}).format(new Date(user.createdAt))}</S.UserData>
                <S.UserData>Última atualização: {new Intl.DateTimeFormat('pt-BR', {}).format(new Date(user.updatedAt))}</S.UserData>
                <S.UserData>Tipo de Usuário: {user.role === 'ADMIN' ? 'Administrador' : 'Usuário'}</S.UserData>
            </S.UserDataWrapper>
            <Button onClick={async () => await updatingRole()} >{userRole === 'ADMIN' ? 'Remover permições de administrador' : 'Dar permições de administrador'}</Button>
        </S.Wrapper>
    );
}

export default UserCard;

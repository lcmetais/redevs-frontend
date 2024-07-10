import { useEffect, useState } from 'react';
import * as S from './styles';
import { getAllUsers } from '../../../Services/admin';
import UserCard from '../../../Components/UserCard';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const arrLoading = Array.from({ length: 24 }, (_, index) => index + 1);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const usersData = await getAllUsers();
            setUsers(usersData);


            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <S.Wrapper>
            <S.CardWrapper>
                {isLoading ? arrLoading.map((item: any) => <S.LoadingCard key={item} />) : users.map((user) => <UserCard user={user} />)}
            </S.CardWrapper>
        </S.Wrapper>
    );
}

export default Users
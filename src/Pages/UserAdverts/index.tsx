import { useEffect, useState } from 'react';
import ElementList from '../../Components/ElementList';
import { deleteAdvert, getAllAdvertByUser } from '../../Services/advert';
import { TAdvert } from '../../types/advert-type';
import * as S from './styles';
import { useAuth } from '../../Context/AuthContext';

const UserAdverts = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [userAdverts, setUserAdverts] = useState<TAdvert[]>([]);

    const getUserAdverts = async () => {
        try {
            setLoading(true);
            const response = await getAllAdvertByUser({ userId: user.id });

            setUserAdverts(response);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserAdverts();
    }, [user.id]);

    const handleDeleteAdvert = async (advertId: string) => {
        try {
            // Lógica para deletar o anúncio
            await deleteAdvert({ id: advertId });

            // Atualiza a lista local removendo o anúncio excluído
            getUserAdverts();
        } catch (error) {
            throw error
        }
    };

    return (
        <S.Wrapper>
            {loading ? (
                <p>Carregando anúncios...</p>
            ) : userAdverts.length > 0 ? (
                userAdverts.map((advertInList: TAdvert) => (
                    <ElementList
                        key={advertInList.id}
                        id={advertInList.id}
                        title={advertInList.name}
                        images={advertInList.images}
                        value={advertInList.value}
                        shortDescription={advertInList.shortDescription}
                        longDescription={advertInList.longDescription}
                        phoneNumber={advertInList.specificPhone}
                        category={advertInList.category}
                        onDelete={() => handleDeleteAdvert(advertInList.id)}
                    />
                ))
            ) : (
                <h2>Nenhum anúncio criado ainda, crie anúncios para vê-los aqui!</h2>
            )}
        </S.Wrapper>
    );
};

export default UserAdverts;

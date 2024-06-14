import { useEffect, useState } from 'react';
import ElementList from '../../../Components/ElementList';
import { approveAdvert, getAllAdverts } from '../../../Services/admin';
import { TAdvert } from '../../../types/advert-type';
import * as S from './styles';
import { deleteAdvert } from '../../../Services/advert';
import Pagination from '../../../Components/Pagination';

type TAdminAdvertManager = {
    data: TAdvert[]
    count: number
    currPage: number
    nextPage: number
    prevPage: number
    lastPage: number
}

const AdminAdvertManager = () => {
    const [loading, setLoading] = useState(false);
    const [adverts, setAdverts] = useState<TAdminAdvertManager>({
        data: [],
        count: 0,
        currPage: 1,
        nextPage: 2,
        lastPage: 1,
        prevPage: 0
    });

    const getAdverts = async (take: number, skip: number) => {
        try {
            setLoading(true);
            const response = await getAllAdverts({ take, skip });

            setAdverts(response);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAdvert = async (advertId: string) => {
        try {
            // Lógica para deletar o anúncio
            await deleteAdvert({ id: advertId });

            // Atualiza a lista local removendo o anúncio excluído
            getAdverts(24, 1);
        } catch (error) {
            throw error
        }
    };

    const handleAproveAdvert = async (advertId: string) => {
        try {
            // Lógica para deletar o anúncio
            await approveAdvert({ id: advertId });

            // Atualiza a lista local removendo o anúncio excluído
            getAdverts(24, 1);
        } catch (error) {
            throw error
        }
    };

    const handlePageChange = async (skip: number) => {
        await getAdverts(24, skip);
    }

    useEffect(() => {
        getAdverts(24, 1);
    }, []);

    return (
        <S.Wrapper>
            {
                loading
                    ? (<p>Carregando anúncios...</p>)
                    : adverts.data.length > 0
                        ?
                        adverts.data.map((advertInList: TAdvert) => (
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
                                onApproved={() => handleAproveAdvert(advertInList.id)}
                            />
                        ))
                        : (<h2>Nenhum anúncio criado ainda!</h2>)
            }
            {
                adverts.data.length > 0
                    ?
                    <Pagination
                        key={'pagination-component'}
                        itemsPerPage={adverts.count}
                        onPageChange={handlePageChange}
                        totalItems={adverts.count}
                    />
                    : ''
            }
        </S.Wrapper>
    );
};

export default AdminAdvertManager;

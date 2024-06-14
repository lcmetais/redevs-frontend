import { useEffect, useState } from 'react';
import { getAllAdverts } from '../../Services/advert';
import { TAdvert } from '../../types/advert-type';
import Card from '../Card';
// import CardSkeleton from '../Card/CardSkeleton';
import { useSearch } from '../../Context/SearchContext';
import SkeletonCard from '../Card/SkeletonCard';
import Pagination from '../Pagination';
import * as S from './styles';

type TSectionProps = {
    sectionTitle: string
}

type TGetAdvertsResponse = {
    data: TAdvert[]
    count: number
    currPage: number
    nextPage: number
    prevPage: number
    lastPage: number
}

const arrLoading = Array.from({ length: 24 }, (_, index) => index + 1);

const CardsSection = ({
    sectionTitle
}: TSectionProps) => {
    const { searchText } = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const [advertCards, setAdvertCards] = useState<TGetAdvertsResponse>({
        data: [],
        count: 0,
        currPage: 1,
        nextPage: 2,
        lastPage: 1,
        prevPage: 0
    });

    const getAdverts = async (take = 24, skip = 1, name = searchText) => {
        setIsLoading(true);

        try {
            const response = await getAllAdverts({ skip, take, name });

            setAdvertCards(response);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const handlePageChange = async (skip: number) => {
        await getAdverts(24, skip, searchText);
    }

    useEffect(() => {
        getAdverts();
    }, [searchText]);

    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <h2 style={{ color: '#3c611e' }}>{sectionTitle}</h2>
            </S.HeaderWrapper>
            <S.CardsWrapper>
                {
                    isLoading
                        ? arrLoading.map((item: any) => <SkeletonCard key={item} />)
                        : (
                            advertCards.data && advertCards.data.length > 0
                                ? advertCards.data.map((anuncio, index) => {
                                    return (
                                        <Card
                                            id={anuncio.id}
                                            image={anuncio.images}
                                            name={anuncio.name}
                                            value={anuncio.value}
                                            specificPhone={anuncio.specificPhone}
                                            shortDescription={anuncio.shortDescription}
                                            longDescription={anuncio.longDescription}
                                            category={anuncio.category}
                                            key={index}
                                        />
                                    );
                                })
                                : <h1>Nenhum anúncio encontrado</h1>
                        )

                }
            </S.CardsWrapper>
            {
                advertCards.data.length > 0
                    ? <Pagination
                        key={'pagination-component'}
                        itemsPerPage={advertCards.count}
                        onPageChange={handlePageChange}
                        totalItems={advertCards.count}
                    />
                    : ''
            }
        </S.Wrapper>
    );
}

export default CardsSection

import { useState } from 'react';
import { TImageObject } from '../../types/image-object-type';
import { maskPhone } from '../../utils/mask';
import Button from '../Button';
import Modal from '../Modal';
import AdvertContent from '../Modal/AdvertContent';
import * as S from './styles';

type TElementList = {
    id: string
    title: string
    phoneNumber: string
    value: number
    images: TImageObject[]
    shortDescription: string
    longDescription: string
    category: string
    onDelete?: () => void
    onApproved?: () => void
}

const ElementList = ({ id, title, value, phoneNumber, images, shortDescription, longDescription, category, onDelete, onApproved }: TElementList) => {
    const [isOpen, setIsOpen] = useState(false);
    const [firstImage] = images;

    const handleOpenModal = (state: boolean) => {
        setIsOpen(state);
    };

    return (
        <>
            <S.Wrapper>
                <S.Image src={firstImage?.imageStorageUrl}></S.Image>
                <S.InternalWrapper>
                    <S.InfoWrapper>
                        <S.Title>{title}</S.Title>
                        <S.ValueAndPhoneWrapper>
                            <S.BasicData>Valor: R$ {new Intl.NumberFormat('pt-BR', {
                                minimumFractionDigits: 2,
                            }).format(value / 100)}</S.BasicData>
                            <S.BasicData>Contato: {maskPhone(phoneNumber)}</S.BasicData>
                        </S.ValueAndPhoneWrapper>
                    </S.InfoWrapper>
                    <S.ButtonWrapper>
                        {
                            location.pathname === '/admin/anunciosparaaprovar'
                                ? (
                                    <>
                                        <Button onClick={onApproved}>Aprovar</Button>
                                        <Button onClick={() => handleOpenModal(true)}>Visualizar</Button>
                                        <Button onClick={onDelete} variant='tertiary'>Negar</Button>
                                    </>
                                )
                                : (
                                    <>
                                        <Button onClick={() => handleOpenModal(true)}>Editar</Button>
                                        <Button onClick={onDelete}>Apagar</Button>
                                    </>
                                )
                        }
                    </S.ButtonWrapper>
                </S.InternalWrapper>
            </S.Wrapper>

            {
                location.pathname === '/admin/anunciosparaaprovar'
                    ? (
                        <Modal isOpen={isOpen} advertOnlyRead>
                            <AdvertContent
                                idProp={id}
                                imageProp={images}
                                nameProp={title}
                                valueProp={value}
                                shortDescriptionProp={shortDescription}
                                longDescriptionProp={longDescription}
                                specificPhoneProp={phoneNumber}
                                categoryProp={category}
                                setIsOpen={handleOpenModal}
                                isOnlyRead
                            />
                        </Modal>
                    )
                    : (
                        <Modal isOpen={isOpen} advertEdit>
                            <AdvertContent
                                idProp={id}
                                imageProp={images}
                                nameProp={title}
                                valueProp={value}
                                shortDescriptionProp={shortDescription}
                                longDescriptionProp={longDescription}
                                specificPhoneProp={phoneNumber}
                                categoryProp={category}
                                setIsOpen={handleOpenModal}
                                isEditable
                            />
                        </Modal>
                    )
            }
        </>
    );
}

export default ElementList;
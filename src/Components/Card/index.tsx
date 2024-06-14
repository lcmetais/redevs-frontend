// import { useLocation, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import AdvertContent from '../Modal/AdvertContent'
import * as S from './styles'

import whatsappIcon from '/images/whatsapp-icon.svg'
import { TImageObject } from '../../types/image-object-type'

export type CardProps = {
  id: string
  image: TImageObject[]
  name: string
  value: number
  shortDescription: string
  longDescription: string
  specificPhone: string
  category: string
}

function Card({
  id,
  image,
  name,
  value,
  shortDescription,
  longDescription,
  specificPhone,
  category
}: CardProps) {
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState<TImageObject[]>([]);

  useEffect(() => {
    setImages(image);
  }, []);

  useEffect(() => {
    if (openModal) {
      setOpenModal(true);
    }
  }, [openModal]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <S.ProductWrapper>
        <S.ProductImage src={image[0]?.imageStorageUrl} alt={image[0]?.originalName} key={image[0]?.id} />
        <S.ProductDescriptionWrapper>
          <div>
            <S.ProductTitle>{name}</S.ProductTitle>
          </div>
        </S.ProductDescriptionWrapper>
        <div>
          <S.ProductShortDescription>{shortDescription}</S.ProductShortDescription>
        </div>
        <S.ProductDescriptionWrapper>
          <div>
            <S.OfferDescription>Valor</S.OfferDescription>
            <S.OfferPrice>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(value / 100)}
            </S.OfferPrice>
          </div>
          <S.WhatsappButton>
            <a
              href={`https://wa.me/${specificPhone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} />{' '}
            </a>
          </S.WhatsappButton>
          <div>
            <Button onClick={handleOpenModal}>Ver Mais</Button>
          </div>
        </S.ProductDescriptionWrapper>
      </S.ProductWrapper >

      <Modal isOpen={openModal} advertOnlyRead>
        <AdvertContent
          idProp={id}
          imageProp={image}
          nameProp={name}
          valueProp={value}
          shortDescriptionProp={shortDescription}
          longDescriptionProp={longDescription}
          specificPhoneProp={specificPhone}
          categoryProp={category}
          setIsOpen={setOpenModal}
          isOnlyRead
        />
      </Modal>
    </>
  )
}

export default Card

import styled from 'styled-components'

export const ProductWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  width: 100%;
  max-width: 300px;
  gap: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 10px gray;
  }
`

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
`

export const ProductTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #101828;

  display: inline-block;
  overflow: hidden;

  max-width: 260px;
`

export const OfferDescription = styled.h3`
  font-family: 'Inter';
  font-style: normal;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: #475467;
`

export const OfferPrice = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: #1570ef;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
  object-fit: cover;
`

export const WhatsappButton = styled.div`
  display: flex;
  border-radius: 16px;
  padding: 4px;
  align-items: center;
  gap: 0px 8px;
`

export const ProductShortDescription = styled.p`
  font-family: 'Inter';
  font-style: normal;

  font-weight: 700;
  font-size: 16px;
  line-height: 30px;

  color: #1570ef;
`;

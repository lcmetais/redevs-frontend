import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperSignUp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;

    justify-conttent: center;
    align-items: center;
  `}
`
export const Text = styled.span`
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: #475467;
`

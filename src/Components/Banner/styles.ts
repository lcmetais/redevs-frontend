import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperBanner = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin: 16px;
`

export const Banner = styled.img`
  max-height: 350px;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  ${media.lessThan('medium')`
    min-width: 430px;
    max-height: 350px;
  `}
`

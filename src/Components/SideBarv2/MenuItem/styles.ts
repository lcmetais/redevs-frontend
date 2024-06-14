import { ChevronDownIcon } from '@radix-ui/react-icons'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  * {
    font-family: 'Inter', sans-serif;
  }
`

type WrapperLinksParams = {
  activePadding: boolean
}

export const WrapperLinks = styled.div<WrapperLinksParams>`
  ${({ activePadding }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    cursor: pointer;
    width: 90%;
    padding-left: ${activePadding ? 0 : '40px'};
  `}
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  width: 100%;
`

const TitleModifier = {
  active: () => css`
    fill: #53b1fd;
    span {
      color: #53b1fd;
    }
  `
}

type TitleProps = {
  active?: boolean
  activeCursor?: boolean
}

export const Title = styled.div<TitleProps>`
  ${({ active, activeCursor }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: ${activeCursor ? 'pointer' : 'default'};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #98a2b3;
    margin-bottom: 16px;
    ${!!active && TitleModifier.active()}
  `}
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
`

type ChevronIconProps = {
  active?: boolean
}

export const ChevronIcon = styled(ChevronDownIcon)<ChevronIconProps>`
  transition: transform 0.2s ease;
  color: #98a2b3;
  align-self: center;
`

const LinksModifiers = {
  active: () => css`
    color: #53b1fd;
  `
}

type LinksProps = {
  active?: boolean
}

export const Links = styled.button<LinksProps>`
  ${({ active }) => css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 12px;
    font-size: 14px;
    background: none;
    border: none;

    color: #98a2b3;
    &:hover {
      color: #1d29;
    }

    ${!!active && LinksModifiers.active()}
  `}
`

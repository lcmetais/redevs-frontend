import styled, { css } from 'styled-components';

type AsideParams = {
    isOpen?: boolean
    isClose?: boolean
}

const AsideModifiers = {
    isOpen: () => css`
    flex-direction: column;
    position: absolute;
    
    gap: 10px;
    min-width: 250px;
    z-index: 100;
  `,

    isClose: () => css`
    min-width: 48px;
  `,
}

export const Aside = styled.aside<AsideParams>`
  ${({ isOpen, isClose }) => css`
    display: flex;

    height: 100vh;
    padding: 20px;

    border-right: 1px solid #2c9038;

    background: #fff;

    ${!!isOpen && AsideModifiers.isOpen()}  
    ${!!isClose && AsideModifiers.isClose()}
  `}
`;

export const CloseSidebarIcon = styled.a`
  width: auto;

  & > svg {
    width: 32px;
    height: 32px;
  }
`;

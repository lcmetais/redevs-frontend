import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;

    height: 100%;

    background: ${theme.gradiente.backgroundGreen};

    background-size: cover;
  `}
`;

export const WrapperContent = styled.div`
  overflow-y: auto;

  width: 100%;
  margin: 20px;
  padding: 32px 32px;
  flex: 1;
  border-radius: 20px;
  
  border: 1px solid red;

  background-color: #FFF;

  &::-webkit-scrollbar {
    display: none;
  }
`

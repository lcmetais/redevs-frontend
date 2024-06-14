import styled, { css, DefaultTheme } from 'styled-components';

export const Error = styled.p<{ theme: DefaultTheme }>`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

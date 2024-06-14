import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            font-family: ${theme.font.family};
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    `}
`;
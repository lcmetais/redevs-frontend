import styled from "styled-components";
import media, { generateMedia } from "styled-media-query";
import theme from "../../styles/styled-theme";

const customMedia = generateMedia({
    medium: '650px',
    xmedium: '830px',
    huge: '1000px',
});

export const Wrapper = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    width: 100%;
    height: 140px;
    border-radius: 10px;

    border: 2px solid #79c13d;
    
    ${customMedia.greaterThan('medium')`
        box-shadow: 5px 5px 40px rgba(8, 108, 51, 0.4);
    `}

    ${customMedia.lessThan('medium')`
        flex-direction: column;

        height: fit-content;
        width: 240px;
        gap: 24px;
    `}
`;

export const InternalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 70%;
    padding-bottom: 16px;

    padding-right: 8px;
    
    ${customMedia.lessThan('xmedium')`
        flex-direction: column;
        
        padding-right: 0;
        gap: 8px;
    `}
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100%;
    width: 80%;

    text-align: center;

    ${customMedia.lessThan('medium')`
        width: 100%;
    `}
`;

export const ValueAndPhoneWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    text-align: center;

    ${customMedia.lessThan('huge')`
        flex-direction: column;
    `}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    
    flex-direction: row;
    gap: 8px;

    height: fit-content;

    padding-left: 20px;

    ${customMedia.lessThan('medium')`
        padding-left: 0;

        flex-direction: column;
    `}
`;

export const Title = styled.h2`
    color: ${theme.colors.blue};
    text-decoration: underline;
`;

export const BasicData = styled.h3`
    width: 100%;

    text-align: center;

    ${customMedia.lessThan('medium')`
        display: flex;
        justify-content: center;

        margin-top: 8px;
    `}
`;

export const Image = styled.img`
    height: 100%;
    width: 140px;

    object-fit: cover;

    border-radius: 5px 0 0 5px;

    ${customMedia.lessThan('medium')`
        border-radius: 5px 5px 5px 5px;
    `}
`;

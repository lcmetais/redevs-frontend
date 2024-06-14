import styled from "styled-components";
import media from "styled-media-query";

// * CSS do componente interno ReadOnlyAdvertModalContent
export const WrapperReadOnly = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    gap: 8px;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #529048;

        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #d0e2e1;
        
        border-radius: 10px;
    }
`;

export const ImageSliderWrapper = styled.div`
    width: 100%;
    max-height: 400px;
    margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
    width: 100%;
`;

export const TitleReadOnly = styled.h1`
    text-align: center;
`;

export const Value = styled.h2`
    text-align: start;
`;

export const DetailsWrapper = styled.div`
    overflow-y: auto;

    width: 85%;
    max-height: 200px;
    padding: 10px;

    border: 1px solid green;

    &>p {
        text-align: justify;
        white-space: pre-wrap;

        margin: 0;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #529048;

        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #d0e2e1;

        border-radius: 10px;
    }
`;

export const ButtonWrapperReadOnly = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 10px;
    padding: 5px;
`;

export const WhatsappButton = styled.a`
    display: flex;
    align-items: center;

    border: 1px solid #529048;

    border-radius: 10px;
    padding: 3px;

    
    color: white;
    background-color: #529048;
    
    text-decoration: none;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    &:hover {
        background-color: #d0e2e1;
        border-color: #d0e2e1;
    }
`;

// * CSS do componente interno EditableAdvertModalContent
export const WrapperEditable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    overflow-x: auto;

    gap: 32px;
    width: 100%;
    height: 100%;
    padding-bottom: 15px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #529048;

        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #d0e2e1;

        border-radius: 10px;
    }

    ${media.lessThan('medium')`
        gap: 8px;
    `}
`;

export const CloseModalButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    width: 100%;
`;

export const CloseIcon = styled.a`
    cursor: pointer;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;

    width: 80%;
`;

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 16px;
    width: 80%;
`;

export const NoInputWrapper = styled.div`
    display: flex;
    justify-content: center;

    gap: 8px;
`;

export const ButtonWrapperEditable = styled.div`
    display: flex;
    justify-content: center;

    width: 30%;
`;

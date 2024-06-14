import styled from "styled-components";

export const Wrapper = styled.div`
    border: 2px solid transparent;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgb(8, 108, 51, 0.4);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;
    width: 100%;
    height: 640px;
`;

export const HeaderBoard = styled.div`
    background-color: lightgreen;
    width: 100%;

    text-align: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;

    gap: 16px;

    height: fit-content;
`;

export const Line = styled.hr`
    width: 100%;
    height: 2px;
    background-color: rgb(8, 108, 51, 0.4);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
    width: 70%;
`;

// Modal
export const ModalWrapper = styled.div`
    width: 360px;
    height: 360px;
    gap: 24px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        text-align: center;
    }

    & > h3 {
        text-align: center;
    }
`;

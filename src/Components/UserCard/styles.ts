import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;
    gap: 4px;
    max-width: 400px;
    width: 100%;
    height: fit-content;
    border-radius: 10px;

    border: 2px solid #027A48;
`;

export const UserDataWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const UserData = styled.h1`
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`;
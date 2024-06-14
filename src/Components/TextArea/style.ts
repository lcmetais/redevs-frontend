import styled from "styled-components";

export const Label = styled.label`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    text-transform: capitalize;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #344054;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;

    &:focus-within {
        ${Label} {
            color: #2c9038;
        }
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 125px;
    border-radius: 7px;
    padding: 8px 4px;
    
    border: 1px solid #D0D5DD;
    
    font-style: normal;
    
    font-weight: 400;
    font-size: 12px;
    
    background-color: #ffffff;
    color: #667085;

    display: flex;
    align-items: center;

    &:focus-within {
        outline: 2px solid #2c9038;
        
        border: none;

        &::placeholder {
        color: #2c9038;
        }
    }

    &::placeholder {
        color: #667085;

        font-size: 14px;
        letter-spacing: 1.5px;
    }

    &:disabled {
        background: #d9d9d9;

        cursor: not-allowed;
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

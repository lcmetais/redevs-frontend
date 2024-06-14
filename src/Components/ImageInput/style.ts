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

    width: 100%;
    gap: 8px;

    &:focus-within {
        ${Label} {
            color: #2c9038;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;

    width: 100%;
`;

export const Input = styled.input`
    border-radius: 8px;

    border: 1px solid #D0D5DD;

    &:focus-within {
        border-color: #2c9038;
    }
`;

export const Error = styled.span`
  margin-top: 3px;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;

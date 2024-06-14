import styled from "styled-components";

export const Label = styled.label`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    text-transform: capitalize;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #344054;

    &:focus-within {
        border-color: green;
    }
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

export const Select = styled.select`
    border-color: #D0D5DD;

    border-radius: 5px;

    &:focus-within {
        outline: 2px solid #2c9038;
    }
`;

export const Error = styled.span`
  margin-top: 3px;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;

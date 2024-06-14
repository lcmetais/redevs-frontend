import styled from "styled-components";

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  line-height: 20px;
  color: #344054;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;

  &:focus-within {
    ${Label} {
      color: #2c9038; /* Altere para a cor desejada quando o input estiver focado */
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Prefix = styled.div`
  padding: 23px 20px;
  border-radius: 7px 0px 0px 7px;
  border: 1px solid #D1D2D4;
  background: #F2F4F7;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #667085;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #D0D5DD;
  border-radius: 7px;
  padding: 16px 0;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #667085;

  display: flex;
  align-items: center;
  text-indent: 16px;

  &:focus-within {
    outline: 2px solid #2c9038;
    border: none;

    &::placeholder {
      color: #2c9038; /* Altere para a cor desejada quando o input estiver focado */
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

  &.hasPrefix {
    border-radius: 0px 7px 7px 0px !important;
  }
`;

export const Error = styled.span`
  margin-top: 3px;

  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: red;
`;

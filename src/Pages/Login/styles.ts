import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(208, 226, 225, 0.4);;
`
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  justify-content: center;
  align-items: center;
`

export const ContainerLogin = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 56px 24px;
  gap: 32px;
  border-radius: 20px;
  border: 2px solid #79c13d;

  box-shadow: 5px 5px 40px rgba(8, 108, 51, 0.4);
  background-color: white;
`

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export const Form = styled.form`
  width: 100%;
`


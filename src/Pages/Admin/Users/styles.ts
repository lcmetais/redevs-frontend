import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    
    gap: 8px;
    width: 100%;
`;

export const LoadingCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 100px;
  border-radius: 8px;

  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &::after {
    content: '';
    display: block;

    margin-top: 20px;
  }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    width: 100%;
    gap: 24px;
    margin-bottom: 40px;
`;
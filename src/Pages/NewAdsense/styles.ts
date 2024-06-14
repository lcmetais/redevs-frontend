import styled from "styled-components";
import media, { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  small: '500px',
  medium: '700px',
  huge: '1000px',
})

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100%;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;

  width: 90%;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  width: 100%;
`;

export const NoInputWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 8px;

  ${media.lessThan('large')`
    flex-direction: column;

    gap: 16px;
  `}
`;
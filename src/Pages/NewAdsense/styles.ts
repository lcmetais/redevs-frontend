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

export const ImagePreviewer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;

  padding: 4px;
  width: 100%;
  gap: 8px;
  border-radius: 8px;

  border: 2px solid #027A48;
`;

export const ImageForPreview = styled.img`
  max-width: 640px;
  width: 100%;
`;
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;
`;

export const Loading = styled.div`
  border: 4px solid rgba(0, 255, 0, 0.25);
  animation: spin 1s linear infinite;
  
  border-left-color: #00ff00;

  border-radius: 50%;
  width: 40px;
  height: 40px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const BannerPreviewer = styled.div`
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

export const InternalSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-width: 430px;

  ${media.lessThan('medium')`
    min-width: 430px;
    max-width: 840px;
    height: auto; // Ajusta a altura automaticamente
  `}
`;

export const BannerForPreview = styled.img`
  max-width: 640px;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  width: 100%;
  padding: 64px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 16px;
  width: 100%;
`;

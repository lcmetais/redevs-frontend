import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
`;

export const SkeletonWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  width: 100%;
  max-width: 300px;
  gap: 16px;
  cursor: pointer;
  animation: ${loadingAnimation} 1.5s linear infinite;
  overflow: hidden;

  &:hover {
    box-shadow: 10px 10px 10px gray;
  }
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 150px; /* Adjust height as needed */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 20px;
  animation: ${loadingAnimation} 1.5s linear infinite;
`;

export const SkeletonText = styled.div`
  width: 100%;
  height: 20px; /* Adjust height as needed */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: ${loadingAnimation} 1.5s linear infinite;
`;
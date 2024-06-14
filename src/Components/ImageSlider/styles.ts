import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
    position: relative;
    
    width: 100%;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; 
    width: 100%;
    overflow: hidden;
`;

export const FadeContainer = styled.div`
  animation: ${fadeIn} 1.5s;
`;

export const NumberText = styled.div`
    position: absolute;

    font-size: 12px;
    padding: 8px 12px;
    top: 0;
    
    color: #f2f2f2;
`;

export const Image = styled.img`
    max-width: auto;
    height: 400px;
`;

export const DotSpanWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const DotSpan = styled.span`
    display: inline-block;
    cursor: pointer;
    
    height: 15px;
    width: 15px;
    margin: 0 2px;
    border-radius: 50%;
    
    transition: background-color 0.6s ease;
    
    background-color: #bbb;

    &:hover {
        background-color: #71717171;
    }
`;

export const PrevIcon = styled.a`
    cursor: pointer;
    position: absolute;
    user-select: none;

    font-weight: bold;

    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    font-size: 18px;
    border-radius: 0 3px 3px 0;
    color: white;
    
    transition: 0.6s ease;
    
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

export const NextIcon = styled.a`
    cursor: pointer;
    position: absolute;
    user-select: none;
    
    font-weight: bold;

    width: auto;
    top: 50%;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-size: 18px;
    right: 0;
    border-radius: 3px 0 0 3px;
    
    transition: 0.6s ease;

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

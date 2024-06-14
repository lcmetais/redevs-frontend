import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';
import theme from '../../styles/styled-theme';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  
  border: 1px solid #2c9038;
  
  background-color: #fff;
  
  ${media.lessThan('medium')`
    & > div:last-child {
      order: 3;
    }
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  ${media.lessThan('medium')`
    gap: 8px;
  `}
`;

export const InputWrapper = styled.div`
  width: 260px;
`;

export const UserInfo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: 8px;
  border-radius: 5px;
  gap: 5px;

  text-decoration: none;
  font-weight: ${theme.font.bold};

  color: #529048;

  border: 1px solid #529048;

  & > svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

// export const ImageInUserInfo = styled.img`

// `;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;

  background-color: #529048;
  color: #fff;

  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: #d0e2e1;
    border-color: #d0e2e1;
  }
`;

export const ButtonDropdown = styled.div`
  display: flex;
  align-items: center;
`;

// Dropdown CSS
export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-top: 8px;
`;

export const SetStateNavbar = styled.a`
  width: auto;

  & > svg {
    width: 32px;
    height: 32px;
  }
`;

export const SearcbarDropdown = styled.div`
  margin-top: 5px;
  padding: 3px;
`;

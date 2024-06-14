import { ChangeEvent, useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAuth } from '../../Context/AuthContext'
import { useSearch } from '../../Context/SearchContext'
import Button from '../Button'
import CloseModal from '../Icons/CloseModal'
import Input from '../Input'
import Logo from '../Logo'
import { menuItemsUniverso, adminMenu } from '../SideBarv2'
import MenuItem from '../SideBarv2/MenuItem'
import * as S from './styles'

const Header = () => {
  const { isAuthenticated, user, logOut } = useAuth();
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const { searchText, setSearch } = useSearch();

  const menuItems = [...menuItemsUniverso];

  useEffect(() => {
    // redimensionamento da tela
    const handleResize = () => { setWidth(window.innerWidth) }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleSetSearcText = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  if (user.role === 'ADMIN') menuItems.push(adminMenu)

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <a href="/"><Logo /></a>
        <div style={{ display: `flex`, flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          {
            width > 768
              && location.pathname !== '/login'
              && location.pathname !== '/cadastro'
              && location.pathname !== '/esqueceusenha'
              && location.pathname !== '/esqueceusenha/emailenviado'
              && location.pathname !== '/esqueceusenha/redefinirsenha'
              ? <S.InputWrapper>
                <Input
                  prefix={`🔍︎`}
                  value={searchText}
                  onChange={handleSetSearcText}
                />
              </S.InputWrapper>
              : ''

          }
          {isAuthenticated && (
            <S.WrapperButtons>
              {
                width > 768
                  ?
                  <>
                    <S.UserInfo href='/dashboard/usuario'>
                      <p>{user?.name}</p>
                      <FaRegUserCircle />
                      {/* <S.ImageInUserInfo src={user?.photo.imageInBase64} /> */}
                    </S.UserInfo>

                    <S.LinkButton to="/dashboard/novoanuncio">Criar Anúncio</S.LinkButton>
                  </>
                  :
                  <Button onClick={() => setOpenSearchbar(!openSearchbar)}>{`🔍︎`}</Button>
              }

              <Button onClick={() => logOut()}>Sair</Button>

              {
                width <= 768
                  ?
                  <S.ButtonDropdown>
                    {
                      isDropdownOpen
                        ?
                        <>
                          <S.SetStateNavbar
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <CloseModal />
                          </S.SetStateNavbar>
                        </>
                        :
                        <>
                          <S.SetStateNavbar
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          >
                            <GiHamburgerMenu />
                          </S.SetStateNavbar>
                        </>
                    }
                  </S.ButtonDropdown>
                  : ''
              }
            </S.WrapperButtons>
          )}
          {
            location.pathname === '/login' ||
              location.pathname === '/cadastro' ||
              location.pathname === '/esqueceusenha' ||
              location.pathname === '/esqueceusenha/redefinirsenha'
              ? ''
              : (
                !isAuthenticated &&
                <S.WrapperButtons>
                  {
                    <>
                      {width < 768 && <Button onClick={() => setOpenSearchbar(!openSearchbar)}>{`🔍︎`}</Button>}
                      <S.LinkButton to="/login">Entrar</S.LinkButton>
                      <S.LinkButton to={isAuthenticated ? '/dashboard/novoanuncio' : '/login'}>Criar Anúncio</S.LinkButton>
                    </>
                  }
                </S.WrapperButtons>
              )
          }
        </div>
      </S.HeaderWrapper>

      {
        width <= 768
          ?
          isDropdownOpen
            ?
            <div>
              <S.DropdownWrapper>
                {
                  menuItems.map((itemInMenu) => {
                    return (
                      <MenuItem
                        key={itemInMenu.label}
                        label={itemInMenu.label}
                        icon={itemInMenu.icon}
                        links={itemInMenu.links}
                        href={itemInMenu.href}
                      />
                    );
                  })
                }
              </S.DropdownWrapper>
            </div>
            : ''
          : ''
      }

      {
        width <= 768
          ?
          openSearchbar
            ?
            <div>
              <S.SearcbarDropdown>
                <Input
                  prefix={`🔍︎`}
                  value={searchText}
                  onChange={handleSetSearcText}
                />
              </S.SearcbarDropdown>
            </div>
            : ''
          : ''
      }

    </S.HeaderContainer>
  )
}

export default Header

import * as S from './styles'

import ProductsMenuIcon from '../../Components/Icons/ProductsMenuIcon'
import SalesReportsMenuIcon from '../../Components/Icons/SalesReportsMenuIcon'
import MenuItem, { MenuItemProps } from './MenuItem'
import { useEffect, useState } from 'react'
import CloseModal from '../Icons/CloseModal'
import { GiHamburgerMenu } from "react-icons/gi"
import AdminIcon from '../Icons/AdminIcon'
import { useAuth } from '../../Context/AuthContext'



export const menuItemsUniverso: MenuItemProps[] = [
  {
    label: 'Anúncios',
    icon: <SalesReportsMenuIcon width={24} height={24} />,
    links: [
      {
        label: 'Meus anúncios',
        href: '/dashboard/anuncios'
      },
      {
        label: 'Novo anúncio',
        href: '/dashboard/novoanuncio'
      }
    ]
  },
  {
    label: 'Configurações',
    icon: <ProductsMenuIcon width={24} height={24} />,
    links: [
      {
        label: 'Meus dados',
        href: '/dashboard/usuario'
      }
    ]
  }
]

export const adminMenu = {
  label: 'Admin',
  icon: <AdminIcon width={24} height={24} />,
  links: [
    {
      label: 'Anúncios',
      href: '/admin/anunciosparaaprovar'
    },
    {
      label: 'Usuários',
      href: '/admin/usuarios'
    },
  ]
}

const SideMenu = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { user } = useAuth()

  const menuItems = [...menuItemsUniverso];

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  if (user.role === 'ADMIN') menuItems.push(adminMenu)

  return (
    <>
      {
        width <= 768
          ? ''
          :
          <>
            {
              sidebarIsOpen
                ?
                <S.Aside isOpen>
                  <S.CloseSidebarIcon onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                    <CloseModal />
                  </S.CloseSidebarIcon>
                  {
                    menuItems.map((menuItem) => {
                      return <MenuItem key={menuItem.label} {...menuItem} />
                    })
                  }
                </S.Aside >
                :
                <S.Aside isClose>
                  <S.CloseSidebarIcon onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                    <GiHamburgerMenu />
                  </S.CloseSidebarIcon>
                </S.Aside>
            }
          </>
      }
    </>
  )
}

export default SideMenu

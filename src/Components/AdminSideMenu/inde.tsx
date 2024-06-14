import * as S from './styles'

//import SalesReportsMenuIcon from '../Icons/SalesReportsMenuIcon'

import { useEffect, useState } from 'react'
import CloseModal from '../Icons/CloseModal'
import { GiHamburgerMenu } from "react-icons/gi"
import MenuItem, { MenuItemProps } from '../SideBarv2/MenuItem'
import AdminIcon from '../Icons/AdminIcon'
import { useAuth } from '../../Context/AuthContext'

export const menuItemsUniverso: MenuItemProps[] = [
    {
        label: 'Admin',
        icon: <AdminIcon width={24} height={24} />,
        links: [
            {
                label: 'Anúncios',
                href: '/admin/anunciosparaaprovar'
            },
        ]
    }
]

const AdminSideMenu = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
  const { user } = useAuth()

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                                        menuItemsUniverso.map((menuItem) => {
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

export default AdminSideMenu

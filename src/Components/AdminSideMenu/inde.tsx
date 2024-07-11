import * as S from './styles'

//import SalesReportsMenuIcon from '../Icons/SalesReportsMenuIcon'

import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useAuth } from '../../Context/AuthContext'
import CloseModal from '../Icons/CloseModal'
import { adminMenu, menuItemsUniverso } from '../SideBarv2'
import MenuItem from '../SideBarv2/MenuItem'

const AdminSideMenu = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const { user } = useAuth();
    const menuItems = [...menuItemsUniverso];

    if (user.role === 'ADMIN') menuItems.push(adminMenu)

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

export default AdminSideMenu

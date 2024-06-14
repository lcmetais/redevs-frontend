import { Outlet } from "react-router-dom"
import * as S from './styles'
import AdminSideMenu from "../../Components/AdminSideMenu/inde"

const Admin = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <AdminSideMenu />
                <S.WrapperContent>
                    <Outlet />
                </S.WrapperContent>
            </S.Content>
        </S.Wrapper>
    )
}

export default Admin
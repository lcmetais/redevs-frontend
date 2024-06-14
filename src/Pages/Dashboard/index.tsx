import { Outlet } from 'react-router-dom'
import * as S from './styles'
import SideMenu from '../../Components/SideBarv2'

const Dashboard = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <SideMenu />
        <S.WrapperContent>
          <Outlet />
        </S.WrapperContent>
      </S.Content>
    </S.Wrapper>
  )
}

export default Dashboard

import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import User from '../Pages/User'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import NewAdsense from '../Pages/NewAdsense'
import SignUpPage from '../Pages/SignUp'
import UserAdverts from '../Pages/UserAdverts'
import ForgotPassword from '../Pages/ForgotPassword'
import Admin from '../Pages/Admin'
import AdminAdvertManager from '../Pages/Admin/AdminAdvertManager'
import ProtectRoute from './ProtectRoutes'
import RedefinePassword from '../Pages/ForgotPassword/RedefinePassword'
import MailSedingConfirm from '../Pages/MailSedingConfirm'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/esqueceusenha" element={<ForgotPassword />} />
      <Route path="/esqueceusenha/emailenviado" element={<MailSedingConfirm />} />
      <Route path="/esqueceusenha/redefinirsenha" element={<RedefinePassword />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path='usuario' element={<User />} />
        <Route path='anuncios' element={<UserAdverts />} />
        <Route path='novoanuncio' element={<NewAdsense />} />
      </Route>
      <Route path="/admin" element={
        <ProtectRoute>
          <Admin />
        </ProtectRoute>
      }>
        <Route path='anunciosparaaprovar' element={<AdminAdvertManager />} />
      </Route>
    </Routes>
  )
}

export default Router

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'

import {
  destroyCookie,
  parseCookies,
  setCookie
} from 'nookies'


import { jwtDecode } from 'jwt-decode'
import {
  COOKIE_ACCESS_TOKEN,
  COOKIE_FORGOT_PASSWORD,
  COOKIE_REFRESH_TOKEN,
  signIn,
  signUp,
  tokeToRedefinePassword
} from '../Services/auth'
import { getUserById, updateUser } from '../Services/user'

type SignInData = {
  email: string
  password: string
}

type SignUpData = {
  name: string,
  email: string,
  password: string,
  phone: string,
}

type TRedefinePassword = {
  password: string;
  token?: string | null
}

// type UserPhoto = {
//   id?: string
//   originalname?: string
//   imageInBase64?: string
//   userId?: string
//   createAt?: Date
//   deleteAt?: Date
// }

type User = {
  id: string
  name: string
  email: string
  phone: string
  role: string
  session?: string
}

type TPayload = {
  iss?: string;
  sub: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}

type AuthContextValue = {
  isAuthenticated?: boolean
  loading: boolean
  signInRequest: (data: SignInData) => Promise<any>
  signUpRequest: (data: SignUpData) => void
  logOut: () => void
  setTokenToRedefinePassword: (email: string) => Promise<any>
  redefinePassword: ({ password }: TRedefinePassword) => Promise<void>
  user: User
}

export const AuthContext = createContext({} as AuthContextValue)

type AuthProviderProps = {
  children: ReactNode
}

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    phone: '',
    role: ''
  });
  const [loading, setLoading] = useState(false);

  const signInRequest = async ({ email, password }: SignInData): Promise<any> => {
    setLoading(true);

    try {
      const { data } = await signIn({ email, password });

      const { accessToken, refreshToken } = data;

      setCookie(null, COOKIE_ACCESS_TOKEN, accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      });

      setCookie(null, COOKIE_REFRESH_TOKEN, refreshToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 60
      });

      setIsAuthenticated(!!accessToken);
      getUser(refreshToken);

      navigate('/dashboard/anuncios');

    } catch (error: any) {
      alert('Dados informados estão errados!');
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const signUpRequest = async ({ name, email, password, phone }: SignUpData): Promise<any> => {
    setLoading(true);

    try {
      const data = await signUp({ name, email, password, phone });

      if (!data) {
        alert('Não foi possível realizar o cadastro, tente novamente, caso o erro persista, tente mais tarde!');
      } else {
        navigate('/login');
      }
    } catch (error: any) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logOut = () => {
    setIsAuthenticated(false)
    destroyCookie(null, COOKIE_ACCESS_TOKEN, { path: '/' })
    destroyCookie(null, COOKIE_REFRESH_TOKEN, { path: '/' })
    navigate('/')
  }

  const getUser = async (token: string) => {
    const tokenDecoded = jwtDecode<TPayload>(token);
    if (tokenDecoded) {
      const response = await getUserById({ id: tokenDecoded.sub });

      if (response) {
        setUser({
          id: response.id,
          name: response.name,
          email: response.email,
          phone: response.phone,
          role: response.role
        });
      }
    }
  }

  const setTokenToRedefinePassword = async (email: string) => {
    try {
      await tokeToRedefinePassword({ email });

      navigate('/esqueceusenha/emailenviado');
    } catch (error) {
      throw error;
    }
  }

  const redefinePassword = async ({ password, token }: TRedefinePassword) => {
    try {
      if (token) {
        const tokenDecoded = jwtDecode<TPayload>(token);

        if (tokenDecoded.sub) await updateUser({ id: tokenDecoded.sub, password: password }, token);

        alert('Senha alterada com sucesso!');

        navigate('/login')
      }
    } catch (error) {
      alert('Houve algum erro ao redefinir a senha, por favor tente novamente!')
      throw error;
    }
  }

  useEffect(() => {
    const { [COOKIE_REFRESH_TOKEN]: token, [COOKIE_ACCESS_TOKEN]: accessToken } = parseCookies();

    setIsAuthenticated(!!token && !!accessToken);
    if (token) getUser(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signInRequest,
        signUpRequest,
        logOut,
        setTokenToRedefinePassword,
        redefinePassword,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

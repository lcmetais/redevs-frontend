import { ReactNode, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { parseCookies } from 'nookies'
import { GlobalStyles } from '../styles/Global'
import { useAuth } from '../Context/AuthContext'
import { COOKIE_REFRESH_TOKEN } from '../Services/auth'
import { jwtDecode } from 'jwt-decode'
import { getUserById } from '../Services/user'

type ProtectedRouteProps = {
    children?: ReactNode
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

type User = {
    id: string
    name: string
    email: string
    phone: string
    role: string
    session?: string
}

const ProtectRoute = ({ children }: ProtectedRouteProps) => {
    const { [COOKIE_REFRESH_TOKEN]: token } = parseCookies();
    const [user, setUser] = useState<User>();

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

    useEffect(() => {
        getUser(token);
    }, []);

    if (user && user.role !== "ADMIN") {
        return <Navigate to="/" replace />
    }

    return (
        <>
            {<GlobalStyles />}
            {children}
        </>
    )
}

export default ProtectRoute;
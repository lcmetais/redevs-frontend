import axios from 'axios'
import { parseCookies } from 'nookies'

const baseURL = import.meta.env.VITE_BASE_URL

const api = axios.create({
  baseURL
})

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response
//   },
//   (error) => {
//     if (error.config.url === '/user/me') {
//       destroyCookie(null, '@360hub-token', { path: '/' })
//       window.location.href = '/login'
//     }

//     return Promise.reject(error)
//   }
// )

api.interceptors.request.use((config) => {
  const { ['@lc-token']: token } = parseCookies();

  if (token) {
    config.headers!['Authorization'] = `Bearer ${token}`
  }

  return config;
})

export default api

export const fetcher = (path: string) => api.get(path).then((res) => res.data)

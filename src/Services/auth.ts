/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import { AxiosResponse } from 'axios'
import api from './axios'

export const COOKIE_REFRESH_TOKEN = '@lc-token'
export const COOKIE_ACCESS_TOKEN = '@lc-access-token'
export const COOKIE_FORGOT_PASSWORD = '@lc-fp-token'

type SignInRequestParams = {
  email: string
  password: string
}

export type SignInResponse = {
  accessToken: string
  refreshToken: string
}

type TSignUpRequest = {
  name: string,
  email: string,
  password: string,
  phone: string,
}

type TSignUpResponse = {
  id: string,
  name: string,
  email: string,
  password: string,
  phone: string,
}

type TForgotPasswordParams = {
  email: string
}

type TForgotPasswordResponse = {
  forgotPasswordToken: string
}

export const signIn = async ({ email, password }: SignInRequestParams): Promise<AxiosResponse<SignInResponse>> => {

  try {
    const response = await api.post('/auth/login', { email, password });

    return response
  } catch (error: any) {
    throw error
  }

}

export const signUp = async ({ name, email, password, phone }: TSignUpRequest): Promise<AxiosResponse<TSignUpResponse>> => {
  try {
    const response = await api.post('/auth/register', { name, email, password, phone });
    return response;
  } catch (error: any) {
    throw error;
  }
}

export const tokeToRedefinePassword = async ({ email }: TForgotPasswordParams): Promise<AxiosResponse<TForgotPasswordResponse>> => {
  try {
    const response = await api.get(`/auth/forgotpassword/${email}`)
    return response;
  } catch (error) {
    throw error;
  }
}

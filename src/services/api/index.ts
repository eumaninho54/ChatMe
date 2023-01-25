import axios, { AxiosError } from 'axios';
import { GetUserProps, IAuthUser, IGetUser, INewUser, NewUserProps } from './types';
import { BASE_URL } from '@env'


export class ApiService {
  private baseUrl = BASE_URL;

  constructor(
    private _refreshToken?: string | null,
    private _accessToken?: string | null
  ){}

  async authUser(){
    const req = await axios
      .request<IAuthUser>({
        method: 'get',
        url: this.baseUrl + '/auth',
        headers: { 
          "x-refresh-token": this._refreshToken
        }
      })
      .then((res) => res.data)
      .catch((err: AxiosError) => Promise.reject(err))
    
    return req
  }

  async getUser({email, password}: GetUserProps){
    const req = await axios
      .request<IGetUser>({
        method: 'post',
        url: this.baseUrl + '/auth/signIn',
        data: {
          email: email,
          password: password
        }
      })
      .then((res) => res.data)
      .catch((err: AxiosError) => Promise.reject(err))
    
    return req
  }

  async newUser({email, password}: NewUserProps){
    const req = await axios
      .request<INewUser>({
        method: 'post',
        url: this.baseUrl + '/auth/signUp',
        data: {
          email: email,
          password: password
        }
      })
      .then((res) => res.data)
      .catch((err: AxiosError) => Promise.reject(err)) 
    
    return req
  }
}

import axios, { AxiosError } from 'axios';
import { GetUserProps, IGetUser, INewUser, NewUserProps } from './types';
import { BASE_URL } from '@env'


export class ApiService {
  private baseUrl = BASE_URL;

  constructor(
    private _token?: string
  ){}

  async getUser({email, password}: GetUserProps){
    const req = await axios
      .request<IGetUser>({
        method: 'post',
        url: this.baseUrl + '/auth/signIn',
        headers: { "x-access-token": this._token },
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

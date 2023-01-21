import axios, { AxiosError } from 'axios';
import { reactotron } from '../../config/reactotron';
import { GetUserProps, IGetUser, INewUser, NewUserProps } from './types';

export class ApiService {
  private baseUrl = 'http://192.168.0.100:3333';

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

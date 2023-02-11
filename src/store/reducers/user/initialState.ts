import { IUser } from "./types";

export const initialState: IUser = {
  username: '',
  email: '',  
  auth: false,
  accessToken: '',
  refreshToken: ''
}

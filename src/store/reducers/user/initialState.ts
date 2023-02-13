import { IUser } from "./types";

export const initialState: IUser = {
  id: '',
  username: '',
  email: '',  
  auth: false,
  accessToken: '',
  refreshToken: ''
}

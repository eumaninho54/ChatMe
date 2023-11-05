import { IUser } from "./types";

export const initialState: IUser = {
  id: '',
  name: '',
  imageUrl: '',
  isActive: false,
  email: '',  
  auth: false,
  accessToken: '',
  refreshToken: ''
}

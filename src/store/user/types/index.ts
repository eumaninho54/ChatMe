export type ISignIn = {
  type: string
  payload: any
}

export type IUser = {
  username: string
  email: string
  auth: boolean
  token: string
}

export type GetUserProps = {
  email: string
  password: string
} 

export type IGetUser = {
  username: string
  email: string
  auth: boolean
  token: string
}

export type NewUserProps = {
  email: string
  password: string
}

export type INewUser = {
  username: string
  email: string
  auth: boolean
  token: string
}

export type IError = {
  message: string
}

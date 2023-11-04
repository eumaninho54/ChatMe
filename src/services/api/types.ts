import { IUser } from "../../store/reducers/user/types"

export type GetUserProps = {
  email: string
  password: string
} 

export type IGetUser = {
  id: string
  name: string
  imageUrl: string
  email: string
  auth: boolean
} & ITokens

export type NewUserProps = {
  email: string
  password: string
}

export type INewUser = {
  id: string
  name: string
  imageUrl: string
  email: string
  auth: boolean
} & ITokens

export type IAuthUser = {
  id: string
  name: string
  imageUrl: string
  email: string
  auth: boolean
} & ITokens

export type SearchUserProps = {
  idUser: string
  name: string
}

export type ISearchUser = {
  id: string
  name: string
  imageUrl: string
  hasFriendshipRequest: boolean
}

export type sendFriendshipProps = {
  isAdded: boolean
  idFriend: string
}

export type ISendFriendship = {

} & ITokens

export type allChatProps = {
  idUser: string
}

export type ITokens = {
  accessToken: string
  refreshToken: string
}

export type IError = {
  message: string
}

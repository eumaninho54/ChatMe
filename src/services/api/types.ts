export type GetUserProps = {
  email: string
  password: string
} 

export type IGetUser = {
  username: string
  email: string
  auth: boolean
} & ITokens

export type NewUserProps = {
  email: string
  password: string
}

export type INewUser = {
  username: string
  email: string
  auth: boolean
} & ITokens

export type IAuthUser = {
  username: string
  email: string
  auth: boolean
} & ITokens

export type SearchUserProps = {
  username: string
}

export type ISearchUser = {
  id: string
  username: string
  imageUrl: string
  hasFriendshipRequest: boolean
}

export type sendFriendshipProps = {
  isAdded: boolean
  idFriend: string
}

export type ISendFriendship = {

} & ITokens

export type ITokens = {
  accessToken: string
  refreshToken: string
}

export type IError = {
  message: string
}

import { IUser } from "../../store/reducers/user/types"

export type GetUserProps = {
  email: string
  password: string
} 

export type IGetUser = {
  id: string
  username: string
  email: string
  auth: boolean
} & ITokens

export type NewUserProps = {
  email: string
  password: string
}

export type INewUser = {
  id: string
  username: string
  email: string
  auth: boolean
} & ITokens

export type IAuthUser = {
  id: string
  username: string
  email: string
  auth: boolean
} & ITokens

export type SearchUserProps = {
  idUser: string
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

export type allChatProps = {
  idUser: string
}

export type IAllChat = {
  idChat: string;
  users: IUser[]
  name?: string;
  icon?: string;
  messages: {
    id: string;
    senderId: string;
    message: string;
    isReadBy: string[];
    isReceivedBy: string[];
    createdAt: Date;
  }[];
  notRead: number;
  isGroup: boolean;
  isOnline: boolean;
}

export type ITokens = {
  accessToken: string
  refreshToken: string
}

export type IError = {
  message: string
}

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
  usernameFriend: string;
  avatarFriend: string;
  messages: {
    id: string;
    senderId: string;
    message: string;
    isRead: boolean;
    isReceived: boolean;
    createdAt: Date;
  }[];
  notRead: number;
}

export type ITokens = {
  accessToken: string
  refreshToken: string
}

export type IError = {
  message: string
}

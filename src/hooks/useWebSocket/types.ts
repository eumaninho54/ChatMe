import { IMessages } from "../../store/reducers/messages/types"

export type ISendMessage = {
  idChat: string
  message: string
}

export type IReadMessage = {
  idChat: string
  messagesId: string[]
}

export type IReceiveMessage = {
  idChat: string
  message: IMessages
}

export type IOnNewMessage = {
  idChat: string
  message: IMessages
}

export type IOnEditMessage = {
  idChat: string
  notRead: number
  messages: IMessages[]
}

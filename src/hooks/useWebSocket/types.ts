import { IMessages } from "../../store/reducers/messages/types"

export type ISendMessage = {
  message: string
  idChat: string
}

export type IOnMessage = {
  idChat: string
  message: IMessages
}

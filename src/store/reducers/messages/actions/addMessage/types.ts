import { IMessages } from "../../types"

export type IAddMessageAction = {
  payload: {
    idChat: string
    message: IMessages
    userId: string
  }
}

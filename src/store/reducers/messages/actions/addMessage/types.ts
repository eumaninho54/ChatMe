import { IMessages } from "../../types"

export type IAction = {
  payload: {
    idChat: string
    message: IMessages
  }
}

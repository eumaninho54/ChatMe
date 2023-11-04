import { IMessages } from "../../types"

export type IEditMessageAction = {
  payload: {
    idChat: string
    messages: IMessages[]
    notRead?: number
  }
}

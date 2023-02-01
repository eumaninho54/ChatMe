import { Dispatch } from "react"

export type IProps = {
  usernameSearch: string
  setUsernameSearch: Dispatch<React.SetStateAction<string>>
}

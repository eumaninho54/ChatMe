import { Dispatch } from "react"

export type IProps = {
  isVisible?: boolean
  setVisible?: Dispatch<React.SetStateAction<boolean>>
  type?: 'User' | 'Group'
}

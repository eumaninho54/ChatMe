import { Dispatch } from "react"
import { IColor } from "../../../../styles/colors/types"


export type IProps = {
  value: string
  onChangeValue: ((text: string) => {}) | ((text: string) => void)
  placeholder: string
  outline: boolean
  color: IColor
  multiline?: boolean
  hasLeftIcon?: boolean
  autoCorrect?: boolean
  autoCapitalize?: "none" | "sentences" | "words" | "characters"
  key?: string
}

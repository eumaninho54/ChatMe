import { IColor } from "../../../styles/colors/types"

export type OnChangeValue = ((value: string) => void) | ((value: string) => {})
export type IInputTypeKey =  'text' | 'number' | 'password' | 'email' 
export type IIconNameKey = 'search'

export type IProps = {
  value: string
  onChangeValue: OnChangeValue
  placeholder: string
  disabled?: boolean
  multiline?: boolean
  type?: IInputTypeKey
  ref?: any
  key?: string
  iconLeft?: IIconNameKey
  isLogin?: boolean
}

export type IStyles = {
  theme: Record<IColor, string>
  hasValue?: boolean
}

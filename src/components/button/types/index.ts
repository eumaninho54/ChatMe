export type IButtonSizeKey = 'normal' | 'small'

export type IProps = {
  text: string
  type: 'solid' | 'clean'
  size?: IButtonSizeKey
  onPress: (() => {}) | (() => void)
}

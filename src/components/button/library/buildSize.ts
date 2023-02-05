import { IButtonSizeKey, IProps } from "../types"

const buttonSize: Record<IButtonSizeKey, number> = {
  normal: 55,
  small: 40,
}

export const buildSize = (props: IProps) => {
  const { size = 'normal' } = props

  return buttonSize[size]
}

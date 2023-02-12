import { ImageResizeMode, ImageSourcePropType } from "react-native"

export type IAvatarSizeKey = 'normal' | 'small'

export type IProps = {
  source: ImageSourcePropType
  size?: IAvatarSizeKey
  resizeMode?: ImageResizeMode
}

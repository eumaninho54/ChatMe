import { ImageProps, ImageResizeMode, ImageSourcePropType, ImageURISource } from "react-native"

export type IAvatarSizeKey = 'normal' | 'small'
export type IImageProps = ImageURISource

export type IProps = {
  source: IImageProps
  size?: IAvatarSizeKey
  resizeMode?: ImageResizeMode
}

import { ImageResizeMode, ImageSourcePropType } from "react-native"

export type ILogoSizeKey = 'tiny_20' | 'small_50' |'medium_70' | 'big_100' | 'giant_150'

export type IProps = {
  source: ImageSourcePropType
  size: ILogoSizeKey
  key?: string; 
  resizeMode: ImageResizeMode
}

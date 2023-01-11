import { Animated } from 'react-native';
import { IColor, ITheme } from '../../../styles/colors/types'

export type IFontSizeKey = "tiny_12" | "caption_13" | "small_14" | "normal_16" | "big_18" | "extra_giant_22";
export type IFontWeightKey = "light" | "regular" | "semibold" | "bold";
export type IFontSize = IFontSizeKey | Animated.Value | Animated.AnimatedInterpolation<number>;

export type IProps = {
  text: string
  color: IColor
  size: IFontSize
  weight: IFontWeightKey
  ref?: any
  key?: string
}

export type IStyles = {
  theme: ITheme
  color: string
  font: string
}
import { IFontSize, IFontSizeKey, IFontWeightKey } from './../types/index';
import { IColor, ITheme } from "../../../styles/colors/types";


const textSize: Record<IFontSizeKey, number> = {
  tiny_12: 12,
  caption_13: 13,
  small_14: 14,
  normal_16: 16,
  big_18: 20,
  giant_22: 22,
  extra_giant_26: 26
}

const textFont: Record<IFontWeightKey, string> = {
  light: 'Montserrat-Light',
  regular: 'Montserrat-Regular',
  semibold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold'
}

export const buildText = (theme: ITheme, color: IColor, size: IFontSize, weight: IFontWeightKey) => {
  return {
    color: theme[color],
    size: typeof size == 'object' 
      ? size
      : textSize[size],
    font: textFont[weight]
  }
}

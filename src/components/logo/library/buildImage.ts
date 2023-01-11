import { ILogoSizeKey, IProps } from "../types"

const imageSize: Record<ILogoSizeKey, number> = {
  tiny_20: 20,
  small_50: 50,
  medium_70: 70,
  big_100: 100,
  giant_150: 150
}

export const buildImage = (props: IProps) => {
  return {
    size: imageSize[props.size]
  }
}

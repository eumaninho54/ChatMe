import { IIconSizeKey } from './../types/index';
import { IColor } from "../../../styles/colors/types"
import { IProps } from "../types"

const iconSize: Record<IIconSizeKey, number> = {
  extra_small_10: 10,
  small_15: 15,
  normal_20: 20,
  big_25: 25,
  extra_big_30: 30,
  giant_35: 35
}


export const buildIcon = (theme: Record<IColor, string>, props: IProps) => {
  return {
    name: props.name,
    size: iconSize[props.size],
    color: theme[props.color]
  }
}

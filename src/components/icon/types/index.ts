import { IColor } from '../../../styles/colors/types';

export type IIconSizeKey = 'extra_small_10' | 'small_15' | 'normal_20' | 'big_25' | 'extra_big_30'

export type IProps = {
  name: string
  size: IIconSizeKey
  color: IColor
  key?: string
}

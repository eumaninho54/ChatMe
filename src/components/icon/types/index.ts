import { IColor } from '../../../styles/colors/types';

export type IIconSizeKey = 'extra_small_10' | 'small_15' | 'normal_20' | 'big_25' | 'extra_big_30' | 'giant_35'

export type IIconFamilyKey = 'FontAwesome5' | 'Ionicons'

export type IProps = {
  name: string
  size: IIconSizeKey
  color: IColor
  family: IIconFamilyKey
  solid?: boolean
  key?: string
}

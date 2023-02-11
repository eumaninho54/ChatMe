import { IColor } from "../../../styles/colors/types"

export type IProps = {
  isLoading: boolean
  color: IColor
  backgroundColor: IColor
  size?: number | "small" | "large"
}

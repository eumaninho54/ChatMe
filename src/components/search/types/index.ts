import { Dispatch } from "react"


export type IProps = {
  searchValue: string
  setSearchValue: Dispatch<React.SetStateAction<string>>
  placeholder: string
  key?: string
}

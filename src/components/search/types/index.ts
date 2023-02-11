import { Dispatch } from "react"


export type IProps = {
  searchValue: string
  setSearchValue: ((text: string) => {}) | ((text: string) => void)
  placeholder: string
  key?: string
}

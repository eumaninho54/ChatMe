import { AxiosError } from "axios"
import { TFunction } from "i18next"
import { Alert } from "react-native"
import { reactotron } from "../config/reactotron"

type Iprops = {
  err: AxiosError
  callbackApiError?: (() => {}) | (() => void)
  t: TFunction<"translation", undefined, "translation">
}

export const apiError = ({ err, callbackApiError, t }: Iprops) => {
  //Debug error
  reactotron.log?.(err)

  if(err.code == '401'){
    callbackApiError?.()
  }

  Alert.alert(t('Error'), t(err.message) || '')
} 

import { AxiosError } from "axios"
import { TFunction } from "i18next"
import { Alert } from "react-native"
import { reactotron } from "../config/reactotron"

type Iprops = {
  err: AxiosError
  callbackApiError?: () => void
  t: TFunction<"translation", undefined, "translation">
}

export const apiError = ({ err, callbackApiError, t }: Iprops) => {
  //Debug error
  reactotron.log?.('ApiError: ', err)

  switch (err?.code) {
    case '401':
      callbackApiError?.()
      return;

    case null:
      Alert.alert(
        t('Alerts.Title.Error'), 
        t('Alerts.Description.No connection') || ''
      )
      return;

    default:
      Alert.alert(
        t('Alerts.Title.Error'), 
        err.message || ''
      )
  }
} 

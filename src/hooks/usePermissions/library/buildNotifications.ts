import { checkNotifications, requestNotifications } from "react-native-permissions"
import reactotron from "reactotron-react-native"
import { resultPermission } from "./resultPermission"

export const buildNotifications = () => {
  checkNotifications()
    .then(({ status }) => {
      resultPermission(status, 'Notifications', {
        denied: () => requestNotifications(['alert', 'sound']).then((status) => {
          reactotron.log?.(status)
        })
      })
    })
    .catch((err) => reactotron.log?.(`permission Notifications catch ${err}`))
}

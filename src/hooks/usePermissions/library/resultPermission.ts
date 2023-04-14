import { PermissionStatus, RESULTS } from "react-native-permissions"
import reactotron from "reactotron-react-native"

export const resultPermission = (
  status: PermissionStatus, 
  type: string,
  callback: {
    unavailable?: () => void,
    denied?: () => void,
    blocked?: () => void,
    limited?: () => void,
    granted?: () => void
  }
) => {
  switch (status) {
    case RESULTS.UNAVAILABLE:
      reactotron.log?.(`permission ${type} is UNAVAILABLE`)
      break

    case RESULTS.DENIED:
      reactotron.log?.(`permission ${type} is DENIED`)
      callback.denied?.()
      break

    case RESULTS.BLOCKED:
      reactotron.log?.(`permission ${type} is BLOCKED`)
      break

    case RESULTS.LIMITED:
      reactotron.log?.(`permission ${type} is LIMITED`)
      break

    case RESULTS.GRANTED:
      reactotron.log?.(`permission ${type} is GRANTED`)
      break
  }
}

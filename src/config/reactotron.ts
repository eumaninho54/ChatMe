import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactotronModule from 'reactotron-react-native';
import { NativeModules } from 'react-native';

const { scriptURL } = NativeModules.SourceCode
const hostName = scriptURL.split("://")[1].split(":")[0]

export const reactotron = ReactotronModule
  .setAsyncStorageHandler!(AsyncStorage)
  .configure({ host: hostName })
  .useReactNative()
  .connect();

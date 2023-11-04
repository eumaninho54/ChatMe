import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IChat} from '../store/reducers/messages/types';

// Type Stack
export type NativeStackParamList = {
  signIn: undefined;
  signUp: undefined;
  tab: undefined;
  chat: {
    chat: IChat;
  };
};

// Type Navigation
export type IStackNavigation = NativeStackNavigationProp<NativeStackParamList>;

// Type Chat Route
export type IChatRouteType = RouteProp<NativeStackParamList, 'chat'>;

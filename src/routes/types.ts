import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Type Stack
export type NativeStackParamList = {
  signIn: undefined;
  signUp: undefined;
  tab: undefined
};

// Type Navigation
export type SignInScreenNavigation = NativeStackNavigationProp<
  NativeStackParamList,
  'signIn'
>;

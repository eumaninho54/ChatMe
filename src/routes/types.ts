import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// Type Stack
export type NativeStackParamList = {
  signIn: undefined;
  signUp: undefined;
};

// Type Navigation
export type SignInScreenNavigation = NativeStackNavigationProp<
  NativeStackParamList,
  'signIn'
>;

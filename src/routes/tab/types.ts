import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import type { NavigatorScreenParams, RouteProp, CompositeNavigationProp } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { GestureResponderEvent } from "react-native";
import { NativeStackParamList } from '../types';

// Type tab
export type TabParamList = {
  'Home': NavigatorScreenParams<NativeStackParamList>
  'Add': NavigatorScreenParams<NativeStackParamList>
  'Settings': NavigatorScreenParams<NativeStackParamList>
}

// Type Navigation
export type TabScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<NativeStackParamList>
> 
export type HomeScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<NativeStackParamList>
>
export type AddScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Add'>,
  NativeStackNavigationProp<NativeStackParamList>
>
export type SettingsScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Settings'>,
  NativeStackNavigationProp<NativeStackParamList>
>

// Type Route
export type InformationRouteType = RouteProp<NativeStackParamList>


// Type 
export type CustomTabBarButtonProps = {
  children: React.ReactNode
  onPress?: ((e: GestureResponderEvent) => void) | undefined
}

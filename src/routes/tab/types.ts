import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import type { CompositeScreenProps, NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import type {  NativeStackScreenProps } from "@react-navigation/native-stack"
import { NativeStackParamList } from '../types';

// Type tab
export type TabParamList = {
  'home': NavigatorScreenParams<NativeStackParamList>
}

// Type Navigation
export type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'home'>,
  NativeStackScreenProps<NativeStackParamList>
>

// Type Route
export type InformationRouteType = RouteProp<NativeStackParamList>

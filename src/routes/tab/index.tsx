import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import Home from '../../pages/home';
import { ITheme } from '../../styles/colors/types';
import { TabParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>()

export const TabNav: React.FC = () => {
  const theme = useContext<ITheme>(ThemeContext)

  return (
    <Navigator
      initialRouteName='home'
      sceneContainerStyle={{ backgroundColor: theme.primaryBackground }}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.secundaryBackground,
          height: 90,
          borderTopWidth: 0
        }
      }}>
      <Screen
        name='home'
        component={Home}/>
    </Navigator>
  )
}

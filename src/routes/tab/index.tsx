import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import Icon from '../../components/icon';
import Add from '../../pages/add';
import Home from '../../pages/home';
import { ITheme } from '../../styles/colors/types';
import { AddButton, AddIcon, IconWrapper, SafeAreaView } from './styles';
import { TabParamList, CustomTabBarButtonProps, TabScreenNavigationProps } from './types';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>()

export const TabNav: React.FC = () => {
  const { navigate } = useNavigation<TabScreenNavigationProps>()
  const theme = useContext<ITheme>(ThemeContext)

  const CustomTabBarButton = (props: CustomTabBarButtonProps) => {
    return (
      <AddButton onPress={() => navigate('Add', { screen: 'tab' })}>
        <AddIcon>
          {props.children}
        </AddIcon>
      </AddButton>
    )
  }

  return (
    <SafeAreaView
      edges={['bottom']}>
      <Navigator
        initialRouteName='Home'
        sceneContainerStyle={{ backgroundColor: theme.primaryBackground }}
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.secundaryBackground,
            height: 70,
            paddingBottom: 0,
            borderTopWidth: 0
          }
        }}>
        <Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  family='Ionicons'
                  name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                  size={'extra_big_30'}
                  color={focused ? 'primaryColor' : 'secundaryFont'} />
              </View>
            )
          }} />

        <Screen
          name='Add'
          component={Add}
          options={{
            tabBarIcon: () => (
              <IconWrapper>
                <Icon
                  family='Ionicons'
                  name={'add'}
                  size={'extra_big_30'}
                  color={'white'} />
              </IconWrapper>
            ),
            tabBarButton: (props: any) => (
              <CustomTabBarButton {...props}/>
            )
          }} />

        <Screen
          name='Settings'
          component={Home} // Test
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  family='Ionicons'
                  name={focused ? 'settings' : 'settings-outline'}
                  size={'extra_big_30'}
                  color={focused ? 'primaryColor' : 'secundaryFont'} />
              </View>
            )
          }} />
      </Navigator>
    </SafeAreaView>
  )
}

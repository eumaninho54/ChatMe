import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components/native';
import Icon from '../../components/icon';
import Text from '../../components/text';
import Home from '../../pages/home';
import { ITheme } from '../../styles/colors/types';
import { TabParamList, CustomTabBarButtonProps } from './types';

const { Navigator, Screen } = createBottomTabNavigator<any>()

export const TabNav: React.FC = () => {
  const theme = useContext<ITheme>(ThemeContext)

  const CustomTabBarButton = (props: CustomTabBarButtonProps) => {
    return (
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#000'
        }}
        onPress={() => { }}>
        <View style={{
          width: 60,
          height: 60,
          borderRadius: 60 / 2,
          backgroundColor: theme.primaryColor
        }}>
          {props.children}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView 
      style={{flex: 1, backgroundColor: theme.secundaryBackground}} 
      edges={['bottom']}>
      <Navigator
        initialRouteName='home'
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
          component={Home} // Test
          options={{
            tabBarIcon: () => (
              <View 
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 1,
                }}>
                <Icon
                  family='Ionicons'
                  name={'add'}
                  size={'extra_big_30'}
                  color={'white'} />
              </View>
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

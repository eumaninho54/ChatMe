import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/login/components/signIn';

const { Navigator, Screen } = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='signIn' component={SignIn} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;

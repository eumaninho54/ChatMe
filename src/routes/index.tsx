import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/login/components/signIn';
import signUp from '../pages/login/components/signUp';
import { NativeStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='signIn' component={SignIn} />
        <Screen name='signUp' component={signUp} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/login/components/signIn';
import SignUp from '../pages/login/components/signUp';
import { NativeStackParamList } from './types';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { TabNav } from './tab';
import Chat from '../pages/chat';

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>()

const Routes: React.FC = () => {
  const user = useSelector((store: StoreState) => store.user)

  return (
    <NavigationContainer>
      {!user.auth
        ? <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='signIn' component={SignIn} />
            <Screen name='signUp' component={SignUp} />
          </Navigator>
        
        : <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='tab' component={TabNav} />
            <Screen name='chat' component={Chat}/>
          </Navigator>
      }
    </NavigationContainer>
  )
}

export default Routes;

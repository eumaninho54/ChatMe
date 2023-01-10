import React, { useEffect } from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { StatusBar, useColorScheme } from 'react-native';
import darkMode from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './languages/i18n'

if (__DEV__) {
  import('./config/reactotron') // Start reactotron in dev
    .then((res) => res.reactotron.log?.("Init dev"))
}

const App: React.FC = () => {
  const deviceTheme = useColorScheme()
  const theme = deviceTheme != null && deviceTheme != undefined
    ? darkMode[deviceTheme]
    : darkMode['light']

  return (
    <SafeAreaProvider>
      <StatusBar animated backgroundColor={theme.primaryColor} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState } from 'react';
import * as Font from  'expo-font'
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './routes/drawer';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({
  'padauk-regular': require('./assets/fonts/Padauk-Regular.ttf'),
  'padauk-bold': require('./assets/fonts/Padauk-Bold.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

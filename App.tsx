import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="LoginPage" component={LoginPage} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

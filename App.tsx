import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import AuthNavigation from './src/navigations/AuthNav';
import Tabs from './src/navigations/bottomNav';
import DashboardNavigation from './src/navigations/DashboardNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

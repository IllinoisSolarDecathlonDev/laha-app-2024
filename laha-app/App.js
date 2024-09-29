import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import { MenuSidebar } from './components/MenuSidebar';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <MenuSidebar {...props} />} 
        screenOptions={{headerShown: false}}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

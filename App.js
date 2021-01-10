import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing'
import RoleSelection from './pages/RoleSelection'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
        />
        <Stack.Screen name="Role Selection" component={RoleSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landing from './pages/Landing'
import RoleSelection from './pages/RoleSelection'
import LanguageSelection from './pages/LanguageSelection';
import HomeSelection from './pages/HomeSelection';
import NameInput from './pages/NameInput';
import PracticeSelection from './pages/PracticeSelection';
import InterestSelection from './pages/InterestSelection';
import Review from './pages/Review';
import Loading from './pages/Loading';
import Call from './pages/Call';

import GlobalStore from './pages/Global'




const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalStore>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="RoleSelection" component={RoleSelection} />
          <Stack.Screen name="HomeSelection" component={HomeSelection} />
          <Stack.Screen name="NameInput" component={NameInput} />
          <Stack.Screen name="PracticeSelection" component={PracticeSelection} />
          <Stack.Screen name="InterestSelection" component={InterestSelection} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Call" component={Call} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStore>
  );
}

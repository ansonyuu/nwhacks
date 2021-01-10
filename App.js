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
import { createStore, Provider } from 'redux'


function profileReducer(state = { name: ''}, action) {
  switch (action.type) {
    case 'setRole':
      return {... state, role: action.value}
    case 'setCareHome':
      return { ... state, careHome: action.value }
    case 'setName':
        return { ... state, name: action.value }
    case 'setPractice':
      return { ... state, practice: action.value }
    case 'setInterests':
        return { ... state, interests: action.value }
    default:
      return state
  }
}

let store = createStore(profileReducer)
export { store } 
store.dispatch({type:'setName', value: 'jill'})
store.dispatch({type:'setRole', value: 'senior'})

const Stack = createStackNavigator();

export default function App() {
  return (
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
    
  );
}

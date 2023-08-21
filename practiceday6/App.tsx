import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import Login from './src/components/Login';
import List from './src/components/List';

function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="List" component={List} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

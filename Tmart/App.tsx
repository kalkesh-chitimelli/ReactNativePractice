import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListItems from './src/ListItems';
import Cart from './src/Cart';
import { SafeAreaView } from 'react-native-safe-area-context';



function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='ListItems' component={ListItems} options={{ title: 'ListItems' }} />
        <Stack.Screen name='Cart' component={Cart} options={{ title: 'CartItems' }} />
      </Stack.Navigator>

    </NavigationContainer>
   

  )

}


export default App;



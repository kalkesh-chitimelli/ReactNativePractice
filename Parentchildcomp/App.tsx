import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Subcomponent from './Subcomponent';

function App() {
  const [modal, SetModal] = useState(false);
  let value = 'Input1';
  return (
    <SafeAreaView>
      <View>
        <Text>Main Page!!!</Text>
        <Button
          title="Modal"
          onPress={() => {
            SetModal(true);
          }}
        />
      </View>
      <Subcomponent modal={modal} SetModal={SetModal} value={value} />
    </SafeAreaView>
  );
}

export default App;

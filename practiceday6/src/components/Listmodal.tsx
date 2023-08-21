import React from 'react';
import {Button, Modal, SafeAreaView, Text, View} from 'react-native';

function Listmodal(props: any) {
  return (
    <Modal visible={props.value}>
      <SafeAreaView>
        <Text>Modal View!!!</Text>
        <Button title="Back" onPress={() => props.setvalue(false)} />
      </SafeAreaView>
    </Modal>
  );
}

export default Listmodal;

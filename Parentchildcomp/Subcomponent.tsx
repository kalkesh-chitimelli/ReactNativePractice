import React from 'react';
import {Button, Modal, SafeAreaView, Text, TextInput, View} from 'react-native';

function Subcomponent(props: any) {
  return (
    <Modal visible={props.modal}>
      <SafeAreaView>
        <View>
          <Text>Sub Component</Text>
          <TextInput value={props.value} />
          <Button
            title="Close"
            onPress={() => {
              props.SetModal(false);
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default Subcomponent;

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, FlatList, Modal, SafeAreaView, Text, View} from 'react-native';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const [webData, SetwebData] = useState();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then(response => SetwebData(response.data))
        .catch(e => console.log(e));
    }, 5000);
  }, [visible]);

  const handle = () => {
    setVisible(true);
  };
  const handle2 = () => {
    setVisible(false);
  };

  const id: string = '/1';

  const deletehandle = () => {
    axios
      .delete(url + id)
      .then(response => SetwebData(response.data.name))
      .catch(e => console.log(e));
    setVisible(true);
  };

  console.log(webData);
  return (
    <SafeAreaView>
      <View>
        <Text>Hello!</Text>
        <Button title="fetch" onPress={handle} />
        <Button title="delete" onPress={deletehandle} />
        <Modal visible={visible} animationType="slide">
          <View style={{marginTop: 100}}>
            <FlatList
              data={webData}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                );
              }}
            />
            <Button title="close" onPress={handle2} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default App;

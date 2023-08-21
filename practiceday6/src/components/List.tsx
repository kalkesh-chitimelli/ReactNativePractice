import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';
import Listmodal from './Listmodal';

function List() {
  const [Data, setData] = useState<any>();
  const [value, setValue] = useState(false);

  const uri: string = 'https://jsonplaceholder.typicode.com/posts';

  setTimeout(() => {
    axios
      .get(uri)
      .then(response => setData([response.data]))
      .catch(e => console.log(e));
  }, 5000);

  return (
    <SafeAreaView>
      <Text>In List Page!!!</Text>
      <Button title="Modal" onPress={() => setValue(true)} />
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          );
        }}
      />
      <Listmodal value={value} setvalue={setValue} />
    </SafeAreaView>
  );
}

export default List;

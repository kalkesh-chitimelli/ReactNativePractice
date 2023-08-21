import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

function App() {
  interface Idata {
    name: string;
    email: string;
    phone: string;
  }

  const [Data, Setdata] = useState<Idata[]>();

  const url = 'https://jsonplaceholder.typicode.com/users';

  setTimeout(() => {
    axios
      .get(url)
      .then(response => Setdata(response.data))
      .catch(e => console.log(e));
  }, 5000);

  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.phone}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default App;

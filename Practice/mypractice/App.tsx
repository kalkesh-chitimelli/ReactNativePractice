import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Myform, {Idetails} from './src/myForm';

function App() {
  const [detailsList, setDetailsList] = useState<Idetails[]>([]);

  const appendDetails = (details: Idetails) => {
    setDetailsList(prev => [...prev, details]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, borderBottomWidth: 1}}>
        <Myform appendDetails={appendDetails} />
      </View>
      <View style={{flex: 4, borderBottomWidth: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Text>Name</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Age</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>Role</Text>
          </View>
        </View>
        <FlatList
          data={detailsList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{item.age}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{item.role}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

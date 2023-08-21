import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export interface Idetails {
  name: string;
  age: string;
  role: string;
}

interface Iprops {
  appendDetails: Function;
}

function Myform(props: Iprops) {
  const [details, setDeatils] = useState<Idetails>({
    name: '',
    age: '',
    role: '',
  });
  const [touchability, Settouchability] = useState(false);

  const handleAge = (val: string) => {
    Number(val) <= 19
      ? setDeatils(prev => ({...prev, age: val}))
      : Alert.alert('Age should be less than or equal to 19');
  };

  const handleRole = (val: string) => {
    setDeatils(prev => ({...prev, role: val}));
    Settouchability(true);
  };

  const handleSubmit = () => {
    console.log(details);
    props.appendDetails(details);
    setDeatils(prev => ({...prev, name: '', age: '', role: ''}));
    Settouchability(false);
  };

  return (
    <View>
      <Text>Under-19 Cricket Form!!!</Text>
      <TextInput
        placeholder="Name"
        value={details.name}
        onChangeText={val => setDeatils(prev => ({...prev, name: val}))}
      />
      <TextInput
        placeholder="Age"
        value={details.age}
        onChangeText={val => handleAge(val)}
      />
      <Text>Role : </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => handleRole('Batsman')}
          disabled={touchability}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5140/5140406.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRole('Bowler')}
          disabled={touchability}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1099/1099680.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRole('Wicket Keeper')}
          disabled={touchability}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/6269/6269232.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRole('All Rounder')}
          disabled={touchability}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/6681/6681538.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Settouchability(false)}>
          <Text>Reset Role </Text>
        </TouchableOpacity>
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default Myform;

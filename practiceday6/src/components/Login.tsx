import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Login({navigation}: any) {
  const [user, Setuser] = useState<string>('');
  const [password, Setpassword] = useState<string>('');

  const loginHandler = () => {
    if (user === '' || password === '') {
      Alert.alert('Enter uesrename / password');
    } else {
      navigation.navigate('List');
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={Setuser} />
      <TextInput
        placeholder="Password"
        onChangeText={Setpassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={loginHandler}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

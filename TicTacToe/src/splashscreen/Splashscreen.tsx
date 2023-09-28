import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';

function Splashscreen() {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/id/1292919739/vector/tic-tac-toe-school-game-colorful-seamless-pattern-for-fabric-and-print-on-the-paper.jpg?s=612x612&w=0&k=20&c=Q4gMspKHffPmhKuofb_Rb_WCD8uAgbsbXSKuWEcziM8=',
        }}>
        <Text style={styles.text}>Tic Tac Toe</Text>
      </ImageBackground>
    </View>
  );
}

export default Splashscreen;

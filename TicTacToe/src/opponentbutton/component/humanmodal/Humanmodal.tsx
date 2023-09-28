import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Humanmodal(props: any) {
  const [playerName1, SetplayerName1] = useState('');
  const [playerName2, SetplayerName2] = useState('');
  return (
    <Modal visible={props.humanModal} transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
              <View style={styles.xIcon}>
                <Foundation name="x" size={20} color="white" />
              </View>
              <Text style={styles.inputLableText}>Player 1</Text>
            </View>
            <TextInput
              placeholder="Enter Your Name"
              style={styles.inputTextContainer}
              onChangeText={SetplayerName1}
              autoCorrect={false}
            />
            <View style={styles.inputLabelContainer}>
              <View style={styles.oIcon}>
                <FontAwesome name="circle-o" size={16} color="white" />
              </View>
              <Text style={styles.inputLableText}>Player 2</Text>
            </View>
            <TextInput
              placeholder="Enter Your Name"
              style={styles.inputTextContainer}
              onChangeText={SetplayerName2}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.Setplayer1(playerName1);
                props.Setplayer2(playerName2);
                props.Setodd('x');
                props.Seteven('circle-o');
                props.SetenableView('auto');
                props.SethumanModal(false);
              }}
              disabled={
                playerName1 === '' || playerName2 === '' ? true : false
              }>
              <View style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>Done</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.SethumanButtonConstant(0);
                props.SethumanModal(false);
              }}>
              <View style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Humanmodal;

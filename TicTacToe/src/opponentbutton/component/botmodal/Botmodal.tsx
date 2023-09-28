/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
// @ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Botmodal(props: any) {
  const data = [
    {
      label: <Foundation name="x" size={20} color="#8533ff" />,
      id: 'Player1',
    },
    {
      label: <FontAwesome name="circle-o" size={18} color="#ffa31a" />,
      id: 'Player2',
    },
  ];
  const [playerName, SetplayerName] = useState('');
  return (
    <Modal visible={props.botModal} transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLableText}>Player</Text>
            <TextInput
              placeholder="Enter Your Name"
              style={styles.inputTextContainer}
              onChangeText={SetplayerName}
              autoCorrect={false}
            />

            <RadioButtonRN
              data={data}
              selectedBtn={(e: any) => {
                props.SetplayerType(e.id);
                props.Setodd('x');
                props.Seteven('circle-o');
                {
                  e.id === 'Player1'
                    ? (props.Setplayer1(playerName), props.Setplayer2('Bot'))
                    : (props.Setplayer1('Bot'), props.Setplayer2(playerName));
                }
              }}
              box={false}
              circleSize={10}
              activeColor="#1a8cff"
              deactiveColor="#1a8cff"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.SetenableView('auto');
                props.SetbotModal(false);
              }}
              disabled={playerName === '' ? true : false}>
              <View style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>Done</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.SetbotButtonConstant(0);
                props.SetbotModal(false);
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

export default Botmodal;

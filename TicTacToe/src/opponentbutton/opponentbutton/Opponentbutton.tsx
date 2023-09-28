/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Opponentbutton(props: any) {
  const humanFunction = () => {
    props.SethumanModal(true);
    props.SethumanButtonConstant(1);
  };
  const botFunction = () => {
    props.SetbotButtonConstant(1);
    props.SetbotModal(true);
  };
  const changehumanButtonConstant = () => {
    props.humanButtonConstant === 0
      ? humanFunction()
      : props.SethumanButtonConstant(0);
  };
  const changeBotButtonConstant = () => {
    props.botButtonConstant === 0
      ? botFunction()
      : props.SetbotButtonConstant(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonOuterContainer}>
        <TouchableOpacity
          disabled={
            props.botButtonConstant || props.humanButtonConstant === 1
              ? true
              : false
          }
          onPress={() => {
            changehumanButtonConstant();
          }}>
          <View
            style={[
              styles.buttonInnerContainer,
              {
                backgroundColor:
                  props.humanButtonConstant === 0 ? 'transparent' : '#1a8cff',
              },
            ]}>
            <View style={styles.humanIcon}>
              <Ionicons
                name="person"
                color={props.humanButtonConstant === 0 ? '#1a8cff' : 'black'}
                size={20}
              />
            </View>
            <View style={styles.humanButtonText}>
              <Text style={styles.buttonText}>vs</Text>
            </View>
            <View style={styles.humanIcon}>
              <Ionicons
                name="person"
                color={props.humanButtonConstant === 0 ? '#1a8cff' : 'black'}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            props.botButtonConstant || props.humanButtonConstant === 1
              ? true
              : false
          }
          onPress={() => {
            changeBotButtonConstant();
          }}>
          <View
            style={[
              styles.buttonInnerContainer,
              {
                backgroundColor:
                  props.botButtonConstant === 0 ? 'transparent' : '#1a8cff',
              },
            ]}>
            <View style={styles.botIcon}>
              <MaterialCommunityIcons
                name="robot"
                color={props.botButtonConstant === 0 ? '#1a8cff' : 'black'}
                size={20}
              />
            </View>
            <View style={styles.botText}>
              <Text style={styles.buttonText}>bot</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Opponentbutton;

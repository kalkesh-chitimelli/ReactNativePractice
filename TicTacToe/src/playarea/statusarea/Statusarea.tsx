/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import RNRestart from 'react-native-restart';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Statusarea(props: any) {
  return (
    <View style={styles.mainView}>
      <View style={styles.innerView}>
        <View>
          {props.lineConstant === true ? (
            <FontAwesome6 name="trophy" size={40} color="gold" />
          ) : props.result === '' && props.counter > 9 ? (
            <MaterialIcons name="alarm-off" size={40} color="silver" />
          ) : (
            <MaterialIcons name="alarm" size={40} color="silver" />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.statusText}>STATUS</Text>
          <Text style={styles.playerText}>
            {props.lineConstant === true
              ? `Win ${props.counter % 2 === 0 ? props.player1 : props.player2}`
              : props.result === '' && props.counter > 9
              ? "It's a tie!!!"
              : `Play ${
                  props.counter % 2 !== 0 ? props.player1 : props.player2
                }`}
          </Text>
        </View>
        <View style={styles.newGameContainer}>
          <TouchableOpacity
            disabled={
              props.lineConstant === true ||
              (props.result === '' && props.counter > 9)
                ? false
                : true
            }
            onPress={() => RNRestart.restart()}>
            <MaterialCommunityIcons
              name="restart"
              size={40}
              color={
                props.lineConstant === true ||
                (props.result === '' && props.counter > 9)
                  ? 'white'
                  : 'grey'
              }
            />
          </TouchableOpacity>
          <Text
            style={{
              color:
                props.lineConstant === true ||
                (props.result === '' && props.counter > 9)
                  ? 'white'
                  : 'grey',
            }}>
            Restart
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Statusarea;

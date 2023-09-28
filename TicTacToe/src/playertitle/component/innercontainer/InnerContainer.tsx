/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

function InnerContainer(props: any) {
  return (
    <View style={styles.mainView}>
      <View
        style={[
          styles.iconView,
          {backgroundColor: props.player === 'Player1' ? '#8533ff' : '#ffa31a'},
        ]}>
        {props.player === 'Player1' ? (
          <Foundation name="x" size={25} color="white" />
        ) : (
          <FontAwesome name="circle-o" size={18} color="white" />
        )}
      </View>
      <View style={styles.titleView}>
        {props.textLabel === 'single' ? (
          <View>
            <Text>Player</Text>
          </View>
        ) : (
          <View>
            {props.player === 'Player1' ? (
              <Text>Player1</Text>
            ) : (
              <Text>Player2</Text>
            )}
          </View>
        )}
        <View>
          <Text>{props.playerName}</Text>
        </View>
      </View>
    </View>
  );
}

export default InnerContainer;

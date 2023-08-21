/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ePriority} from '../preDefinedTypes';

function Commoncomponent(props: any) {
  const [bgColor, SetbgColor] = useState({
    high: '#fff',
    medium: '#fff',
    low: '#fff',
  });
  const [textColor, SettextColor] = useState({
    high: '#f73446',
    medium: '#ffbd21',
    low: '#0ac947',
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text>Priority:</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#f73446',
          backgroundColor: bgColor.high,
          borderRadius: 4,
        }}
        onPress={() => {
          SetbgColor({
            ...bgColor,
            high: '#f73446',
            medium: '#fff',
            low: '#fff',
          });
          SettextColor({
            high: '#fff',
            medium: '#ffbd21',
            low: '#0ac947',
          });
          props.settaskObj({...props.taskObj, priority: ePriority.High});
        }}>
        <Text style={{color: textColor.high}}> High </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#ffbd21',
          backgroundColor: bgColor.medium,
          borderRadius: 4,
        }}
        onPress={() => {
          SetbgColor({
            ...bgColor,
            medium: '#ffbd21',
            high: '#fff',
            low: '#fff',
          });
          SettextColor({
            high: '#f73446',
            medium: '#fff',
            low: '#0ac947',
          });
          props.settaskObj({...props.taskObj, priority: ePriority.Medium});
        }}>
        <Text style={{color: textColor.medium}}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#0ac947',
          backgroundColor: bgColor.low,
          borderRadius: 4,
        }}
        onPress={() => {
          SetbgColor({
            ...bgColor,
            medium: '#fff',
            high: '#fff',
            low: '#0ac947',
          });
          SettextColor({
            high: '#f73446',
            medium: '#ffbd21',
            low: '#fff',
          });
          props.settaskObj({...props.taskObj, priority: ePriority.Low});
        }}>
        <Text style={{color: textColor.low}}>Low</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Commoncomponent;

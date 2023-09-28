/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {text} from './data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

function Playground(props: any) {
  const [tileArray, SettitleArray] = useState(text);
  const [rotate, Setrotate] = useState('0deg');
  const [translateX, SettranslateX] = useState(0);
  const [translateY, SettranslateY] = useState(0);
  const [lineColor, SetlineColor] = useState('');
  const [height, Setheight] = useState(0);
  const [width, Setwidth] = useState(0);

  const tileButtonHandler = (num: any) => {
    props.Setcounter(props.counter + 1);
    SettitleArray(
      tileArray.map((item: any) => {
        if (item.id === num) {
          return {
            ...item,
            disabled: true,
            val:
              props.counter % 2 === 0 ? (
                <FontAwesome name="circle-o" size={35} color="#ffa31a" />
              ) : (
                <Foundation name="x" size={30} color="#8533ff" />
              ),
            valStore:
              props.counter % 2 === 0
                ? props.even === 'circle-o'
                  ? 'o'
                  : 'x'
                : props.odd === 'circle-o'
                ? 'o'
                : 'x',
          };
        } else {
          return item;
        }
      }),
    );
  };

  useEffect(() => {
    if (
      tileArray[0].valStore === 'x' &&
      tileArray[1].valStore === 'x' &&
      tileArray[2].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(-110);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[3].valStore === 'x' &&
      tileArray[4].valStore === 'x' &&
      tileArray[5].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(0);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[6].valStore === 'x' &&
      tileArray[7].valStore === 'x' &&
      tileArray[8].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(110);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[0].valStore === 'x' &&
      tileArray[3].valStore === 'x' &&
      tileArray[6].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(-110);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[1].valStore === 'x' &&
      tileArray[4].valStore === 'x' &&
      tileArray[7].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(0);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[2].valStore === 'x' &&
      tileArray[5].valStore === 'x' &&
      tileArray[8].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(110);
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[0].valStore === 'x' &&
      tileArray[4].valStore === 'x' &&
      tileArray[8].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(450);
      Setwidth(4);
      Setrotate('-45deg');
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[2].valStore === 'x' &&
      tileArray[4].valStore === 'x' &&
      tileArray[6].valStore === 'x'
    ) {
      props.SetlineConstant(true);
      Setheight(450);
      Setwidth(4);
      Setrotate('45deg');
      SetlineColor('#8533ff');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[0].valStore === 'o' &&
      tileArray[1].valStore === 'o' &&
      tileArray[2].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(-110);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[3].valStore === 'o' &&
      tileArray[4].valStore === 'o' &&
      tileArray[5].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(0);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[6].valStore === 'o' &&
      tileArray[7].valStore === 'o' &&
      tileArray[8].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(4);
      Setwidth(330);
      SettranslateY(110);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[0].valStore === 'o' &&
      tileArray[3].valStore === 'o' &&
      tileArray[6].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(-110);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[1].valStore === 'o' &&
      tileArray[4].valStore === 'o' &&
      tileArray[7].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(0);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[2].valStore === 'o' &&
      tileArray[5].valStore === 'o' &&
      tileArray[8].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(330);
      Setwidth(4);
      SettranslateX(110);
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[0].valStore === 'o' &&
      tileArray[4].valStore === 'o' &&
      tileArray[8].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(450);
      Setwidth(4);
      Setrotate('-45deg');
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (
      tileArray[2].valStore === 'o' &&
      tileArray[4].valStore === 'o' &&
      tileArray[6].valStore === 'o'
    ) {
      props.SetlineConstant(true);
      Setheight(450);
      Setwidth(4);
      Setrotate('45deg');
      SetlineColor('#ffa31a');
      props.Setresult('won');
      props.SetenableView('none');
    } else if (props.result === '' && props.counter > 9) {
      props.SetenableView('none');
    }
  }, [tileArray]);
  return (
    <View style={styles.mainView} pointerEvents={props.enableView}>
      <View style={styles.innerView}>
        <View style={styles.groupView}>
          <TouchableOpacity
            onPress={() => tileButtonHandler(1)}
            disabled={tileArray[0].disabled}>
            <View style={styles.tileView}>{tileArray[0].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(2)}
            disabled={tileArray[1].disabled}>
            <View style={styles.tileView}>{tileArray[1].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(3)}
            disabled={tileArray[2].disabled}>
            <View style={styles.tileView}>{tileArray[2].val}</View>
          </TouchableOpacity>
        </View>
        <View style={styles.groupView}>
          <TouchableOpacity
            onPress={() => tileButtonHandler(4)}
            disabled={tileArray[3].disabled}>
            <View style={styles.tileView}>{tileArray[3].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(5)}
            disabled={tileArray[4].disabled}>
            <View style={styles.tileView}>{tileArray[4].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(6)}
            disabled={tileArray[5].disabled}>
            <View style={styles.tileView}>{tileArray[5].val}</View>
          </TouchableOpacity>
        </View>
        <View style={styles.groupView}>
          <TouchableOpacity
            onPress={() => tileButtonHandler(7)}
            disabled={tileArray[6].disabled}>
            <View style={styles.tileView}>{tileArray[6].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(8)}
            disabled={tileArray[7].disabled}>
            <View style={styles.tileView}>{tileArray[7].val}</View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => tileButtonHandler(9)}
            disabled={tileArray[8].disabled}>
            <View style={styles.tileView}>{tileArray[8].val}</View>
          </TouchableOpacity>
        </View>
        {props.lineConstant === true ? (
          <View
            style={[
              styles.line,
              {
                backgroundColor: lineColor,
                transform: [
                  {translateX: translateX},
                  {translateY: translateY},
                  {rotate: rotate},
                ],
                height: height,
                width: width,
              },
            ]}
          />
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

export default Playground;

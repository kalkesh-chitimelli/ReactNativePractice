import React from 'react';
import {View} from 'react-native';
import InnerContainer from '../component/innercontainer/InnerContainer';
import {styles} from './styles';

function Playertitle(props: any) {
  const player1 = 'Player1';
  const player2 = 'Player2';
  const textLabel = 'single';
  const humanContainer = () => {
    return (
      <View style={styles.humanContainerView}>
        <InnerContainer playerName={props.player1} player={player1} />
        <InnerContainer playerName={props.player2} player={player2} />
      </View>
    );
  };
  const botConatiner = () => {
    return (
      <InnerContainer
        playerName={props.player1 === 'Bot' ? props.player2 : props.player1}
        player={props.playerType}
        textLabel={textLabel}
      />
    );
  };
  return (
    <View style={styles.botContainerView}>
      {props.humanButtonConstant === 1
        ? humanContainer()
        : props.botButtonConstant === 1
        ? botConatiner()
        : ''}
    </View>
  );
}

export default Playertitle;

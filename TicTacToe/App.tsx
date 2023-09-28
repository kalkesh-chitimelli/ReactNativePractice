import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

import Opponentbutton from './src/opponentbutton/opponentbutton/Opponentbutton';
import Playertitle from './src/playertitle/playertitle/Playertitle';
import Humanmodal from './src/opponentbutton/component/humanmodal/Humanmodal';
import Botmodal from './src/opponentbutton/component/botmodal/Botmodal';
import Playground from './src/playarea/playground/Playground';
import Statusarea from './src/playarea/statusarea/Statusarea';
import Splashscreen from './src/splashscreen/Splashscreen';

function App() {
  const [humanButtonConstant, SethumanButtonConstant] = useState(0);
  const [botButtonConstant, SetbotButtonConstant] = useState(0);
  const [humanModal, SethumanModal] = useState(false);
  const [botModal, SetbotModal] = useState(false);
  const [player1, Setplayer1] = useState('');
  const [player2, Setplayer2] = useState('');
  const [playerType, SetplayerType] = useState();
  const [even, Seteven] = useState();
  const [odd, Setodd] = useState();
  const [lineConstant, SetlineConstant] = useState(false);
  const [counter, Setcounter] = useState(1);
  const [result, Setresult] = useState('');
  const [enableView, SetenableView] = useState('none');
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3500);
  }, []);

  if (splash) {
    return <Splashscreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Tic Tac Toe</Text>
        <Opponentbutton
          humanButtonConstant={humanButtonConstant}
          SethumanButtonConstant={SethumanButtonConstant}
          botButtonConstant={botButtonConstant}
          SetbotButtonConstant={SetbotButtonConstant}
          SethumanModal={SethumanModal}
          SetbotModal={SetbotModal}
        />
      </View>
      <View style={styles.midContainer}>
        <Statusarea
          lineConstant={lineConstant}
          counter={counter}
          Setcounter={Setcounter}
          player1={player1}
          player2={player2}
          result={result}
          Setresult={Setresult}
        />
        <Playground
          even={even}
          odd={odd}
          player1={player1}
          player2={player2}
          SetlineConstant={SetlineConstant}
          lineConstant={lineConstant}
          counter={counter}
          Setcounter={Setcounter}
          result={result}
          Setresult={Setresult}
          enableView={enableView}
          SetenableView={SetenableView}
        />
      </View>
      <View style={styles.footerContainer}>
        <Playertitle
          humanButtonConstant={humanButtonConstant}
          botButtonConstant={botButtonConstant}
          playerType={playerType}
          player1={player1}
          player2={player2}
        />
      </View>
      <Humanmodal
        humanModal={humanModal}
        Setplayer1={Setplayer1}
        Setplayer2={Setplayer2}
        Seteven={Seteven}
        Setodd={Setodd}
        SethumanButtonConstant={SethumanButtonConstant}
        SethumanModal={SethumanModal}
        SetenableView={SetenableView}
      />
      <Botmodal
        botModal={botModal}
        Setplayer1={Setplayer1}
        Setplayer2={Setplayer2}
        Seteven={Seteven}
        Setodd={Setodd}
        SetbotModal={SetbotModal}
        SetbotButtonConstant={SetbotButtonConstant}
        SetplayerType={SetplayerType}
        SetenableView={SetenableView}
      />
    </SafeAreaView>
  );
}

export default App;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {flex: 1},
  innerView: {
    borderWidth: 3,
    padding: 15,
    height: 90,
    width: 350,
    borderColor: '#004280',
    borderRadius: 12,
    backgroundColor: '#004280',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
  newGameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  statusText: {color: 'silver', fontSize: 15},
  playerText: {color: 'white', fontSize: 25},
});

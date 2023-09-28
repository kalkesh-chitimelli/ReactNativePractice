import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {flex: 3},
  innerView: {
    borderWidth: 3,
    height: 350,
    width: 350,
    borderColor: '#004280',
    borderRadius: 12,
    backgroundColor: '#004280',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tileView: {
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 12,
    height: 80,
    width: 80,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
  },
});

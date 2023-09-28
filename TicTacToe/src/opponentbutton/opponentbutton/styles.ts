import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonOuterContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonInnerContainer: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 5,
    width: 115,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  humanIcon: {
    flex: 0.25,
    alignItems: 'center',
  },
  humanButtonText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botIcon: {
    flex: 0.25,
  },
  botText: {
    flex: 0.5,
  },
});

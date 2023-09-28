import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalView: {
    height: 200,
    width: 400,
    backgroundColor: '#003566',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  inputContainer: {
    flex: 3,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  inputLableText: {fontWeight: 'bold', color: 'white', fontSize: 20},
  inputTextContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? 25 : 35,
    borderRadius: 3,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInnerContainer: {
    borderWidth: 4,
    borderColor: '#001a33',
    backgroundColor: '#001a33',
    borderRadius: 5,
    width: 115,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

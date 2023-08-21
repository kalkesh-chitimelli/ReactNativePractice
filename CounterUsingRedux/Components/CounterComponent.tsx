/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {decrement, increment, reset} from '../src/actions';
function CounterComponent(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Counter App</Text>
        <Button
          title="Increment"
          onPress={() => {
            props.dispatch(increment());
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{borderWidth: 1}}>Count :{props.count}</Text>
          <Button
            title="Reset"
            onPress={() => {
              props.dispatch(reset());
            }}
          />
        </View>
        <Button
          title="Decrement"
          onPress={() => {
            props.dispatch(decrement());
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state: {count: number}) => {
  return {
    count: state.count,
  };
};

// const mapDispatchToprops = dispatch => {
//   return {
//     incrementCount: () => {
//       dispatch(increment());
//     },
//     decrementCount: () => {
//       dispatch(decrement());
//     },
//     resetCount: () => {
//       dispatch(reset());
//     },
//   };
// };

export default connect(mapStateToProps)(CounterComponent);

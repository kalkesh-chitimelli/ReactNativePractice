import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import CounterComponent from './Components/CounterComponent';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </React.StrictMode>
  );
}

export default App;

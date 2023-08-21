import {createStore} from 'redux';
import {counterReducer} from './reducer';
//import * as Reducer from './reducer';

//const rootReducer = combineReducers({counter: Reducer.counterReducer});

//const store = createStore(rootReducer);

const store = createStore(counterReducer);

export default store;

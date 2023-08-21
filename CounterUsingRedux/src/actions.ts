import {Decrement, Increment, Reset} from './constants';

export const increment = () => {
  return {type: Increment};
};

export const decrement = () => ({type: Decrement});

export const reset = () => ({type: Reset});

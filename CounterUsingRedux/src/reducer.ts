import * as actionConstants from './constants';

const Initial_state = {
  count: 0,
};

export const counterReducer = (state = Initial_state, action: any) => {
  switch (action.type) {
    case actionConstants.Increment: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case actionConstants.Decrement: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case actionConstants.Reset: {
      return {
        ...state,
        count: 0,
      };
    }
    default:
      return state;
  }
};

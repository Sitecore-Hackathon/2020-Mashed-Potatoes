import { Reducer } from 'redux';

import { VariableValueSetterAction } from './actionTypes';
import { SET_VARIABLE_FALSE, SET_VARIABLE_TRUE, SET_VARIABLE_VALUE } from './constants';
import { State } from './models';

const initialState: State = {
  variable: true,
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case SET_VARIABLE_FALSE: {
      return {
        ...state,
        variable: false,
      };
    }
    case SET_VARIABLE_TRUE: {
      return {
        ...state,
        variable: true,
      };
    }
    case SET_VARIABLE_VALUE: {
      return {
        ...state,
        variable: (action as VariableValueSetterAction).payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

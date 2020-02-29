import { createAction } from '../utils';

import { SET_VARIABLE_TRUE, SET_VARIABLE_FALSE, SET_VARIABLE_VALUE } from './constants';

import { VariableValueSetter } from './actionTypes';

export const setVariableTrue = createAction(SET_VARIABLE_TRUE);

export const setVariableFalse = createAction(SET_VARIABLE_FALSE);

export const setVariableValue: VariableValueSetter = createAction(SET_VARIABLE_VALUE);

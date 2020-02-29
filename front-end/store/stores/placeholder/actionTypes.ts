import { Action } from '../internalModels';

export type VariableValueSetterAction = Action<boolean>;

export type VariableValueSetter = (value: boolean) => VariableValueSetterAction;

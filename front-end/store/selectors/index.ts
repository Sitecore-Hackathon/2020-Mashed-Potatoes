import { AppState } from '../models';
import stores from '../stores';

const {
  Placeholder: { selectors: placeholderSelectors },
} = stores;

export const getPlaceholderState = (state: AppState) => state.reducerPlaceholder;

export const getPlaceholderStateVariable = (state: AppState) =>
  placeholderSelectors.getVariable(state.reducerPlaceholder);

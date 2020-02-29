import { combineReducers, Reducer } from 'redux';

import { AppState } from './models';
import stores from './stores';

const reducer: Reducer = combineReducers<AppState>({
  reducerPlaceholder: stores.Placeholder.reducer,
});

export default reducer;

import { Store } from 'redux';

import { PlaceholderState } from './stores';

export interface AppState {
  reducerPlaceholder: PlaceholderState;
}

export type AppStore = Store<AppState>;

import { applyMiddleware, createStore, DeepPartial } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { MakeStore } from 'next-redux-wrapper';

import { AppState } from './models';
import reducer from './reducer';
import rootSaga from './sagas';
import stores from './stores';

export * from './selectors';
export * from './models';

interface StoreConfigurationConfig {
  preloadedState: DeepPartial<AppState>;
  runSaga: boolean;
}

export const actions = {
  placeholder: stores.Placeholder.actions,
};

export const configureStore = ({ preloadedState, runSaga }: StoreConfigurationConfig) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, preloadedState, applyMiddleware(sagaMiddleware));

  if (runSaga) {
    sagaMiddleware.run(rootSaga);
  }

  return store;
};

const makeStore: MakeStore = (preloadedState, { isServer }) =>
  configureStore({
    preloadedState,
    runSaga: !isServer,
  });

export default makeStore;

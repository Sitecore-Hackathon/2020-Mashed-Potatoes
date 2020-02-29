import Redux from 'redux';

export interface Action<TPayload = never> extends Redux.Action {
  payload: TPayload;
}

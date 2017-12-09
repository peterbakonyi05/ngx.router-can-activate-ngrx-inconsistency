import { Action } from '@ngrx/store';

import { AUTH_ACTION_TYPE } from './auth.action';
import { AuthState } from './auth.model';

const INITIAL_STATE: AuthState = {};


export function authReducer(state = INITIAL_STATE, action: Action): AuthState {
  switch (action.type) {
    case AUTH_ACTION_TYPE.verify:
      return {
        ...state,
        isAuthenticated: undefined
      };
    case AUTH_ACTION_TYPE.verifySuccess:
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH_ACTION_TYPE.verifyFail:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

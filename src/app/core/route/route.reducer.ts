import { Action } from '@ngrx/store';

import * as route from './route.action';
import { RouteState } from './route.model';

const INITIAL_STATE: RouteState = {};


export function routeReducer(state = INITIAL_STATE, action: route.Actions): RouteState {
  switch (action.type) {
    case route.RESOLVE_END:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
}

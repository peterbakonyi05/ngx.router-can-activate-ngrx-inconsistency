import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/observeOn';

import { CoreState } from './state';

import { Action, ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';

import { RouteState } from './route/route.model';
import { routeReducer } from './route/route.reducer';

export { AuthAction, AUTH_ACTION_TYPE } from './auth/auth.action';
export { AuthAnonymousGuard } from './auth/auth-anonymous.guard';
export { AuthenticationStatus, AuthState } from './auth/auth.model';
export { AuthSelector } from './auth/auth.selector';

export { RouteState, Route } from './route/route.model';
export { RouteSelector } from './route/route.selector';

export { CoreState } from './state';
export { CoreModule } from './module';


export const CORE_REDUCER: ActionReducerMap<CoreState> = {
  auth: authReducer,
  route: routeReducer
};

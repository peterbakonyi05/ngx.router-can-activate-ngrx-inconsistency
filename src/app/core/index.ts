import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/observeOn';

import { CoreState } from './state';

import { Action, ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';

export { AuthAction, AUTH_ACTION_TYPE } from './auth/auth.action';
export { AuthEffect } from './auth/auth.effect';
export { AuthenticationStatus, AuthState } from './auth/auth.model';
export { AuthSelector } from './auth/auth.selector';

export { CoreState } from './state';
export { CoreModule } from './module';


export const CORE_REDUCER: ActionReducerMap<CoreState> = {
  auth: authReducer
};

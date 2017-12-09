import { Observable } from 'rxjs/Observable';
import { mapTo, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { CoreState } from '../state';
import { AUTH_ACTION_TYPE, AuthAction } from './auth.action';

@Injectable()
export class AuthEffect {

  @Effect() login$: Observable<Action> = this.actions$
    .ofType(AUTH_ACTION_TYPE.verify)
    .pipe(
    delay(500),
    mapTo(this.action.verifyFail())
    );

  constructor(
    private actions$: Actions,
    private action: AuthAction,
    private store: Store<CoreState>
  ) {
  }
}

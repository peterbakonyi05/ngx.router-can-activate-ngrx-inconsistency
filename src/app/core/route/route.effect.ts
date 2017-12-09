import { Observable } from 'rxjs/Observable';
import { map, filter, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { CoreState } from '../state';
import * as route from './route.action';

@Injectable()
export class RouteEffect {

  @Effect() login$: Observable<Action> = this.router.events
    .pipe(
    filter(e => e instanceof ResolveEnd),
    tap(() => console.log('RESOLVE END EFFECT IS RUNNING')),
    map((e: ResolveEnd) => new route.ResolveEnd({ path: e.url }))
    );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<CoreState>
  ) {
  }
}

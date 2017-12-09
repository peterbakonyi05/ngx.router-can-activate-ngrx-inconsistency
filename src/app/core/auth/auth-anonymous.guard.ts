
import { Observable } from 'rxjs/Observable';
import { map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { CoreState } from '../state';
import { AuthAction } from './auth.action';
import { AuthSelector } from './auth.selector';
import { AuthenticationStatus } from './auth.model';

@Injectable()
export class AuthAnonymousGuard implements CanActivate {

  constructor(
    private store: Store<CoreState>,
    private selector: AuthSelector,
    private authAction: AuthAction
  ) {
  }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(this.authAction.verify());

    return this.store.select(this.selector.getAuthenticationStatus())
      .pipe(
      first(status => status !== AuthenticationStatus.Pending),
      map(status => {
        if (status === AuthenticationStatus.NotAuthenticated) {
          return true;
        }

        return false;
      })
      );
  }

}

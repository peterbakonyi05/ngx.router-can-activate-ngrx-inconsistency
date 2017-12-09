import { Injectable } from '@angular/core';

import { CoreState } from '../state';
import { AuthState, AuthenticationStatus } from './auth.model';

@Injectable()
export class AuthSelector {

  getAuthenticationStatus() {
    return (state: CoreState): AuthenticationStatus => {
      if (state.auth.isAuthenticated) {
        return AuthenticationStatus.Authenticated;
      }
      if (state.auth.isAuthenticated === false) {
        return AuthenticationStatus.NotAuthenticated;
      }
      return AuthenticationStatus.Pending;
    };
  }
}

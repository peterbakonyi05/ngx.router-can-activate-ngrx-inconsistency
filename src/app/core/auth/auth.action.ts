import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const ACTION_PREFIX = '[Auth]';
export const AUTH_ACTION_TYPE = {
  verify: `${ACTION_PREFIX} Verify`,
  verifySuccess: `${ACTION_PREFIX} Verify Success`,
  verifyFail: `${ACTION_PREFIX} Verify Fail`
};

@Injectable()
export class AuthAction {

  verify(): Action {
    return {
      type: AUTH_ACTION_TYPE.verify
    };
  }

  verifySuccess(): Action {
    return {
      type: AUTH_ACTION_TYPE.verifySuccess
    };
  }

  verifyFail(): Action {
    return {
      type: AUTH_ACTION_TYPE.verifyFail
    };
  }

}

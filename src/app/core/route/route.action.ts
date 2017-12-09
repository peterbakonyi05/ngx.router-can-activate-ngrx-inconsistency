import { Action } from '@ngrx/store';

import { Route } from './route.model';

export const ACTION_PREFIX = '[Route]';
export const RESOLVE_END = `${ACTION_PREFIX} Resolve End`;

export class ResolveEnd {
  readonly type = RESOLVE_END;

  constructor(public payload: Route) { }
}

export type Actions = | ResolveEnd;

import { AuthState } from './auth/auth.model';
import { RouteState } from './route/route.model';

export interface CoreState {
  auth: AuthState;
  route: RouteState;
}

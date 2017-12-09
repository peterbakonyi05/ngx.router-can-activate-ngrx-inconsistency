export enum AuthenticationStatus {
  Pending,
  NotAuthenticated,
  Authenticated
}

export interface AuthState {
  isAuthenticated?: boolean;
}

# Ngx.RouterCanActivateNgrxInconsistency

State update is not consistent with `canActivate` guards.

## Issue

When `AuthAnonymousGuard` is registered as a `canActivate` guard for `login` route, in home page **the selector DOES NOT emit** before `ngOnDestroy` is called.

When `AuthAnonymousGuard` is **NOT** registered as a `canActivate` guard for `login` route, in home page **the selector emits** before `ngOnDestroy` is called.

In both cases `RouteEffect` for `ResolveEnd` is running before `ngOnDestroy` but in one case, the state does not get updated on time.

## How to start
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

```
npm i
npm start
```

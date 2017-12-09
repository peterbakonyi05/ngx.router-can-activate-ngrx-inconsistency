# Ngx.RouterCanActivateNgrxInconsistency

State update is not consistent with `canActivate` guards.

## Issue

When `AuthAnonymousGuard` is registered as a `canActivate` guard for `login` route in `app.module.ts`, **RouteSelector.getCurrent DOES NOT emit** in `home.page.ts` before `ngOnDestroy` is called.

When `AuthAnonymousGuard` is **NOT** registered as a `canActivate` guard for `login` route in `app.module.ts`, **RouteSelector.getCurrent emits** in `home.page.ts` before `ngOnDestroy` is called.

In both cases `RouteEffect.resolveEnd$` is running before `ngOnDestroy` as expected. However the state does not get updated before `ngOnDestroy` when the guard is running.

## How to start
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

```
npm i
npm start
```

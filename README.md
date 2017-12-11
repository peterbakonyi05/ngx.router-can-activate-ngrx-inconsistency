# Ngx Router CanActivate Inconsistent state change explanation

Why store update is not consistent with `canActivate` guards?

## What is the issue?

When `AuthAnonymousGuard` is registered as a `canActivate` guard for `login` route in `app.module.ts`, **RouteSelector.getCurrent DOES NOT emit** in `home.page.ts` before `ngOnDestroy` is called.

When `AuthAnonymousGuard` is **NOT** registered as a `canActivate` guard for `login` route in `app.module.ts`, **RouteSelector.getCurrent emits** in `home.page.ts` before `ngOnDestroy` is called.

In both cases `RouteEffect.resolveEnd$` is running before `ngOnDestroy` as expected. However the state does not get updated before `ngOnDestroy` when the guard is running.

## How to start
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

```
npm i
npm start
```

## What is the reason?

Ngrx actions are being dispatched in a [queue](https://github.com/ReactiveX/rxjs/blob/master/src/scheduler/QueueAction.ts#L10). The next action won't be dispatched before the current one executed. The issue happens because the guard emits `true` reacting to a dispatched action (`verifySuccess`) synchronously.

Without the guard:
`ResolveEnd` router event => `ResolveEnd` action is dispatched  => actual navigation (`ngOnDestroy`) is called

With the guard registered this is the order:
`verifySuccess action dispatched` => Guard returns `true` => `ResolveEnd` router event => `ResolveEnd` action is queued (still inside verify success action) => actual navigation (`ngOnDestroy`) is called => `ResolveEnd` action dispatched


## What is the solution?
This is not a bug but an expected behavior.

Cleanup logic in `ngOnDestroy` shouldn't depend on a selector and assume that a selector will emit before `ngOnDestroy` is called by angular.

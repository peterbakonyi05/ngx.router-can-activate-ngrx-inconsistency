import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';

import { CORE_REDUCER, CoreModule, AuthAnonymousGuard } from './core/index';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [AuthAnonymousGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    StoreModule.forRoot(CORE_REDUCER, {
      metaReducers: [logger]
    }),
    EffectsModule.forRoot([]),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }


export function logger(reducer: any): any {
  // default, no options
  return storeLogger()(reducer);
}

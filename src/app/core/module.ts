import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AuthAction } from './auth/auth.action';
import { AuthEffect } from './auth/auth.effect';
import { AuthAnonymousGuard } from './auth/auth-anonymous.guard';
import { AuthSelector } from './auth/auth.selector';

import { RouteEffect } from './route/route.effect';
import { RouteSelector } from './route/route.selector';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffect, RouteEffect])
  ],
  providers: [
    AuthAnonymousGuard,
    AuthAction,
    AuthSelector,
    RouteSelector
  ],
  declarations: []
})
export class CoreModule { }

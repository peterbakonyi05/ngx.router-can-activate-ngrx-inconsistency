import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AuthAction } from './auth/auth.action';
import { AuthEffect } from './auth/auth.effect';
import { AuthSelector } from './auth/auth.selector';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthEffect])
  ],
  providers: [
    AuthAction,
    AuthSelector
  ],
  declarations: []
})
export class CoreModule { }

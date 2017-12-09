import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { CoreState, RouteSelector } from '../core/index';

@Component({
  template: '<h1>HOME PAGE</h1>'
})
export class HomePage implements OnInit, OnDestroy {
  private s: Subscription;

  constructor(
    private store: Store<CoreState>,
    private routeSelector: RouteSelector
  ) { }

  ngOnInit() {
    this.s = this.store.select(this.routeSelector.getCurrent())
      .subscribe(data => {
        console.log('HomePage.routeSelector emit', data);
      });
  }
  ngOnDestroy() {
    console.log('HomePage.ngOnDestroy');
    this.s.unsubscribe();
  }
}

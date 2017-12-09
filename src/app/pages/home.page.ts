import { Component, OnDestroy } from '@angular/core';

@Component({
  template: '<h1>HOME PAGE</h1>'
})
export class HomePage implements OnDestroy {
  ngOnDestroy() {
    console.log('HomePage.ngOnDestroy');
  }
}

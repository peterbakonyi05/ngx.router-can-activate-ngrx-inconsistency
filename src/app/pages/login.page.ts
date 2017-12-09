import { Component, OnDestroy } from '@angular/core';

@Component({
  template: '<h1>Login PAGE</h1>'
})
export class LoginPage implements OnDestroy {
  ngOnDestroy() {
    console.log('LoginPage.ngOnDestroy');
  }
}

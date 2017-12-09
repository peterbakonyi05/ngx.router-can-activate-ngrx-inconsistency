import { Injectable } from '@angular/core';

import { CoreState } from '../state';
import { Route} from './route.model';

@Injectable()
export class RouteSelector {

  getCurrent() {
    return (state: CoreState): Route | undefined => state.route.current;
  }
}

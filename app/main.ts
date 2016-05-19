import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide, enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {
  LocationStrategy, HashLocationStrategy
} from "@angular/common";

import { AppComponent } from './app.component';

enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {
  Location
} from "@angular/common";

import { HomeComponent } from './home.component';
import { VideosComponent } from './videos.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['Home']">Home</a></li>
          <li><a [routerLink]="['Videos']">Videos</a></li>
        </ul>
      </div>
    </nav>
    <div id="page-wrapper">
    <div class="row">
      <h1>My First Angular 2 App</h1>
      <router-outlet></router-outlet>
    </div>
    </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/videos',
    name: 'Videos',
    component: VideosComponent
  }
])

export class AppComponent {

  constructor(location: Location) {
    location.go(location.path());
    console.log(location.path())
  }
}

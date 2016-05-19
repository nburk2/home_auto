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
    <nav class="navbar navbar-default navbar-fixed-top affix">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand page-scroll" href="#page-top">Home Auto</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      <li class="">
                          <a [routerLink]="['Home']">Home</a>
                      </li>
                      <li class="">
                          <a [routerLink]="['Videos']">Videos</a>
                      </li>
                      <li class="">
                          <a class="page-scroll" href="#portfolio">Portfolio</a>
                      </li>
                      <li>
                          <a class="page-scroll" href="#contact">Contact</a>
                      </li>
                  </ul>
            </div>
        </div>
    </nav>

    <router-outlet></router-outlet>

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

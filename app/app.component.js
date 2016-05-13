System.register(['@angular/core', '@angular/router-deprecated', "@angular/common", './home.component', './videos.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, common_1, home_component_1, videos_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (videos_component_1_1) {
                videos_component_1 = videos_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    location.go(location.path());
                    console.log(location.path());
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n          <li><a [routerLink]=\"['Home']\">Home</a></li>\n          <li><a [routerLink]=\"['Videos']\">Videos</a></li>\n        </ul>\n      </div>\n    </nav>\n    <div id=\"page-wrapper\">\n    <div class=\"row\">\n      <h1>My First Angular 2 App</h1>\n      <router-outlet></router-outlet>\n    </div>\n    </div>\n    </div>\n  ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/videos',
                            name: 'Videos',
                            component: videos_component_1.VideosComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [common_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
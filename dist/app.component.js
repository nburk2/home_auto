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
                        template: "\n    <nav class=\"navbar navbar-default navbar-fixed-top affix\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand page-scroll\" href=\"#page-top\">Home Auto</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li class=\"\">\n                      <a [routerLink]=\"['Home']\">Home</a>\n                  </li>\n                  <li class=\"\">\n                      <a [routerLink]=\"['Videos']\">Videos</a>\n                  </li>\n                  <li class=\"\">\n                      <a class=\"page-scroll\" href=\"#portfolio\">Portfolio</a>\n                  </li>\n                  <li>\n                      <a class=\"page-scroll\" href=\"#contact\">Contact</a>\n                  </li>\n              </ul>\n        </div>\n    </nav>\n\n    <header>\n        <div class=\"header-content\">\n            <div class=\"header-content-inner\">\n                <h1 style=\"font-size: 65px;\">Your Favorite Source of Free Bootstrap Themes</h1>\n                <hr>\n                <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>\n                <a href=\"#about\" class=\"btn btn-primary btn-xl page-scroll\">Find Out More</a>\n            </div>\n        </div>\n    </header>\n    <section id=\"services\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">At Your Service</h2>\n                    <hr class=\"primary\">\n                </div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box\">\n                        <i class=\"fa fa-4x fa-diamond wow bounceIn text-primary\" style=\"visibility: visible; animation: bounceIn; -webkit-animation: bounceIn;\"></i>\n                        <h3>Sturdy Templates</h3>\n                        <p class=\"text-muted\">Our templates are updated regularly so they don't break.</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box\">\n                        <i class=\"fa fa-4x fa-paper-plane wow bounceIn text-primary\" data-wow-delay=\".1s\" style=\"visibility: visible; animation: bounceIn 0.1s; -webkit-animation: bounceIn 0.1s;\"></i>\n                        <h3>Ready to Ship</h3>\n                        <p class=\"text-muted\">You can use this theme as is, or you can make changes!</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box\">\n                        <i class=\"fa fa-4x fa-newspaper-o wow bounceIn text-primary\" data-wow-delay=\".2s\" style=\"visibility: visible; animation: bounceIn 0.2s; -webkit-animation: bounceIn 0.2s;\"></i>\n                        <h3>Up to Date</h3>\n                        <p class=\"text-muted\">We update dependencies to keep things fresh.</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 text-center\">\n                    <div class=\"service-box\">\n                        <i class=\"fa fa-4x fa-heart wow bounceIn text-primary\" data-wow-delay=\".3s\" style=\"visibility: visible; animation: bounceIn 0.3s; -webkit-animation: bounceIn 0.3s;\"></i>\n                        <h3>Made with Love</h3>\n                        <p class=\"text-muted\">You have to make your websites with love these days!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <div id=\"page-wrapper\">\n      <div class=\"row\">\n        <h1>My First Angular 2 App</h1>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
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
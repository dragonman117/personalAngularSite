"use strict";
var router_1 = require('@angular/router');
var app_home_component_1 = require('./app.home.component');
var appRoutes = [
    {
        path: '',
        component: app_home_component_1.Home
    },
    {
        path: 'home',
        component: app_home_component_1.Home
    },
    {
        path: 'blog',
        loadChildren: 'app/blog/blog.module#BlogModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map
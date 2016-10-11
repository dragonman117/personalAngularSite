"use strict";
var router_1 = require('@angular/router');
var blog_component_1 = require('./blog.component');
var blog_detail_component_1 = require('./blog.detail.component');
var blogRoutes = [
    { path: 'blog', component: blog_component_1.Blog, pathMatch: 'full' },
    { path: 'blog/:id', component: blog_detail_component_1.BlogDetail }
];
exports.blogRouting = router_1.RouterModule.forChild(blogRoutes);
//# sourceMappingURL=blog.routing.js.map
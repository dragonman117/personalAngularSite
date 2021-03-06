"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blog_service_1 = require("./services/blog.service");
var BlogDetail = (function () {
    function BlogDetail(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    BlogDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.article = _this.blogService.getArticle(id); // todo: update when rest api is working
            console.log("Blog Entry");
            console.log(_this.article);
        });
    };
    BlogDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article',
            templateUrl: 'html/article.html',
            styleUrls: ['css/blog.css']
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.ActivatedRoute, router_1.Router])
    ], BlogDetail);
    return BlogDetail;
}());
exports.BlogDetail = BlogDetail;
//# sourceMappingURL=blog.detail.component.js.map
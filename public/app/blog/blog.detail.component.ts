import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogService } from "./services/blog.service";

import { BlogEntry } from './models/blogEntry';

@Component({
    moduleId: module.id,
    selector: 'article',
    templateUrl: 'html/article.html',
    styleUrls: ['css/blog.css']
})
export class BlogDetail implements OnInit {

    private article: BlogEntry;


    constructor(private blogService:BlogService,
                private route: ActivatedRoute,
                private router: Router){  }

    ngOnInit():void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.article = this.blogService.getArticle(id); // todo: update when rest api is working
            console.log("Blog Entry");
            console.log(this.article);
        });
    }
}

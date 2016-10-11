import {Component, OnInit} from '@angular/core';
import { BlogService } from "./services/blog.service";

import { BlogEntry } from './models/blogEntry';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'html/home.html',
    styleUrls: ['css/blog.css']
})
export class Blog implements OnInit {

    private articles: BlogEntry[];

    constructor(private blogService:BlogService){
        this.articles = [];
    }

    ngOnInit():void {
        this.articles = this.blogService.getBlogEntries();
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { Blog } from './blog.component';
import { BlogDetail } from './blog.detail.component';
import { blogRouting } from './blog.routing';
import { BlogService } from './services/blog.service';


@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        blogRouting
    ],
    declarations: [
        Blog,
        BlogDetail
    ],
    providers: [
        BlogService
    ]
})
export class BlogModule {}

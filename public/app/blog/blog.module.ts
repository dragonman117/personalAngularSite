import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { Blog } from './blog.component';
import { blogRouting } from './blog.routing'


@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        blogRouting
    ],
    declarations: [
        Blog
    ],
    providers: []
})
export class BlogModule {}

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog }    from './blog.component';
import { BlogDetail } from './blog.detail.component';

const blogRoutes: Routes = [
    { path: 'blog',  component: Blog, pathMatch: 'full' },
    { path: 'blog/:id', component: BlogDetail }
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);

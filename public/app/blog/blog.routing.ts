import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog }    from './blog.component';

const blogRoutes: Routes = [
    { path: '',  component: Blog },
];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);

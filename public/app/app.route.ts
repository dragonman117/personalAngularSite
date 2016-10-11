import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './app.home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'blog',
        loadChildren: 'app/blog/blog.module#BlogModule'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

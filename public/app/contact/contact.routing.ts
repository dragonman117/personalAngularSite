import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contact }    from './contact.component';

const contactRoutes: Routes = [
    { path: 'contact',  component: Contact, pathMatch: 'full' }
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);

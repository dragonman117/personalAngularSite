import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { Contact } from './contact.component';
import { contactRouting } from './contact.routing'


@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        contactRouting
    ],
    declarations: [
        Contact
    ],
    providers: []
})
export class ContactModule {}

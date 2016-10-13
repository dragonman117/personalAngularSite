import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { Contact } from './contact.component';
import { contactRouting } from './contact.routing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        contactRouting,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        Contact
    ],
    providers: []
})
export class ContactModule {}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from 'angular2-mdl';

import { AppComponent }   from './app.component';
import { Home } from './app.home.component'

import { routing } from './app.route';

/* Feature Modules */
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module'

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        BlogModule,
        MdlModule,
        routing
    ],
    declarations: [ AppComponent, Home ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {Ng2Webstorage} from 'ngx-webstorage';

import { InterceptedHttp } from "./service/interceptor.service";

import { routes } from './app.router';

import { ProjectsModule } from './module/projects/projects.module';


import { AuthFactoryService } from './service/auth-factory.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProjectsModule,
    HttpModule,
    Ng2Webstorage,
    routes
  ],
  providers: [
    {
        provide: Http,
        useFactory: InterceptedHttp,
        deps: [XHRBackend, RequestOptions]
    },
    AuthFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

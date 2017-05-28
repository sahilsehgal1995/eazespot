import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';

import { InterceptedHttp } from "./service/interceptor.service";

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    {
        provide: Http,
        useFactory: InterceptedHttp,
        deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

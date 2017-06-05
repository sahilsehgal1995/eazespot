import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Http, XHRBackend, RequestOptions} from '@angular/http';

import { InterceptedHttp } from "../../service/interceptor.service";
import { AuthFactoryService } from '../../service/auth-factory.service';


export const router: Routes = [
    { path: 'projects', component: ProjectsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  providers: [
    // {
    //     provide: Http,
    //     useFactory: InterceptedHttp,
    //     deps: [XHRBackend, RequestOptions]
    // },
    AuthFactoryService
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    { path: 'projects', component: ProjectsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }

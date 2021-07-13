import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';


import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


const routes: Routes = [
  { path: '', component: ProjectComponent},
  { path: 'project-create', loadChildren: () => import('./project-create/project-create.module').then(m => m.ProjectCreateModule) },
  { path: ':id/project-detail', loadChildren: () => import('./project-detail/project-detail.module').then(m => m.ProjectDetailModule)},
  { path: ':id/project-edit', loadChildren: () => import('./project-edit/project-edit.module').then(m => m.ProjectEditModule)},
  
  

  // { path: 'project-create', component: ProjectCreateComponent },
  // { path: 'project-edit', component: ProjectEditComponent },
  // { path: 'project-task', loadChildren: () => import('./project-detail/project-task/project-task.module').then(m => m.ProjectTaskModule) },


  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'project-create', loadChildren: () => import('./project-create/project-create.module').then(m => m.ProjectCreateModule) },
  { path: 'project-task', loadChildren: () => import('./project-task/project-task.module').then(m => m.ProjectTaskModule) },
  { path: 'project-edit', loadChildren: () => import('./project-edit/project-edit.module').then(m => m.ProjectEditModule) },
  
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

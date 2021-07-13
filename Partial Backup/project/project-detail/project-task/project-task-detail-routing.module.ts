import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTaskDetailComponent } from './project-task-detail.component';

const routes: Routes = [
  { path: '', component: ProjectTaskDetailComponent },
  { path: 'project-task-create', loadChildren: () => import('../project-task/project-task-create/project-task-create.module').then(m => m.ProjectTaskCreateModule) },
  { path: 'project-task-edit', loadChildren: () => import('../project-task/project-task-edit/project-task-edit.module').then(m => m.ProjectTaskEditModule) },
  { path: 'project-task-delete', loadChildren: () => import('../project-task/project-task-delete/project-task-delete.module').then(m => m.ProjectTaskDeleteModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskDetailRoutingModule { 

  
}

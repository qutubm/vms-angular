import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail.component';


const routes: Routes = [
  {
    path: '', component: ProjectDetailComponent,
    children: [
      { path: '', loadChildren: () => import('./project-task/project-task-list/project-task-list.module').then(m => m.ProjectTaskListModule) },
      { path: 'project-task-list', loadChildren: () => import('./project-task/project-task-list/project-task-list.module').then(m => m.ProjectTaskListModule) }, //Used to delete the project task
      
      //   { path: 'project-task', loadChildren: () => import('./project-task/project-task.module').then(m => m.ProjectTaskModule) },
      //   { path: 'project-member', loadChildren: () => import('./project-member/project-member.module').then(m => m.ProjectMemberModule) },
      //   { path: 'project-faq', loadChildren: () => import('./project-faq/project-faq.module').then(m => m.ProjectFaqModule) },
      //   { path: 'project-'}
    ]
  },
  //Used to view sub-task, comments, and status of the information.//Used to view sub-task, comments, and status of the information.
  { path: 'project-task-create', loadChildren: () => import('./project-task/project-task-create/project-task-create.module').then(m => m.ProjectTaskCreateModule) },
  { path: 'project-task-edit', loadChildren: () => import('./project-task/project-task-edit/project-task-edit.module').then(m => m.ProjectTaskEditModule) },
  { path: 'project-task-delete', loadChildren: () => import('./project-task/project-task-delete/project-task-delete.module').then(m => m.ProjectTaskDeleteModule) },
  { path: 'project-faq', loadChildren: () => import('./project-faq/project-faq.module').then(m => m.ProjectFaqModule) },
  { path: 'project-info', loadChildren: () => import('./project-info/project-info.module').then(m => m.ProjectInfoModule) },
  // { path: 'project-faq', loadChildren: () => import('./project-faq/project-faq.module').then(m => m.ProjectFaqModule) }, 
  // { path: 'project-member', loadChildren: () => import('./project-member/project-member.module').then(m => m.ProjectMemberModule) }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }

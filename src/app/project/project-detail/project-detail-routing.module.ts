import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail.component';
import { ProjectTaskComponent } from './project-task/project-task.component'

const routes: Routes = [
  { path: '', component: ProjectDetailComponent}, 
  { path: 'project-task', loadChildren: () => import('./project-task/project-task.module').then(m => m.ProjectTaskModule) }, 
  { path: 'project-faq', loadChildren: () => import('./project-faq/project-faq.module').then(m => m.ProjectFaqModule) }, 
  { path: 'project-member', loadChildren: () => import('./project-member/project-member.module').then(m => m.ProjectMemberModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }

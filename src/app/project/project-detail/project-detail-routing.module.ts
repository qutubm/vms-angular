import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [{ path: '', component: ProjectDetailComponent }, { path: 'project-faq', loadChildren: () => import('./project-faq/project-faq.module').then(m => m.ProjectFaqModule) }, { path: 'project-member', loadChildren: () => import('./project-member/project-member.module').then(m => m.ProjectMemberModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }

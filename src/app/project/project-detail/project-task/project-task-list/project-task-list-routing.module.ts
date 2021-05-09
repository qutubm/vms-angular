import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTaskListComponent } from './project-task-list.component';

const routes: Routes = [{ path: '', component: ProjectTaskListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskListRoutingModule { }

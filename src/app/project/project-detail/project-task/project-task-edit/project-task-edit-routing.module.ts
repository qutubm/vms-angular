import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTaskEditComponent } from './project-task-edit.component';

const routes: Routes = [{ path: '', component: ProjectTaskEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskEditRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTaskDeleteComponent } from './project-task-delete.component';

const routes: Routes = [{ path: '', component: ProjectTaskDeleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskDeleteRoutingModule { }

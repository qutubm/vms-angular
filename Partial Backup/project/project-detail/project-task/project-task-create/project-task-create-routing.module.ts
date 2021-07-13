import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTaskCreateComponent } from './project-task-create.component';

const routes: Routes = [{ path: '', component: ProjectTaskCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskCreateRoutingModule { }

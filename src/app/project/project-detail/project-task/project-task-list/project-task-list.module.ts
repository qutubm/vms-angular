import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskListRoutingModule } from './project-task-list-routing.module';
import { ProjectTaskListComponent } from './project-task-list.component';


@NgModule({
  declarations: [ProjectTaskListComponent],
  imports: [
    CommonModule,
    ProjectTaskListRoutingModule
  ]
})
export class ProjectTaskListModule { }

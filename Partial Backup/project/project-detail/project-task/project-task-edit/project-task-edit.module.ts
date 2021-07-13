import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskEditRoutingModule } from './project-task-edit-routing.module';
import { ProjectTaskEditComponent } from './project-task-edit.component';


@NgModule({
  declarations: [ProjectTaskEditComponent],
  imports: [
    CommonModule,
    ProjectTaskEditRoutingModule
  ]
})
export class ProjectTaskEditModule { }

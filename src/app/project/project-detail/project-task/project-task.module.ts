import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskRoutingModule } from './project-task-routing.module';
import { ProjectTaskComponent } from './project-task.component';


@NgModule({
  declarations: [ProjectTaskComponent],
  imports: [
    CommonModule,
    ProjectTaskRoutingModule
  ]
})
export class ProjectTaskModule { }

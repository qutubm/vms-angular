import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskDetailRoutingModule } from './project-task-detail-routing.module';
import { ProjectTaskDetailComponent } from './project-task-detail.component';


@NgModule({
  declarations: [ProjectTaskDetailComponent],
  imports: [
    CommonModule,
    ProjectTaskDetailRoutingModule
  ]
})
export class ProjectTaskDetailModule { }

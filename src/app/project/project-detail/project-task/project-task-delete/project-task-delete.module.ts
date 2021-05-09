import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskDeleteRoutingModule } from './project-task-delete-routing.module';
import { ProjectTaskDeleteComponent } from './project-task-delete.component';


@NgModule({
  declarations: [ProjectTaskDeleteComponent],
  imports: [
    CommonModule,
    ProjectTaskDeleteRoutingModule
  ]
})
export class ProjectTaskDeleteModule { }

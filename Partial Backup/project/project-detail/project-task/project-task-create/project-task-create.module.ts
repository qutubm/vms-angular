import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTaskCreateRoutingModule } from './project-task-create-routing.module';
import { ProjectTaskCreateComponent } from './project-task-create.component';


@NgModule({
  declarations: [ProjectTaskCreateComponent],
  imports: [
    CommonModule,
    ProjectTaskCreateRoutingModule
  ]
})
export class ProjectTaskCreateModule { }

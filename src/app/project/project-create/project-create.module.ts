import { NgModule } from '@angular/core';
import { ProjectCreateRoutingModule } from './project-create-routing.module';
import { ProjectCreateComponent } from './project-create.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    ProjectCreateRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectCreateModule { }

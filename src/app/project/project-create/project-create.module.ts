import { NgModule } from '@angular/core';
import { ProjectCreateRoutingModule } from './project-create-routing.module';
import { ProjectCreateComponent } from './project-create.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProjectCreateRoutingModule,

  ],
  exports: [
    FormsModule,
    CommonModule,
  ]
})
export class ProjectCreateModule { }

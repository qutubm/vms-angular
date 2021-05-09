import { NgModule } from '@angular/core';
import { ProjectCreateRoutingModule } from './project-create-routing.module';
import { ProjectCreateComponent } from './project-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProjectCreateRoutingModule,

  ],
  exports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ProjectCreateModule { 
  
}

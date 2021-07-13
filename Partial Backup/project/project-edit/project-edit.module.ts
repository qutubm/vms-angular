import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectEditRoutingModule } from './project-edit-routing.module';
import { ProjectEditComponent } from './project-edit.component';



@NgModule({
  declarations: [ProjectEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectEditRoutingModule,
  ],
  
})
export class ProjectEditModule { }



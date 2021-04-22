import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCreateRoutingModule } from './project-create-routing.module';
import { ProjectCreateComponent } from './project-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    CommonModule,
    ProjectCreateRoutingModule,
    FormsModule
  ]
})
export class ProjectCreateModule { }

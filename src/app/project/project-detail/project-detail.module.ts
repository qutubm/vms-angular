import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';


@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    ProjectDetailRoutingModule,
    CommonModule,
  ]
})
export class ProjectDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjectComponent } from './project.component';
import { ProjectService } from '../shared/service/project.service';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    ProjectRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,

  ],
  exports: [
    ProjectRoutingModule,
  ],
  providers: [
    ProjectService,
  ]
})
export class ProjectModule { }

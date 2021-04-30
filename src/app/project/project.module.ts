import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../shared/service/project.service';


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
  providers:[
   ProjectService,
  ]
})
export class ProjectModule { }

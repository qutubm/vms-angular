import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectService } from '../../shared/service/project.service';



@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    ProjectDetailRoutingModule,
    NgbModule,
    CommonModule,
  ],
  exports: [
    NgbModule,
  ],
  providers: [
    ProjectService,
  ]
})
export class ProjectDetailModule { }

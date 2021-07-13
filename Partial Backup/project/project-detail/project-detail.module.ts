import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailComponent } from './project-detail.component';

import { CommonModule } from '@angular/common';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectService } from '../project.service';



@NgModule({
  
  imports: [
    ProjectDetailRoutingModule,
    NgbModule,
    CommonModule,
    
  ],
  declarations: [ ProjectDetailComponent ],
  exports: [
    ProjectDetailComponent,
    NgbModule,
    
  ],
  bootstrap: [ProjectDetailComponent],
  providers: [
    ProjectService,
  ]
})
export class ProjectDetailModule { }

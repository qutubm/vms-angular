import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectMemberRoutingModule } from './project-member-routing.module';
import { ProjectMemberComponent } from './project-member.component';


@NgModule({
  declarations: [ProjectMemberComponent],
  imports: [
    CommonModule,
    ProjectMemberRoutingModule
  ]
})
export class ProjectMemberModule { }

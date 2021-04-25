import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectFaqRoutingModule } from './project-faq-routing.module';
import { ProjectFaqComponent } from './project-faq.component';


@NgModule({
  declarations: [ProjectFaqComponent],
  imports: [
    CommonModule,
    ProjectFaqRoutingModule
  ]
})
export class ProjectFaqModule { }

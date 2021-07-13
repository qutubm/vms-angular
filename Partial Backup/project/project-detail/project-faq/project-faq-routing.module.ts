import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectFaqComponent } from './project-faq.component';

const routes: Routes = [{ path: '', component: ProjectFaqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFaqRoutingModule { }

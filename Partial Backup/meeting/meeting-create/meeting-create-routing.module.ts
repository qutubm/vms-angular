import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingCreateComponent } from './meeting-create.component';

const routes: Routes = [{ path: '', component: MeetingCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingCreateRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingEditComponent } from './meeting-edit.component';

const routes: Routes = [{ path: '', component: MeetingEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingEditRoutingModule { }

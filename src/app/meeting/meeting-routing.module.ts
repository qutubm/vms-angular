import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingComponent } from './meeting.component';

const routes: Routes = [
  {
    path: '', component: MeetingComponent,
    children: [
      { path: '', component: MeetingListComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }

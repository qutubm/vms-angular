import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting.component';

const routes: Routes = [
  {path: '', component: MeetingComponent},
  { path: 'meeting-create', loadChildren: () => import('./meeting-create/meeting-create.module').then(m => m.MeetingCreateModule) },
  { path: 'meeting-edit', loadChildren: () => import('./meeting-edit/meeting-edit.module').then(m => m.MeetingEditModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }

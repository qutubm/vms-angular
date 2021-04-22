import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingEditRoutingModule } from './meeting-edit-routing.module';
import { MeetingEditComponent } from './meeting-edit.component';


@NgModule({
  declarations: [MeetingEditComponent],
  imports: [
    CommonModule,
    MeetingEditRoutingModule
  ]
})
export class MeetingEditModule { }

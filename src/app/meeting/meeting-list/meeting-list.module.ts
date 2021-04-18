import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingListRoutingModule } from './meeting-list-routing.module';
import { MeetingListComponent } from './meeting-list.component';


@NgModule({
  declarations: [MeetingListComponent],
  imports: [
    CommonModule,
    MeetingListRoutingModule
  ]
})
export class MeetingListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingCreateRoutingModule } from './meeting-create-routing.module';
import { MeetingCreateComponent } from './meeting-create.component';


@NgModule({
  declarations: [MeetingCreateComponent],
  imports: [
    CommonModule,
    MeetingCreateRoutingModule
  ]
})
export class MeetingCreateModule { }

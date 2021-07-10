import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesEditRoutingModule } from './profiles-edit-routing.module';
import { ProfilesEditComponent } from './profiles-edit.component';


@NgModule({
  declarations: [ProfilesEditComponent],
  imports: [
    CommonModule,
    ProfilesEditRoutingModule
  ]
})
export class ProfilesEditModule { }

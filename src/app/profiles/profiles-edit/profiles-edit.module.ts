import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProfilesEditRoutingModule } from './profiles-edit-routing.module';
import { ProfilesEditComponent } from './profiles-edit.component';


@NgModule({
  declarations: [ProfilesEditComponent],
  imports: [
    CommonModule,
    ProfilesEditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfilesEditModule { }

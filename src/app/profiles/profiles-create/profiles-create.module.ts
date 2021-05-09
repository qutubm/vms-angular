import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilesCreateRoutingModule } from './profiles-create-routing.module';
import { ProfilesCreateComponent } from './profiles-create.component';


@NgModule({
  declarations: [ProfilesCreateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProfilesCreateRoutingModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProfilesCreateModule { }

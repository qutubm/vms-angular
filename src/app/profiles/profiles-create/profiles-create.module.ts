import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesCreateRoutingModule } from './profiles-create-routing.module';
import { ProfilesCreateComponent } from './profiles-create.component';


@NgModule({
  declarations: [ProfilesCreateComponent],
  imports: [
    CommonModule,
    ProfilesCreateRoutingModule
  ]
})
export class ProfilesCreateModule { }

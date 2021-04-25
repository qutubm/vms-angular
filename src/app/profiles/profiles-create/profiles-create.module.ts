import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProfilesCreateRoutingModule } from './profiles-create-routing.module';
import { ProfilesCreateComponent } from './profiles-create.component';


@NgModule({
  declarations: [ProfilesCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfilesCreateRoutingModule,
  ]
})
export class ProfilesCreateModule { }

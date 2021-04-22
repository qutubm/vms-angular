import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesListRoutingModule } from './profiles-list-routing.module';
import { ProfilesListComponent } from './profiles-list.component';


@NgModule({
  declarations: [ProfilesListComponent],
  imports: [
    CommonModule,
    ProfilesListRoutingModule
  ]
})
export class ProfilesListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesDetailRoutingModule } from './profiles-detail-routing.module';
import { ProfilesDetailComponent } from './profiles-detail.component';


@NgModule({
  declarations: [ProfilesDetailComponent],
  imports: [
    CommonModule,
    ProfilesDetailRoutingModule
  ]
})
export class ProfilesDetailModule { }

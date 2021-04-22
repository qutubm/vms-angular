import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilesInviteRoutingModule } from './profiles-invite-routing.module';
import { ProfilesInviteComponent } from './profiles-invite.component';


@NgModule({
  declarations: [ProfilesInviteComponent],
  imports: [
    CommonModule,
    ProfilesInviteRoutingModule,
    FormsModule
  ]
})
export class ProfilesInviteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilesInviteRoutingModule } from './profiles-invite-routing.module';
import { ProfilesInviteComponent } from './profiles-invite.component';
import { SharedModule } from '../../../app/shared/shared.module';


@NgModule({
  declarations: [ProfilesInviteComponent],
  imports: [
    SharedModule,
    ProfilesInviteRoutingModule,
  ]
})
export class ProfilesInviteModule { }

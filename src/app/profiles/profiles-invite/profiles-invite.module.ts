import { NgModule } from '@angular/core';

import { ProfilesInviteRoutingModule } from './profiles-invite-routing.module';
import { ProfilesInviteComponent } from './profiles-invite.component';
import { SharedModule } from '../../../app/shared/shared.module';


@NgModule({
  declarations: [ProfilesInviteComponent],
  imports: [

    ProfilesInviteRoutingModule,
    SharedModule,
  ]
})
export class ProfilesInviteModule { }

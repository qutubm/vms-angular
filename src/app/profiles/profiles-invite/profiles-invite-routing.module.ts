import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesInviteComponent } from './profiles-invite.component';

const routes: Routes = [{ path: '', component: ProfilesInviteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesInviteRoutingModule { }

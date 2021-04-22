import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesDetailComponent } from './profiles-detail.component';

const routes: Routes = [{ path: '', component: ProfilesDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesDetailRoutingModule { }

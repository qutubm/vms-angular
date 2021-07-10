import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesEditComponent } from './profiles-edit.component';

const routes: Routes = [
  { path: '', component: ProfilesEditComponent },
  { path: '/profiles', loadChildren: () => import('../../profiles/profiles.module').then(m => m.ProfilesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesEditRoutingModule { }

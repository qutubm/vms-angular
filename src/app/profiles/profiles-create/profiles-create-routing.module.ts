import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesCreateComponent } from './profiles-create.component';

const routes: Routes = [
  { path: '', component: ProfilesCreateComponent },
  { path: '/profiles', loadChildren: () => import('../../profiles/profiles.module').then(m => m.ProfilesModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesCreateRoutingModule { }

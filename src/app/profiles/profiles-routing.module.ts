import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

const routes: Routes = [
  { path: '', component: ProfilesComponent }, 
  { path: 'profiles-list', loadChildren: () => import('./profiles-list/profiles-list.module').then(m => m.ProfilesListModule) }, 
  { path: 'profiles-create', loadChildren: () => import('./profiles-create/profiles-create.module').then(m => m.ProfilesCreateModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilesRoutingModule { }

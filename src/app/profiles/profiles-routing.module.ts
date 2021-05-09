import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';




const routes: Routes = [
  { path: '', component: ProfilesComponent},
  { path: 'profiles-invite', loadChildren: () => import('./profiles-invite/profiles-invite.module').then(m => m.ProfilesInviteModule) },
  { path: 'profiles-create', loadChildren: () => import('./profiles-create/profiles-create.module').then(m => m.ProfilesCreateModule) },
  { path: 'profiles-detail/:id', loadChildren: () => import('./profiles-detail/profiles-detail.module').then(m => m.ProfilesDetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilesRoutingModule { 

  
}

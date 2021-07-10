import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from '../project/project-detail/project-detail.component';

import { ProfilesDetailComponent } from './profiles-detail/profiles-detail.component';
import { ProfilesComponent } from './profiles.component';




const routes: Routes = [
  { path: '', component: ProfilesComponent,
    children:[
      { path: 'profiles-detail/:id', loadChildren: () => import('./profiles-detail/profiles-detail.module').then(m => m.ProfilesDetailModule) }
    ]
  },
  { path: 'profiles-invite', loadChildren: () => import('./profiles-invite/profiles-invite.module').then(m => m.ProfilesInviteModule),  },
  { path: 'profiles-create', loadChildren: () => import('./profiles-create/profiles-create.module').then(m => m.ProfilesCreateModule) },
  { path: 'profiles-edit/:id', loadChildren: () => import('./profiles-edit/profiles-edit.module').then(m => m.ProfilesEditModule) },
  //{ path: 'profiles-detail', loadChildren: () => import('./profiles-detail/profiles-detail.module').then(m => m.ProfilesDetailModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class ProfilesRoutingModule { 

  
}

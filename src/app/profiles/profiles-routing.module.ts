import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfilesComponent } from './profiles.component';




const routes: Routes = [
  {
    path: '', component: ProfilesComponent,
    children: [
      { path: '', component: ProfilesListComponent }
    ]
  },
  { path: 'profiles-list', loadChildren: () => import('./profiles-list/profiles-list.module').then(m => m.ProfilesListModule) },
  { path: 'profiles-create', loadChildren: () => import('./profiles-create/profiles-create.module').then(m => m.ProfilesCreateModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilesRoutingModule { }

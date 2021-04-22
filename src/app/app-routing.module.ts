import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';

const routes: Routes = [
  { path: 'profiles', component: ProfileListComponent },
  { path: 'newprofile', component: ProfileEditComponent },
  { path: '', redirectTo: 'profiles', pathMatch: 'full' },
  { path: 'meeting', loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule) },
  { path: '**', redirectTo: 'profiles', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

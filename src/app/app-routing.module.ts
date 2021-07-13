import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesCreateComponent } from './profiles/profiles-create/profiles-create.component';
import { ProfilesComponent } from './profiles/profiles.component';


const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiles-create', component: ProfilesCreateComponent },
  { path: 'profiles-create/:id/:type', component: ProfilesCreateComponent },
  // { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  // { path: 'meeting', loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule) },
  //{ path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) },
  //{ path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'project', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

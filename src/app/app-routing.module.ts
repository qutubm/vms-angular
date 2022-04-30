import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Profiles component import.
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesCreateComponent } from './profiles/profiles-create/profiles-create.component';

//Project component import.
import { ProjectComponent } from './project/project.component';
import { ProjectCreateEditComponent } from './project/project-create-edit/project-create-edit.component';
import { LoginComponent } from './security/login.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProjects' } },
  { path: 'project-create-edit', component: ProjectCreateEditComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProjects' } },
  { path: 'project-create-edit/:id', component: ProjectCreateEditComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProjects' } },

  { path: 'profiles', component: ProfilesComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProfiles' } },
  { path: 'profiles-create', component: ProfilesCreateComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProfiles' } },
  { path: 'profiles-create/:id/:type', component: ProfilesCreateComponent, canActivate: [AuthGuard], data: { claimType: 'canAccessProfiles' } },

  { path: 'login', component: LoginComponent },
  //{ path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  //{ path: 'meeting', loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule) },
  //{ path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) },
  //{ path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },

  { path: '', redirectTo: 'project', pathMatch: 'full' },
  // { path: '**', redirectTo: 'project', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

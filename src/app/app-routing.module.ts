import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'meeting', loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule) },
  { path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) },
  { path: 'dashboard', redirectTo: 'profiles', pathMatch: 'full' },
  { path: '**', redirectTo: 'profiles', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

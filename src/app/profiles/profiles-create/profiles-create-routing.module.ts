import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesCreateComponent } from './profiles-create.component';

const routes: Routes = [{ path: '', component: ProfilesCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesCreateRoutingModule { }

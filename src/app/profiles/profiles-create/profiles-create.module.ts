import { NgModule } from '@angular/core';

import { ProfilesCreateRoutingModule } from './profiles-create-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfilesCreateComponent } from './profiles-create.component';



@NgModule({
  declarations: [ProfilesCreateComponent],
  imports: [
    ProfilesCreateRoutingModule,
    SharedModule,
  ]
  // exports: [
  //   ProfilesCreateComponent
  // ],
  // bootstrap: [
  //   ProfilesCreateComponent
  // ]
})
export class ProfilesCreateModule { }

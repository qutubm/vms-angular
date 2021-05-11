import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilesCreateRoutingModule } from './profiles-create-routing.module';
import { ProfilesCreateComponent } from './profiles-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdTypeaheadBasic } from './profiles-create.component';

@NgModule({
  declarations: [ProfilesCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ProfilesCreateRoutingModule,
    NgbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProfilesCreateComponent
  ],
  bootstrap: [
    ProfilesCreateComponent
  ]
})
export class ProfilesCreateModule { }

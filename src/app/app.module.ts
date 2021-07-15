import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesCreateComponent} from './profiles/profiles-create/profiles-create.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';


@NgModule({
  declarations: [
    VmsAppComponent,
    NavBarComponent,
    DashboardComponent,
    ProfilesComponent,
    ProfilesCreateComponent,
    //ProfileCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SharedModule,
  ],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

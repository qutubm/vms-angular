import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { SharedModule } from './shared/shared.module';

import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesCreateComponent} from './profiles/profiles-create/profiles-create.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { ProjectCreateEditComponent } from './project/project-create-edit/project-create-edit.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { ProjectTaskComponent } from './project/project-view/project-task/project-task.component';
//import { ProfileCreateComponent } from './profile/profile-create/profile-create.component';


@NgModule({
  declarations: [
    VmsAppComponent,
    NavBarComponent,
    ProfilesComponent,
    ProfilesCreateComponent,
    ProjectComponent,
    ProjectCreateEditComponent,
    ProjectViewComponent,
    ProjectTaskComponent,
    //ProfileCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    AppRoutingModule,
    NgBootstrapFormValidationModule.forRoot(),
  ],
  exports: [
    SharedModule,
  ],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

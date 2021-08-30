import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';

// import { SharedModule } from './shared/shared.module';
import { NgbDateCustomParserFormatter, SharedModule } from './shared/index';

import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesCreateComponent} from './profiles/profiles-create/profiles-create.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { ProjectCreateEditComponent } from './project/project-create-edit/project-create-edit.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { ProjectTaskComponent } from './project/project-view/project-task/project-task.component';
import { LoginComponent } from './security/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './shared/http-interceptor';
import { ErrorInterceptor } from './shared/error.interceptor';


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
    LoginComponent,
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
    NgBootstrapFormValidationModule,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    { provide: HTTP_INTERCEPTORS, useClass : HttpRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass : ErrorInterceptor, multi: true },
  ],
  exports: [
    SharedModule,
  ],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';

// import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileThumbnailComponent } from './profile/profile-thumbnail/profile-thumbnail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProfileThumbnailComponent } from './Profile/profile-thumbnail/profile-thumbnail.component';

@NgModule({
  declarations: [
    VmsAppComponent,
    NavBarComponent,
    ProfileListComponent,
    ProfileThumbnailComponent,
    ProfileEditComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NgbModule,
  ],
  providers: [],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

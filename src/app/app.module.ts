import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    VmsAppComponent,
    NavBarComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,

  ],
  exports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { VmsAppComponent } from './vms-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    VmsAppComponent,
    NavBarComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [VmsAppComponent, NgbModule]
})
export class AppModule { }

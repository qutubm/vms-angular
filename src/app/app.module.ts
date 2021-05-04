import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
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

    BrowserModule,
    AppRoutingModule,


  ],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule,
 

  ],
  providers: [],
  bootstrap: [VmsAppComponent]
})
export class AppModule { }

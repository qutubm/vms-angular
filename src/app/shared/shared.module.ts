import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './components/shared.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    NgbModule,
  ],
  exports: [
    SharedComponent, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NgbModule,
  ]
})
export class SharedModule { }

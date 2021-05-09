import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilesComponent } from './profiles.component';
import { ProfilesService } from '../shared/service/profiles.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesRoutingModule } from './profiles-routing.module';




@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProfilesRoutingModule
  ],
  providers:[
    ProfilesService
  ]
})
export class ProfilesModule { }

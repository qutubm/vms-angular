import { NgModule } from '@angular/core';
import { ProfilesComponent } from './profiles.component';
import { ProfilesService } from '../shared/service/profiles.service';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProfilesDetailComponent } from './profiles-detail/profiles-detail.component';




@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    ProfilesRoutingModule,
    SharedModule,
    
  ],
  exports:[
    SharedModule,
  ],
  providers:[
    ProfilesService
  ],
  entryComponents:[ProfilesDetailComponent],
})
export class ProfilesModule { }
